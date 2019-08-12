function getAllElementsAndParse() {
    const elements = document.querySelectorAll("*");
    elements.forEach(el => console.log(el.localName));
}

function getAllElementsAndParse2() {
    const elements = document.getElementsByTagName("*");
    // const converted = [...elements];
    console.log(elements.forEach);
    for (let index = 0; index < elements.length; index++) {
        console.log(elements[index].localName);
    }
}

// window.addEventListener("DOMContentLoaded", function() {
    getAllElementsAndParse2();
// });