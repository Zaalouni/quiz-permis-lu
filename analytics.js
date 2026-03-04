/**
 * Google Analytics 4 Configuration
 * Centralizes GA4 tracking logic across all pages
 */

(function() {
  'use strict';

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];

  // Main gtag function
  function gtag() {
    dataLayer.push(arguments);
  }

  // Event tracking helper
  function trackEvent(eventName, params = {}) {
    gtag('event', eventName, params);
  }

  // Page view tracking
  function trackPageView(pagePath, pageTitle) {
    gtag('config', 'GTM-PBWRMC8N', {
      'page_path': pagePath,
      'page_title': pageTitle
    });
  }

  // Load Google Tag Manager
  function loadGTM() {
    if (window._gtmLoaded) return;
    window._gtmLoaded = true;

    (function(w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
      });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-PBWRMC8N');

    gtag('js', new Date());
    gtag('config', 'GTM-PBWRMC8N');
  }

  // Expose functions to window
  window.gtag = gtag;
  window.trackEvent = trackEvent;
  window.trackPageView = trackPageView;
  window.loadGTM = loadGTM;

  // Auto-load GTM if cookie consent already given
  if (localStorage.getItem('cookieConsent') === 'accepted') {
    loadGTM();
  }

  // Listen for cookie consent events
  window.addEventListener('cookieConsent', function(event) {
    if (event.detail && event.detail.consent === 'accepted') {
      loadGTM();
    }
  });

  // Track page views (can be called manually or auto-loaded)
  window.addEventListener('load', function() {
    if (window._gtmLoaded) {
      trackPageView(window.location.pathname, document.title);
    }
  });
})();
