function toggleCSS(target) {
    target.classList.toggle("is-active");
}

const lis = document.querySelectorAll("#users .user");

lis.forEach(li => li.onclick = (e) => {
    toggleCSS(e.target); 
});