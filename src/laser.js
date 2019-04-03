import {calculateVector} from './utils';

class Laser {
    constructor(pos, theta){
        this.pos = pos;
        this.duration = 6;
        this.theta = theta;
        const vector = calculateVector(theta, -200);
        this.vec = [[this.pos[0] + vector[0], this.pos[1] + vector[1]]];
    }

    is_finished(){
        return this.duration === 0;
    }

    update_duration(){
        this.duration--;
    }

    bounceX(){
        const current = this.vec[this.vec.length - 1];
        this.vec.push([-current[0], current[1]]);
    }

    bounceY(){
        const current = this.vec[this.vec.length - 1];
        this.vec.push([current[0], -current[1]]);
    }

    grow(factor){
        const prev = this.vec.length === 1 ? this.pos : this.vec[this.vec.length - 2];
        const current = this.vec[this.vec.length - 1];
        for(let i = 0; i < current.length; i++){
            current[i] = prev[i] + (current[i] - prev[i]) * factor;
        }
    }

    draw(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.pos[0], this.pos[1]);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#11e023";
        this.vec.forEach(vector => {
            ctx.lineTo(vector[0], vector[1]);
        });
        ctx.stroke();
        ctx.restore();
    }
}

export default Laser;