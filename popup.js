document.addEventListener('DOMContentLoaded', function() {
    const el = document.getElementById('force');
    el.addEventListener('click', function() {
        chrome.tabs.getSelected(null, function(tab) {
            if (tab.url.includes('talk.fresco')) {
                chrome.tabs.executeScript(null, { file: 'magic.js' });
            } else {
                alert('Sorry plugin is not supported');
            }
        });
    });
}, false);