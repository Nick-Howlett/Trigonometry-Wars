import {calculateVector} from './utils';
class Laser {
    constructor(pos, theta){
        this.pos = pos;
        this.duration = 10;
        this.vec = calculateVector(theta, 100);
    }

    is_finished(){
        return this.duration === 0;
    }

    grow(){
        this.vec = this.vec.map(component => component * 2);
    }

    draw(ctx){
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(this.pos[0], this.pos[1]);
        ctx.lineWidth = 3;
        ctx.strokeStyle = "#11e023";
        ctx.lineTo(this.pos[0] + this.vec[0], this.pos[1] + this.vec[1]);
        ctx.stroke();
        ctx.restore();
    }
}

export default Laser;