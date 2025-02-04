document.querySelectorAll(".grid-item").forEach(item => {
    item.addEventListener("click", () => {
        item.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    });
});
