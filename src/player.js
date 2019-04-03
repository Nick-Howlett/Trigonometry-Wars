import MovingObject from './moving-object';
import Vector from './vector';
import Line from './line';
import {lineLineCollision} from './collisions';


class Player extends MovingObject{
    constructor(pos, vel, direc){
        super(pos, vel, direc);
        this.drawLines = [[-10, 4], [0, -22], [10, 4], [0, 0]]  ;
        this.radius = 10;
    }

    is_collided(enemy){
        const maxDist = enemy.radius + 10; //max distance at which the two are not colliding, enemy's radius and cricle of radius 20 around player.
        const distVec = new Vector(this.pos, enemy.pos);
        if(distVec.magnitude() < maxDist){
            return true;
        }
        return false;
    }


    draw(ctx){
        ctx.fillstyle = "#dee4ed";
        ctx.save();
        ctx.translate(this.pos.x, this.pos.y);
        ctx.rotate(this.direc - Math.PI / 2);
        ctx.beginPath();
        this.drawLines.forEach(line => {
            ctx.lineTo(line[0], line[1]);
        });
        ctx.fill();
        ctx.restore();
    }
}

export default Player;