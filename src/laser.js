import {calculateVector} from './utils';
class Laser {
    constructor(pos, theta){
        this.pos = pos;
        this.duration = 10;
        this.theta = theta;
        this.vec = [calculateVector(theta, 100)];
    }

    is_finished(){
        return this.duration === 0;
    }

    bounceX(){
        const current = this.vec[this.vec.length - 1];
        this.vec.push([-current[0], current[1]]);
    }

    bounceY(){
        const current = this.vec[this.vec.length - 1];
        this.vec.push([current[0], -current[1]]);
    }

    grow(){
        this.vec[this.vec.length - 1] = this.vec[this.vec.length - 1].map(component => component * 2);
        this.duration--;
    }

    draw(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.pos[0], this.pos[1]);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#11e023";
        this.vec.forEach(vector => {
            ctx.lineTo(this.pos[0] + vector[0], this.pos[1] + vector[1]);
        });
        ctx.stroke();
        ctx.restore();
    }
}

export default Laser;