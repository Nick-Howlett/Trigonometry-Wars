import Player from "./player";
import { calculateTheta } from './utils';
import Cursor from "./cursor";
import Laser from "./laser";
import Enemy from './enemy';

class Game {
    constructor(canvas, ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.dims = [canvas.width, canvas.height];
        this.mid = [Math.floor(canvas.width / 2), Math.floor(canvas.height / 2)];
        this.player = new Player(this.mid);
        this.cursor = new Cursor();
        this.score = 0;
        this.laser = null;
        this.enemies = [];
        this.eid = 1; //enemy id, sequential
    }

    start(){
        setInterval(this.tick.bind(this), 20);
        this.canvas.addEventListener("mousemove", e => { // from https://codepen.io/chrisjaime/pen/lcEpn
            const rect = this.canvas.getBoundingClientRect();
            this.cursor.updatePos((e.clientX - rect.left) - (this.canvas.width / 2), (e.clientY - rect.top) - (this.canvas.height / 2)); //position relative to player position.
        });
        this.canvas.addEventListener("click", e => {
            const laser = new Laser(this.mid, calculateTheta(this.cursor.pos));
            this.laser = laser;
        });
        setInterval(() => {
            this.enemies.push(new Enemy(this.eid, this.dims, 12));
            this.eid++;
        }, 1000);
    }

    render(){
        this.ctx.clearRect(0, 0, this.dims[0], this.dims[1]);
        const rot = calculateTheta(this.cursor.pos) + (Math.PI / 2);
        this.player.draw(this.ctx, rot);
        if(this.laser) this.laser.draw(this.ctx);
        this.cursor.draw(this.ctx, this.mid);
        this.enemies.forEach(enemy => enemy.draw(this.ctx));
    }

    tick(){
        if(this.laser){
            this.laser.grow();
            if(this.laser.is_finished()) this.laser = null;
        }
        this.render();
    }
}

export default Game;