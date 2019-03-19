import Player from "./player";
import { calculateTheta, lineCircleCollision} from './utils';
import Cursor from "./cursor";
import Laser from "./laser";
import Enemy from './enemy';

class Game {
    constructor(canvas, ctx, finishOverlay, scoreOverlay){
        this.finishOverlay = finishOverlay;
        this.scoreOverlay = scoreOverlay;
        this.canvas = canvas;
        this.ctx = ctx;
        this.dims = [canvas.width, canvas.height];
        this.mid = [canvas.width / 2, canvas.height / 2];
        this.player = new Player(this.mid);
        this.cursor = new Cursor();
        this.score = 0;
        this.laser = null;
        this.enemies = [];
    }

    start(){
        this.tickInterval = setInterval(this.tick.bind(this), 20);
        this.canvas.addEventListener("mousemove", e => { // from https://codepen.io/chrisjaime/pen/lcEpn
            const rect = this.canvas.getBoundingClientRect();
            this.cursor.updatePos((e.clientX - rect.left) - (this.canvas.width / 2), (e.clientY - rect.top) - (this.canvas.height / 2)); //position relative to player position.
        });
        this.clickListener = this.canvas.addEventListener("click", e => {
            this.laser  = new Laser(this.mid, calculateTheta(this.cursor.pos));
        });
        this.spawnInterval = setInterval(() => {
            this.enemies.push(new Enemy(this.eid, this.dims, 20));
        }, 1000);
    }

    gameOver(){
        clearInterval(this.tickInterval);
        clearInterval(this.spawnInterval);
        this.canvas.className = "inactive";
        this.finishOverlay.className = "overlay";
        this.finishOverlay.innerHTML += `Your Score is: ${this.score}`;
    }



    check_collisions(){
        this.enemies.forEach(enemy => {
            if(this.laser && lineCircleCollision([this.laser.pos, this.laser.vec], enemy.pos, enemy.radius)){
                delete this.enemies[this.enemies.indexOf(enemy)];
                this.score += 100;
            }
            if(this.player.is_collided(enemy)) this.gameOver();
        });
    }

    render(){
        this.scoreOverlay.innerHTML = `${this.score}`;
        this.ctx.clearRect(0, 0, this.dims[0], this.dims[1]);
        const rot = calculateTheta(this.cursor.pos) + (Math.PI / 2);
        this.player.draw(this.ctx, rot);
        if(this.laser) this.laser.draw(this.ctx);
        this.cursor.draw(this.ctx, this.mid);
        this.enemies.forEach(enemy => enemy.draw(this.ctx, this.mid));
    }

    tick(){
        if(this.laser){
            this.laser.grow();
            if(this.laser.is_finished()) this.laser = null;
        }
        this.enemies.forEach(enemy => enemy.move());
        this.check_collisions();
        this.score++;
        this.render();
    }
}

export default Game;