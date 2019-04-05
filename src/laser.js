import {calculateVector} from './utils';
import Line from './line';

class Laser {
    constructor(pos, theta){
        this.pos = pos;
        this.duration = 10;
        this.theta = theta;
        this.reflections = 4;
        const vec = calculateVector(theta, -100);
        this.vecs = [new Line(this.pos, {x: this.pos.x + vec.x, y: this.pos.y + vec.y})];     
    }   

    is_finished(){
        if(this.reflections === 0){
            if(this.duration === 0){
                return true;
            }
        }
        return false;
    }

    fade(){
        this.duration--;
        console.log(this.duration);
    }


    reflect(newMagnitude, laserLine, reflectLine){
        if(this.reflections === 0){
            this.duration = Math.min(this.duration, 6);
            return; //stop if we are out of reflections
        }
        const laserVec = laserLine.vectorize();
        const norm = reflectLine.normalVec().normalize();
        const reflectVec = laserVec.subtract(norm.scale(2 * (laserVec.dot(norm)))).scale(newMagnitude);
        const currentVec = this.vecs[this.vecs.length - 1];
        this.vecs.push(reflectVec.createLine(currentVec.q));
        this.reflections--;
    }

    grow(factor){
        const current = this.vecs[this.vecs.length - 1];
        current.q.x = current.p.x + (current.q.x - current.p.x) * factor;
        current.q.y = current.p.y + (current.q.y - current.p.y) * factor;
    }

    draw(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#1aff1a";
        this.vecs.forEach(vector => {
            ctx.moveTo(vector.p.x, vector.p.y);
            ctx.lineTo(vector.q.x, vector.q.y);
        });
        ctx.stroke();
        ctx.restore();
    }
}

export default Laser;