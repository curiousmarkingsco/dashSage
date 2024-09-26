// source/scripts/redirect.js

(function() {
  const urlParams = new URLSearchParams(window.location.search);
  if (!urlParams.has('page')) {
    urlParams.set('page', 'Dashboard');
    const newUrl = window.location.pathname + '?' + urlParams.toString() + window.location.hash;
    window.location.replace(newUrl);
  }
  if (!urlParams.has('config')) {
    urlParams.set('config', 'Dashboard');
    const newUrl = window.location.pathname + '?' + urlParams.toString() + window.location.hash;
    window.location.replace(newUrl);
  }
})();
