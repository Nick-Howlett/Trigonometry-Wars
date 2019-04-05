import Player from "./player";
import { calculateTheta, randomEdgePos, calculateVector} from './utils';
import { lineCircleCollision, lineLineCollision} from './collisions'; 
import Line from "./line";
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
        this.edges = [new Line({x: 0, y: 0}, {x: canvas.width, y: 0}),
                      new Line({x: 0, y: 0}, {x: 0, y: canvas.width}),
                      new Line({x: canvas.width, y: 0}, {x: canvas.width, y: canvas.height}),
                      new Line({x: 0, y: canvas.height}, {x: canvas.width, y: canvas.height})
                     ];
        this.player = new Player({x: canvas.width / 2, y: canvas.height / 2}, 0, 0);
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
        });
        this.clickListener = document.addEventListener("mousedown", e => {
            const chargeTime = 500;
            let i = 0;
            this.chargeInterval = setInterval(() => {
                this.player.chargeLaser(i/chargeTime);   
                i += 10;
            }, 10);
        });
        this.spawnInterval = setInterval(() => {
            const startPos = randomEdgePos(...this.dims);
            this.entities.push(new Enemy(this.eid, startPos, 2, calculateTheta(startPos, this.player.pos)));
        }, 1000);
        document.addEventListener("keydown", e => {
            if(e.key === "w") this.w = true;
        });
        document.addEventListener("keyup", e => {
            if(e.key === "w") this.w = false;
        });
        this.mouseUpListener = document.addEventListener("mouseup", e => {
            if(this.chargeInterval){
                clearInterval(this.chargeInterval);
            }
            if(this.player.charged()){
                const theta = calculateTheta(this.player.pos, this.cursor.pos);
                const offsetVec = calculateVector(theta, -30);
                this.laser = new Laser({x: this.player.pos.x + offsetVec.x, y: this.player.pos.y + offsetVec.y}, theta);
            }
            this.player.discharge();    
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
            if(this.laser){
                let pos = this.laser.pos;
                this.laser.vecs.forEach(vector => {
                    if(lineCircleCollision(vector, enemy.pos, enemy.radius)){
                        delete this.entities[this.entities.indexOf(enemy)];
                        this.score += 100;
                    }
                    pos = vector;
                });
            }
            if(this.player.is_collided(enemy)) this.gameOver();
        });
        if(this.laser){
            for(let i = 0; i < this.edges.length; i++){
                const laser = this.laser.vecs[this.laser.vecs.length - 1];
                // const u = this.player.laserCollision(laser);
                // if(typeof u === "number"){
                //     this.laser.grow(u);
                //     this.laser.draw(this.ctx);
                //     this.laser = null;
                //     break;
                // }
                const edge = this.edges[i];
                const t = lineLineCollision(laser, edge);
                if(typeof t === "number") {
                    this.laser.grow(t);
                    const newMag = laser.len() - (laser.len() * t);
                    this.laser.reflect(-newMag, laser, edge);
                }
              
            }
            
        }
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
            this.laser.grow(2);
            this.laser.fade();
            if(this.laser.is_finished()) this.laser = null;
        }
        this.entities.forEach(entity => {
            if(entity === this.player)
                entity.rotate(calculateTheta(this.player.pos, this.cursor.pos));
            else
                entity.rotate(calculateTheta(this.player.pos, entity.pos));
            entity.move();
        });
        this.player.calculateLines();
        if(this.w) 
            this.player.accelerate(-4);
        else
            this.player.decelerate();
        this.check_collisions();
        this.score++;
        this.render();
    }
}

export default Game;