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

// Hide font selection for now since CSP makes custom fonts a monolithic pain in the ass
document.querySelectorAll('select').forEach(function(selectElement) {
  const hasFontOption = Array.from(selectElement.options).some(option => option.value.startsWith('font-'));
  
  if (hasFontOption) {
    selectElement.style.display = 'none';
  }
});
