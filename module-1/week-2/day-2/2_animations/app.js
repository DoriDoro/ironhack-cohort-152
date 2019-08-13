

const handler = (e) => {
    console.log(window);
    const target = e.target || e.srcElement;
    this.classList.toggle("is-rotating");
}

document.querySelectorAll(".block").forEach(block => {
    block.onclick = handler
});