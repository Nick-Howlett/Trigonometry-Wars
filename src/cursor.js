class Cursor {
    constructor(){
        this.pos = [0, 0];
    }

    updatePos(x, y){
        this.pos = [x, y];
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.pos[0], this.pos[1]);
        ctx.beginPath();
        ctx.lineTo(0, -5);
        ctx.lineTo(0, 0);
        ctx.lineTo(0, 5);
        ctx.lineTo(0, 0);
        ctx.lineTo(-5, 0);
        ctx.lineTo(0, 0);
        ctx.lineTo(5, 0);
        ctx.stroke();
        ctx.restore();
    }
}

export default Cursor;
