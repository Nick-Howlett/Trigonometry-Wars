import Point from "./point";

class Cursor {
  pos: Point;
  size: number;

  constructor() {
    this.pos = { x: 0, y: 0 };
    this.size = 10;
  }

  updatePos(x: number, y: number): void {
    this.pos = { x, y };
  }

  draw(ctx: CanvasRenderingContext2D): void {
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
