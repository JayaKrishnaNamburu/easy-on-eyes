document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.onUpdated.addListener(function(tabId, change, tab) {
        if (change.status === "complete" && tab.url.includes('')) {
            chrome.tabs.executeScript(tabId, { file: 'magic.js' });
        }
    });
    const el = document.getElementById('force');
    el.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            if (tab.url.includes('')) {
                chrome.tabs.executeScript(tab.id, { file: 'magic.js' });
            } else {
                alert('Sorry plugin is not supported');
            }
        });
    });
}, false);