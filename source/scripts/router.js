// source/scripts/router.js

import { renderHomePage } from './homePage.js';

export function router() {
  const route = window.location.hash.substring(1) || 'home';
  if (route === 'editor') {
    // Navigate to editor.html
    window.location.href = chrome.runtime.getURL('editor.html?config=Dashboard');
  } else {
    // Render the home page or other routes
    renderHomePage();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
