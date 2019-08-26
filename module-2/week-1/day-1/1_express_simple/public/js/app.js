console.log("hello client !!!");

function countDOMElements() {
    return document.querySelectorAll("*").length;
}

const btn = document.getElementById("my_btn");

btn.onclick = () => {
    console.log(`HTML elements count ${countDOMElements()}`);
}