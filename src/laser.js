class Laser {
    constructor(pos, direc){
        this.len = 0;
        this.vel = 100;
        this.direc = direc;
        this.duration = 10;
        this.pos = {x: pos.x + Math.cos(this.direc) * 22, y: pos.y + Math.sin(this.direc) * 22};
    }

    draw(ctx){
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        const diffY = Math.sin(this.direc) * this.len;
        const diffX = Math.cos(this.direc) * this.len;
        ctx.lineTo(this.pos.x + diffX, this.pos.y + diffY);
        ctx.stroke();
    }
}

export default Laser;