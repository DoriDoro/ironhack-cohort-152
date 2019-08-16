// inspiration : https://gist.github.com/getify/2926699

/**
 * @todo implement collision detection https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
 */
export default class Circle {

    constructor(ctx) {
        if (!ctx) throw new Error("sorry, you need to specify ctx args.");
        this.ctx = ctx;
        this.xMove = Math.random() > .5 ? "right" : "left";
        this.yMove = Math.random() > .5 ? "down" : "up";
        this.moveRate = Math.floor(Math.random() * (7 - 3) + 3); // 20: max , 3: min
        this.r = this.getRandomRadius(10, 40);
        this.x = this.getRandomX(this.r * 2, this.ctx.canvas.width - this.r);
        this.y = this.getRandomY(this.r * 2, this.ctx.canvas.height - this.r);
        this.bg = this.getRandomBackground();
        this.draw();
        window.setTimeout(() => this.move(), 500);
    }

    getRandomX = (min, max) => Math.floor(Math.random() * (max - min) + min);

    getRandomY = (min, max) => Math.floor(Math.random() * (max - min) + min);

    getRandomRadius = (min, max) => Math.floor(Math.random() * (max - min) + min);

    getRandomBackground = () => {
        var color = '#', letters = '0123456789ABCDEF';
        for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
        return color;
    };

    draw() {
        this.ctx.fillStyle = this.bg;
        this.ctx.beginPath(); // mandatory. let's start to draw our circle
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2); // radians from 0 for a full circle
        //  above args => x  x  radius radian-start radian-end
        this.ctx.fill();
        this.ctx.closePath();
    }

    move = () => {
        const previous = { x: this.x, y: this.y }
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(previous.x, previous.y, this.r + 1, 0, 2 * Math.PI, true);
        this.ctx.clip();
        this.ctx.clearRect(previous.x - this.r, previous.y - this.r, this.r * 2, this.r * 2);
        this.ctx.restore();

        if (this.x <= this.r || this.x  >= this.ctx.canvas.width - this.r) {
            this.xMove = this.xMove === "right" ? "left" : "right";
        }

        if (this.y <= this.r || this.y >= this.ctx.canvas.height - this.r) {
            this.yMove = this.yMove === "down" ? "up" : "down";
        }

        this.x = this.xMove === "right" ? this.x + this.moveRate : this.x - this.moveRate;
        this.y = this.yMove === "down" ? this.y + this.moveRate : this.y - this.moveRate;

        // console.log(this.x, this.y);

        this.draw();

        window.requestAnimationFrame(this.move); // recursion (function call itselft)
    }
}