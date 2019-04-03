import {calculateVector} from './utils';
import Line from './line';

class Laser {
    constructor(pos, theta){
        this.pos = pos;
        this.duration = 6;
        this.theta = theta;
        const vec = calculateVector(theta, -200);
        this.vecs = [new Line(this.pos, {x: this.pos.x + vec.x, y: this.pos.y + vec.y})];     
    }

    is_finished(){
        return this.duration === 0;
    }

    update_duration(){
        this.duration--;
    }

    bounceX(){
        const current = this.vecs[this.vecs.length - 1];
        this.vecs.push([-current.x, current.y]);
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
        ctx.strokeStyle = "#11e023";
        this.vecs.forEach(vector => {
            ctx.moveTo(vector.p.x, vector.p.y);
            ctx.lineTo(vector.q.x, vector.q.y);
        });
        ctx.stroke();
        ctx.restore();
    }
}

export default Laser;