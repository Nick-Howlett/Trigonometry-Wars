import Player from "./player";
import { calculateTheta } from './utils';
import Cursor from "./cursor";
import Laser from "./laser";

class Game {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.mid = {x: Math.floor(canvas.width / 2), y: Math.floor(canvas.height / 2)};
        this.player = new Player(this.mid);
        this.cursor = new Cursor();
        this.score = 0;
        this.lasers = null;
    }

    start(){
        setInterval(this.tick.bind(this), 20);
        this.canvas.addEventListener("mousemove", e => { // from https://codepen.io/chrisjaime/pen/lcEpn
            const rect = this.canvas.getBoundingClientRect();
            this.cursor.x = (e.clientX - rect.left) - (this.canvas.width / 2);
            this.cursor.y = (e.clientY - rect.top) - (this.canvas.height / 2);
        });
        this.canvas.addEventListener("click", e => {
            const laser = new Laser(this.mid, calculateTheta(this.cursor));
            this.laser = laser;
        });
    }

    render(){
        this.ctx.clearRect(0, 0, this.width, this.height);
        const rot = calculateTheta(this.cursor) + (Math.PI / 2);
        this.player.draw(this.ctx, rot);
        this.cursor.draw(this.ctx, this.mid);
        if(this.laser) this.laser.draw(this.ctx);
    }

    tick(){
        if(this.laser){
            this.laser.len += this.laser.vel;
            this.laser.duration--;
            if(this.laser.duration === 0) this.laser = null;
        } 
        this.render();
        
    }
}

export default Game;