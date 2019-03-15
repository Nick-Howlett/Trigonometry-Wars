import Player from "./player";
import { calculateTheta } from './utils';

class Game {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = new Player({x: Math.floor(canvas.width / 2), y: Math.floor(canvas.height / 2)});
        this.cursor = {x: 0, y: 0};
    }

    start(){
        setInterval(this.tick.bind(this), 20);
        this.canvas.addEventListener("mousemove", e => { // from https://codepen.io/chrisjaime/pen/lcEpn
            const rect = this.canvas.getBoundingClientRect();
            this.cursor.x = e.clientX - rect.left;
            this.cursor.y = e.clientY - rect.top;
        });
    }

    render(){
        this.ctx.clearRect(0, 0, this.width, this.height);
        const rot = calculateTheta(this.cursor);
        this.player.draw(this.ctx, rot);
    }

    tick(){
        this.render();
    }
}

export default Game;