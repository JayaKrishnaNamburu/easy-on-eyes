(function magic() {
    const scrollArea = document.getElementById('convArea-scrollarea');
    setStyle(scrollArea);
    const container = document.getElementById('container');
    setStyle(container);
    const msgItem = document.getElementsByClassName('body');
    const msgText = document.getElementsByClassName('markdown-body');
    Array.from(msgText).forEach((item) => item.style.color = "#ffffff");
    Array.from(msgItem).forEach((item) => {
        item.parentElement.style.backgroundColor = "#6E6E6E";
    });
    const msgArea = document.getElementById('message-area');
    msgArea.style.backgroundColor = "#040404";
    msgArea.parentElement.style.backgroundColor = "#040404";
    const inputArea = document.getElementsByClassName('messageArea');
    inputArea[0].style.backgroundColor = "#040404 !important";
    inputArea[0].style.background = "#040404 !important";
})()

function setStyle(el) {
    el.setAttribute("style", "background-color: #040404");
}

function setParentStyle(el) {
    el.parent.setAttribute("style", "background-color: #040404");
}
