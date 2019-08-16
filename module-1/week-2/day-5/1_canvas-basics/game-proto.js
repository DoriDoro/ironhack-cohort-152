import Player from "./player.js";
import Circle from "./circle.js";

(function () {
    "use strict";


    function start() {
        const canvas = document.getElementById("board"); // simple byId fetch ...
        const ctx = canvas.getContext("2d"); // the context allows you to draw on the canvas
        const circles = [];
        const circleCount  = document.getElementById("circle_count");
        circleCount.textContent = circles.length;
        const playerLife  = document.getElementById("player_life");
        const maxCircleCount = 5;
        canvas.width = canvas.scrollWidth; // get drawing surface width set in css
        canvas.height = canvas.scrollHeight; // get drawing surface height set in css  
        
        const playerOne = new Player(ctx);

        // console.log(ctx);
        // console.log(playerOne);

        const interval = window.setInterval(() => {
            if (circles.length < maxCircleCount) {
                circles.push(new Circle(ctx, canvas.width, canvas.height));
                circleCount.textContent = circles.length;
            } else window.clearInterval(interval);
        }, 1000);

    }

    window.addEventListener("DOMContentLoaded", start);

}());