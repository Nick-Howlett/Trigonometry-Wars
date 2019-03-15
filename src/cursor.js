class Cursor {
    constructor(){
        this.x = 0;
        this.y = 0;
    }

    draw(ctx, mid){
        ctx.save();
        ctx.translate(mid.x + this.x, mid.y + this.y);
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
