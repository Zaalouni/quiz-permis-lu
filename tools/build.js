/**
 * Build script — Generates quiz-free.js + Cloudflare Worker
 *
 * Usage:  node tools/build.js
 *
 * Reads all quiz-*.js files, picks 50 questions for the free tier,
 * and bundles ALL questions into a Cloudflare Worker ready to deploy.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.resolve(__dirname, '..');

// --- Quiz files to process ---
const QUIZ_FILES = [
  'quiz-cours1.js',
  'quiz-cours2.js',
  'quiz-cours3.js',
  'quiz-data.js',
  'quiz-cours5.js',
  'quiz-snca.js',
  'quiz-snca2.js',
];

const FREE_COUNT = 30; // questions in free tier

// --- 1. Load all questions ---
const window = { QUIZ_QUESTIONS: [] };
QUIZ_FILES.forEach(file => {
  const filePath = path.join(ROOT, file);
  if (!fs.existsSync(filePath)) {
    console.warn(`WARN: ${file} not found, skipping.`);
    return;
  }
  const code = fs.readFileSync(filePath, 'utf8');
  try {
    eval(code);
  } catch (e) {
    console.error(`ERROR evaluating ${file}:`, e.message);
  }
});

const allQuestions = window.QUIZ_QUESTIONS;
console.log(`Total questions loaded: ${allQuestions.length}`);

// --- 2. Pick diverse free questions ---
// Group by topic
const byTopic = {};
allQuestions.forEach((q, i) => {
  const t = q.topic || 'Autre';
  if (!byTopic[t]) byTopic[t] = [];
  byTopic[t].push({ ...q, _origIndex: i });
});

const topics = Object.keys(byTopic);
console.log(`Topics found: ${topics.length}`);
topics.forEach(t => console.log(`  - ${t}: ${byTopic[t].length} questions`));

// Pick proportionally from each topic
let freeQuestions = [];
const perTopic = Math.max(2, Math.floor(FREE_COUNT / topics.length));
topics.forEach(t => {
  const pool = byTopic[t].slice(); // copy
  // Shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  freeQuestions.push(...pool.slice(0, perTopic));
});

// Trim or pad to exactly FREE_COUNT
if (freeQuestions.length > FREE_COUNT) {
  freeQuestions = freeQuestions.slice(0, FREE_COUNT);
} else {
  // Add more from remaining questions
  const freeIds = new Set(freeQuestions.map(q => q._origIndex));
  for (const q of allQuestions) {
    if (freeQuestions.length >= FREE_COUNT) break;
    const idx = allQuestions.indexOf(q);
    if (!freeIds.has(idx)) {
      freeQuestions.push({ ...q, _origIndex: idx });
      freeIds.add(idx);
    }
  }
}

// Clean _origIndex
const freeSet = new Set(freeQuestions.map(q => q._origIndex));
freeQuestions = freeQuestions.map(({ _origIndex, ...q }) => q);

// Premium = all questions NOT in free set
const premiumQuestions = allQuestions.filter((_, i) => !freeSet.has(i));

console.log(`Free: ${freeQuestions.length} | Premium: ${premiumQuestions.length}`);

// --- 3. Generate quiz-free.js ---
const freeJS = `// Quiz gratuit — ${freeQuestions.length} questions (version libre)
// Les questions premium nécessitent une licence valide.
window.QUIZ_QUESTIONS = window.QUIZ_QUESTIONS || [];
window.QUIZ_QUESTIONS.push(
${freeQuestions.map(q => '  ' + JSON.stringify(q)).join(',\n')}
);
`;

fs.writeFileSync(path.join(ROOT, 'quiz-free.js'), freeJS, 'utf8');
console.log(`\nGenerated: quiz-free.js (${freeQuestions.length} questions)`);

// --- 4. Generate license codes ---
function generateCode() {
  return crypto.randomBytes(6).toString('hex').toUpperCase().match(/.{4}/g).join('-');
}

function hashCode(code) {
  return crypto.createHash('sha256').update(code.trim().toUpperCase()).digest('hex');
}

const NUM_CODES = 10;
const codes = [];
for (let i = 0; i < NUM_CODES; i++) {
  const code = generateCode();
  codes.push({ code, hash: hashCode(code) });
}

// Save codes to a private file (never commit this!)
const codesFile = path.join(ROOT, 'tools', 'license-codes.txt');
let codesContent = `# License Codes — Generated ${new Date().toISOString()}\n`;
codesContent += `# NEVER commit this file! Keep it private.\n\n`;
codes.forEach((c, i) => {
  codesContent += `Code ${i + 1}: ${c.code}\n`;
});
fs.writeFileSync(codesFile, codesContent, 'utf8');
console.log(`Generated: tools/license-codes.txt (${NUM_CODES} codes)`);

// --- 5. Generate Cloudflare Worker ---
const workerJS = `/**
 * Cloudflare Worker — Quiz Permis Luxembourg (Premium API + Leaderboard)
 *
 * Deploy: wrangler deploy
 * Or paste in Cloudflare Dashboard > Workers > Create
 *
 * KV Binding required: LEADERBOARD (namespace QUIZ_LEADERBOARD)
 */

