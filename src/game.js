import Player from "./player";
import { calculateTheta, randomEdgePos} from './utils';
import { lineCircleCollision, edgeCollision} from './collisions'; 
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
        this.player = new Player(this.mid, 0, 0);
        this.cursor = new Cursor();
        this.score = 0;
        this.laser = null;
        this.entities = [this.player];
    }

    start(){
        this.tickInterval = setInterval(this.tick.bind(this), 20);
        this.canvas.addEventListener("mousemove", e => { // from https://codepen.io/chrisjaime/pen/lcEpn
            const rect = this.canvas.getBoundingClientRect();
            this.cursor.updatePos(e.clientX - rect.left, e.clientY - rect.top);
            console.log(this.cursor.pos);
        });
        this.clickListener = this.canvas.addEventListener("click", e => {
            this.laser = new Laser(this.player.pos, calculateTheta(this.player.pos, this.cursor.pos));
        });
        this.spawnInterval = setInterval(() => {
            const startPos = randomEdgePos(...this.dims);
            this.entities.push(new Enemy(this.eid, startPos, 2, calculateTheta(startPos, this.player.pos)));
        }, 1000);
        document.addEventListener("keydown", e => {
            if(e.key === "w") this.player.accelerate(-4);
        });
    }

    gameOver(){
        clearInterval(this.tickInterval);
        clearInterval(this.spawnInterval);
        this.canvas.className = "inactive";
        this.finishOverlay.className = "overlay";
        const score = document.createTextNode(`Your Score is: ${this.score}`);
        this.finishOverlay.appendChild(score);
    }


    check_collisions(){
        this.entities.slice(1).forEach(enemy => {
            console.log(enemy.pos)
            if(this.laser){
            let pos = this.laser.pos;
            this.laser.vec.forEach(vector => {
                if(lineCircleCollision([pos, vector], enemy.pos, enemy.radius)){
                    delete this.entities[this.entities.indexOf(enemy)];
                    this.score += 100;
                }
                    pos = vector;
                });
            }
            if(this.player.is_collided(enemy)) this.gameOver();
        });
    }

    render(){
        this.scoreOverlay.innerHTML = `${this.score}`;
        this.ctx.clearRect(0, 0, this.dims[0], this.dims[1]);
        if(this.laser) this.laser.draw(this.ctx);
        this.cursor.draw(this.ctx);
        this.entities.forEach(entity => entity.draw(this.ctx));
    }

    tick(){
        if(this.laser){
            this.laser.grow();
            if(this.laser.is_finished()) this.laser = null;
        }
        this.entities.forEach(entity => {
            if(entity === this.player){
                entity.rotate(calculateTheta(this.player.pos, this.cursor.pos));
            } else {
                entity.rotate(calculateTheta(this.player.pos, entity.pos));
            }
            entity.move();
        });
        this.player.decelerate();   
        this.check_collisions();
        this.score++;
        this.render();
    }
}

export default Game;