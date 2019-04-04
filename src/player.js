import MovingObject from './moving-object';
import Vector from './vector';
import Line from './line';
import { rotatePoint } from './utils';
import {lineLineCollision, lineCircleCollision} from './collisions';


class Player extends MovingObject{
    constructor(pos, vel, direc){
        super(pos, vel, direc);
        this.radius = 10;
        this.points = [{x: -10, y: 4}, {x: 0, y: -22}, {x: 10, y: 4}];
        this.calculateLines();
    }

    is_collided(enemy){
        for(let i = 0; i < this.lines.length; i ++){
            if(lineCircleCollision(this.lines[i], enemy.pos, enemy.radius)) return true;
        }
        return false;
    }

    laserCollision(laser){
        for(let i = 0; i < this.lines.length; i ++){
            const t = lineLineCollision(laser, this.lines[i]);
            if(typeof t === "number") return t;
        }
        return false;
    }


    calculateLines(){
        const x = this.pos.x;   
        const y = this.pos.y;
        const points = this.points.map(point => rotatePoint(point, this.direc - Math.PI / 2));
        this.lines = [new Line({x, y}, {x: x + points[0].x, y: y + points[0].y}),
                      new Line({x: x + points[0].x, y: y + points[0].y}, {x: x + points[1].x, y: y + points[1].y}),
                      new Line({x: x + points[1].x, y: y + points[1].y}, {x: x + points[2].x, y: y + points[2].y}),
                      new Line({x: x + points[2].x, y: y + points[2].y}, {x, y})];
    }

    draw(ctx){
        ctx.fillstyle = "#dee4ed";
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        this.lines.forEach(line => {
            ctx.lineTo(line.q.x, line.q.y);
        });
        ctx.fill();
        ctx.restore();
    }
}

export default Player;