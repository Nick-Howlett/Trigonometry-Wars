import MovingObject from "./moving-object";
import Line from "./line";
import Vector from "./vector";
import { rotatePoint } from "./utils";
import { lineLineCollision, lineCircleCollision } from "./collisions";
import Point from "./point";
import Enemy from "./enemy";

class Player extends MovingObject {
  radius: number;
  points: [Point, Point, Point];
  charge: number;
  lines: Line[];
  chargeLines: Line[];

  constructor(pos: Point, vel: number, direc: number) {
    super(pos, vel, direc);
    this.radius = 10;
    this.points = [
      { x: -10, y: 4 },
      { x: 0, y: -22 },
      { x: 10, y: 4 },
    ];
    this.charge = 0;
    this.lines = [];
    this.chargeLines = [];
    this.calculateLines();
  }

  // reassess type after creating some base classes and use type guard
  isCollided(collider: any): boolean {
    if (collider.pos) {
      for (let i = 0; i < this.lines.length; i++) {
        if (lineCircleCollision(this.lines[i], collider.pos, collider.radius))
          return true;
      }
    } else {
      for (let i = 0; i < this.lines.length; i++) {
        if (lineLineCollision(collider, this.lines[i])) return true;
      }
    }
    return false;
  }

  chargeLaser(percent: number): void {
    if (percent > 1) percent = 1;
    this.charge = percent;
  }

  charged(): boolean {
    return this.charge === 1;
  }

  discharge(): void {
    this.charge = 0;
  }

  calculateLines(): void {
    const x = this.pos.x;
    const y = this.pos.y;
    const points = this.points.map((point) => {
      const newPoint = rotatePoint(point, this.direc - Math.PI / 2);
      newPoint.x += x;
      newPoint.y += y;
      return newPoint;
    });
    points.unshift({ x, y });
    points.push({ x, y });
    this.lines = [];
    for (let i = 0; i < points.length - 1; i++) {
      this.lines.push(new Line(points[i], points[i + 1]));
    }
    const charge1 = new Vector(points[1], points[2]);
    const charge2 = new Vector(points[3], points[2]);
    this.chargeLines = [
      charge1.scale(this.charge).createLine(points[1]),
      charge2.scale(this.charge).createLine(points[3]),
    ];
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save();
    ctx.fillStyle = "White";
    ctx.beginPath();
    ctx.moveTo(this.pos.x, this.pos.y);
    this.lines.forEach((line) => {
      ctx.lineTo(line.q.x, line.q.y);
    });
    ctx.fill();
    ctx.restore();
    ctx.save();
    ctx.strokeStyle = "#1aff1a";
    ctx.shadowColor = "#1aff1a";
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.shadowBlur = 4;
    ctx.lineWidth = 3;
    this.chargeLines.forEach((line) => {
      ctx.beginPath();
      ctx.moveTo(line.p.x, line.p.y);
      ctx.lineTo(line.q.x, line.q.y);
      ctx.stroke();
    });
    ctx.restore();
  }
}

export default Player;