// --- License codes (SHA-256 hashes) ---
const VALID_HASHES = new Set([
${codes.map(c => `  "${c.hash}",`).join('\n')}
]);

// --- Premium questions (${premiumQuestions.length} questions) ---
const PREMIUM_QUESTIONS = ${JSON.stringify(premiumQuestions)};

// --- ALL questions (for full access) ---
const ALL_QUESTIONS = ${JSON.stringify(allQuestions)};

// --- CORS ---
const CORS_ORIGIN = "https://zaalouni.github.io";

const corsHeaders = {
  "Access-Control-Allow-Origin": CORS_ORIGIN,
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
  "Content-Type": "application/json",
};

// --- SHA-256 hash ---
async function sha256(text) {
  const data = new TextEncoder().encode(text.trim().toUpperCase());
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return [...new Uint8Array(hashBuffer)]
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");
}

// --- Leaderboard helpers ---
const MAX_LEADERBOARD = 20;

async function getLeaderboard(env) {
  try {
    const data = await env.LEADERBOARD.get("top_scores", "json");
    return data || [];
  } catch(e) { return []; }
}

async function addScore(env, name, score, total, exam) {
  let board = await getLeaderboard(env);
  const pct = Math.round(100 * score / total);
  const entry = {
    name: (name || "Anonyme").substring(0, 20),
    score: score,
    total: total,
    pct: pct,
    exam: !!exam,
    date: new Date().toISOString().split("T")[0]
  };
  board.push(entry);
  board.sort((a, b) => b.pct - a.pct || b.score - a.score);
  board = board.slice(0, MAX_LEADERBOARD);
  await env.LEADERBOARD.put("top_scores", JSON.stringify(board));
  return board;
}

// --- Handler ---
export default {
  async fetch(request, env) {
    // CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);

    // --- GET /leaderboard ---
    if (request.method === "GET" && url.pathname === "/leaderboard") {
      const board = await getLeaderboard(env);
      return new Response(
        JSON.stringify({ leaderboard: board }),
        { headers: corsHeaders }
      );
    }

    // --- POST /score ---
    if (request.method === "POST" && url.pathname === "/score") {
      try {
        const { name, score, total, exam } = await request.json();
        if (typeof score !== "number" || typeof total !== "number" || total < 1) {
          return new Response(
            JSON.stringify({ error: "Données invalides" }),
            { status: 400, headers: corsHeaders }
          );
        }
        const board = await addScore(env, name, score, total, exam);
        return new Response(
          JSON.stringify({ success: true, leaderboard: board }),
          { headers: corsHeaders }
        );
      } catch(e) {
        return new Response(
          JSON.stringify({ error: "Requête invalide" }),
          { status: 400, headers: corsHeaders }
        );
      }
    }

    // --- POST /activate ---
    if (request.method === "POST" && url.pathname === "/activate") {
      try {
        const { code } = await request.json();
        if (!code) {
          return new Response(
            JSON.stringify({ valid: false, error: "Code manquant" }),
            { status: 400, headers: corsHeaders }
          );
        }
        const hash = await sha256(code);
        if (VALID_HASHES.has(hash)) {
          return new Response(
            JSON.stringify({
              valid: true,
              questions: ALL_QUESTIONS,
              total: ALL_QUESTIONS.length,
            }),
            { headers: corsHeaders }
          );
        } else {
          return new Response(
            JSON.stringify({ valid: false, error: "Code de licence invalide" }),
            { status: 403, headers: corsHeaders }
          );
        }
      } catch (e) {
        return new Response(
          JSON.stringify({ valid: false, error: "Requête invalide" }),
          { status: 400, headers: corsHeaders }
        );
      }
    }

    return new Response(
      JSON.stringify({ error: "Not found" }),
      { status: 404, headers: corsHeaders }
    );
  },
};
`;

const workerPath = path.join(ROOT, 'tools', 'cloudflare-worker.js');
fs.writeFileSync(workerPath, workerJS, 'utf8');
console.log(`Generated: tools/cloudflare-worker.js (${allQuestions.length} questions embedded)`);

// --- 6. Summary ---
console.log(`\n========================================`);
console.log(`BUILD COMPLETE`);
console.log(`========================================`);
console.log(`Free questions:    ${freeQuestions.length}`);
console.log(`Premium questions: ${premiumQuestions.length}`);
console.log(`Total questions:   ${allQuestions.length}`);
console.log(`License codes:     ${NUM_CODES}`);
console.log(`\nFiles generated:`);
console.log(`  1. quiz-free.js              → Push to GitHub`);
console.log(`  2. tools/cloudflare-worker.js → Deploy to Cloudflare`);
console.log(`  3. tools/license-codes.txt    → Keep PRIVATE`);
console.log(`\nNext steps:`);
console.log(`  1. Deploy tools/cloudflare-worker.js to Cloudflare Workers`);
console.log(`  2. Copy the Worker URL`);
console.log(`  3. Update WORKER_URL in index.html`);
console.log(`  4. Remove old quiz-*.js files from git`);
console.log(`  5. Push to GitHub`);
