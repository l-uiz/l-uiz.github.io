items = document.getElementsByClassName("bingo-item")
for (let i = 0; i < items.length; i++) {
    
    items[i].onclick = function() {
        items[i].setAttribute("id", "check")
    }
}