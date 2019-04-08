import Player from "./player";
import { calculateTheta, aggregateEdges } from './utils';
import { lineCircleCollision, bestLaserCollision } from './collisions'; 
import Line from "./line";
import Cursor from "./cursor";
import runGameIntervals from './intervals'; 
import startInputListeners from './inputs';
import Obstacle from "./obstacle";
import { explode } from "./particles/explosions";


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
        this.enemySpeed = 1;
        this.entities = [this.player];
        this.obstacles = [new Obstacle({x: this.canvas.width / 4, y: this.canvas.height / 4}),
                          new Obstacle({x: 3 * this.canvas.width / 4, y: this.canvas.height / 4}),
                          new Obstacle({x: this.canvas.width / 4, y: 3 * this.canvas.height / 4}),
                          new Obstacle({x: 3* this.canvas.width / 4, y: 3 * this.canvas.height / 4})];
        this.particles = [];
    }

    start(){
        this.intervals = runGameIntervals.bind(this)();
        startInputListeners.bind(this)();
    }

    gameOver(){
        this.intervals.forEach(interval => clearInterval(interval));
        this.canvas.className = "inactive";
        this.finishOverlay.className = "overlay game-over";
        const scoreSpan = document.getElementById('score');
        scoreSpan.innerHTML = "";
        const score = document.createTextNode(`Your Score was: ${this.score}`); 
        scoreSpan.appendChild(score);
    }

    check_collisions(){
        const edges = aggregateEdges(this.player, ...this.obstacles);
        let t, edge;
        if(this.laser && this.laser.is_collidable()){
            let laser = this.laser.vecs[this.laser.vecs.length - 1];
            [t, edge] = bestLaserCollision(laser, ...this.edges, ...edges);
        }
        if(edge){
            const laser = this.laser.grow(t);
            this.particles = this.particles.concat(explode(laser.q, calculateTheta(laser.p, laser.q)));
            this.laser.reflect(laser, edge);
        } 
        this.entities.slice(1).forEach(enemy => {
            if(this.laser){
                let pos = this.laser.pos;
                this.laser.vecs.forEach((vector, i) => {
                    if(lineCircleCollision(vector, enemy.pos, enemy.radius)){
                        this.particles = this.particles.concat(explode(enemy.pos));
                        delete this.entities[this.entities.indexOf(enemy)];
                        this.score += 100 * i + 1;
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
        this.obstacles.forEach(obstacle => obstacle.draw(this.ctx));
        this.particles.forEach(particle => particle.draw(this.ctx));
    }

    tick(){
        if(this.laser){
            this.laser.grow(3);
            this.laser.fade();  
            if(this.laser.is_finished()) this.laser = null;
        }
        this.entities.forEach(entity => {
            if(entity === this.player)
                entity.rotate(calculateTheta(this.player.pos, this.cursor.pos));
            else
                entity.rotate(calculateTheta(this.player.pos, entity.pos));
            const edges = aggregateEdges(...this.obstacles);
            const edge = entity.move(edges);
            if(edge && entity !== this.player){
                entity.reroute(edge, this.player.pos);
            }
        });
        this.particles.forEach(particle => {
            particle.move();
            particle.lifecycle();
            if(particle.finished()) delete this.particles[this.particles.indexOf(particle)];
        });
        this.player.calculateLines();
        if(this.w) 
            this.player.accelerate(-3);
        else
            this.player.decelerate();
        this.check_collisions();
        this.score++;
        this.render();
    }
}

export default Game;