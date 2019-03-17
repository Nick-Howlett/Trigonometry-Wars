class Player {
    constructor(pos){
        this.pos = pos;
    }
    draw(ctx, rot){
        ctx.fillstyle = "#dee4ed";
        ctx.save();
        ctx.translate(this.pos[0], this.pos[1]); 
        ctx.rotate(rot);
        ctx.beginPath();
        ctx.lineTo(-10, 4);
        ctx.lineTo(0, -22);
        ctx.lineTo(10, 4);
        ctx.lineTo(0, 0);
        ctx.fill();
        ctx.restore();
    }
}

export default Player;