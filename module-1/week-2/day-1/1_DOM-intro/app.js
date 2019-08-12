console.log("hello world !!!");

function basicByIdSelection() {
  const nav = document.getElementById("nav_main");
  const content = document.getElementById("content_main");
  const footer = document.getElementById("footer_main");

  nav.style.background = "dodgerblue";
  nav.style.color = "white";
  nav.style.height = "20px";

  console.log(nav, nav.id);
  // nav.id = "foo_bar_baz";
  nav.className += " bar";
  console.log(nav.className);
  nav.classList.add("baz");
  console.log(content);
  console.log(footer);

  console.log(typeof nav);
}

function parseByTagType(tagName) {
    console.log("@parseByTagType() ---->");
    const list = document.getElementsByTagName(tagName);
    console.log(list);
    for (let i = 0; i < list.length; i += 1) {
        console.log(list[i]);
    }
}

function parseHackers() {
    console.log("@parseHackers() ---->");
    const hackers = document.getElementsByClassName("hacker");
    console.log(hackers);

    for (let i = 0; i < hackers.length; i += 1) {
        console.log(typeof hackers[i]); // prints object
        console.log(hackers[i]); // object
    }

    const converted = Array.from(hackers);
    // now we converted the HTMLCollection to a regular array
    // hence we benefit of Array's method and properties (through Array's prototype)
    converted.forEach(hacker => console.log(hacker))

    console.log("-------------------");
}

function handleClick(evt) { // evt is an implict argument
    console.log(evt);
    const element = evt.target || evt.srcElement;
    console.log("yay " + element.innerText + ', you have been clicked !!!');
    element.classList.toggle("is-active");
}


function attachClickEvents(cssSelector) {
    console.log("@attachClickEvents() ---->");
    const nodeList = document.querySelectorAll(cssSelector);
    console.log(nodeList);

    nodeList.forEach(element => {
        // element.onclick is the event-listener
        element.onclick = handleClick;
        // handleClick is the event-handler
    });

    console.log("-------------------");
}

function moveInsideTheDOMTree(cssSelector) {
    console.log("@moveInsideTheDOMTree() ---->");
    const target = document.querySelector(cssSelector);
    const parent = target.parentElement; // take care not using .parent
    const children = target.children; // take care not using .parent
    const prevSibling = target.previousElementSibling; // same hint here (.previousSibling)
    const nextSibling = target.nextElementSibling; // same hint here (.nextSibling)
    console.log(target);
    console.log("-------------------");
}

function start() {
    basicByIdSelection();
    parseHackers();
    // parseByTagType("a");
    parseByTagType("body");
    // parseByTagType("nav");
    moveInsideTheDOMTree("#nav_main .link");
    attachClickEvents(".cohort .hacker");
}

window.addEventListener("DOMContentLoaded", start); // triggers as many time as needed
// window.addEventListener("load", start); // only triggers one time per document
