class Cursor {
    constructor(){
        this.pos = {x: 0, y: 0};
        this.size = 10;
    }

    updatePos(x, y){
        this.pos = {x, y};
    }

    draw(ctx){
        ctx.save();
        ctx.strokeStyle = "white";
        ctx.translate(this.pos.x, this.pos.y);
        ctx.beginPath();
        ctx.lineTo(0, -this.size);
        ctx.lineTo(0, 0);
        ctx.lineTo(0, this.size);
        ctx.lineTo(0, 0);
        ctx.lineTo(-this.size, 0);
        ctx.lineTo(0, 0);
        ctx.lineTo(this.size, 0);
        ctx.stroke();
        ctx.restore();
    }
}

export default Cursor;
