// source/scripts/editor.js

// Get the script element
const appSageScript = document.getElementById('appSage-script');
// Set the src attribute to point to appSage.js within the extension
appSageScript.src = chrome.runtime.getURL('appSage/dist/appSage_editor.tailwind.js');

// Update the stylesheet href (if applicable)
const styleElement = document.getElementById('appSage-style');
if (styleElement) {
  styleElement.href = chrome.runtime.getURL('appSage/dist/appSage.css');
}
