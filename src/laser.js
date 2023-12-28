import { calculateVector } from "./utils";
import Line from "./line";

class Laser {
  constructor(pos, theta) {
    this.pos = pos;
    this.duration = 20;
    this.theta = theta;
    this.reflections = 4;
    const vec = calculateVector(theta, -100);
    this.vecs = [
      new Line(this.pos, { x: this.pos.x + vec.x, y: this.pos.y + vec.y }),
    ];
  }

  is_finished() {
    return this.duration <= 0;
  }

  fade() {
    this.duration--;
  }

  reflect(laserLine, reflectLine) {
    if (this.reflections === 0) {
      this.duration = Math.min(this.duration, 12);
      return; //stop if we are out of reflections
    }
    const laserVec = laserLine.vectorize();
    const norm = reflectLine.normalVec().normalize();
    const reflectVec = laserVec.subtract(norm.scale(2 * laserVec.dot(norm)));
    const currentVec = this.vecs[this.vecs.length - 1];
    const newLine = reflectVec.createLine(currentVec.q);
    //translate the reflection point so it isn't directly on the reflected surface
    const offset = reflectVec.normalize();
    newLine.p.x += offset.x;
    newLine.p.y += offset.y;
    this.vecs.push(newLine);
    this.reflections--;
    return 1;
  }

  is_collidable() {
    return this.duration > this.duration - (this.duration - 5);
  }

  grow(factor) {
    const current = this.vecs[this.vecs.length - 1];
    const point = current.p;
    this.vecs[this.vecs.length - 1] = current
      .vectorize()
      .scale(factor)
      .createLine(point);
    return this.vecs[this.vecs.length - 1];
  }

  draw(ctx) {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "#1aff1a";
    ctx.shadowColor = "#1aff1a";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 5;
    if (this.duration <= 10) ctx.globalAlpha = 1 - (10 - this.duration) / 10;
    this.vecs.forEach((vector) => {
      ctx.moveTo(vector.p.x, vector.p.y);
      ctx.lineTo(vector.q.x, vector.q.y);
    });
    ctx.stroke();
    ctx.restore();
  }
}

export default Laser;
