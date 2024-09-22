// source/scripts/editor.js

// Get the script element
const appSageScript = document.getElementById('appSage-script');
// Set the src attribute to point to appSage.js within the extension
appSageScript.src = chrome.runtime.getURL('appSage/dist/appSage_preview.tailwind.js');
