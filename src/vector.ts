import Line from "./line";
import Point from "./point";

export default class Vector {
  x: number;
  y: number;
  coords: [number, number];

  constructor(p: Point, q: Point) {
    this.x = q.x - p.x;
    this.y = q.y - p.y;
    this.coords = [this.x, this.y];
  }

  createLine(point: Point): Line {
    return new Line(
      { x: point.x, y: point.y },
      { x: point.x + this.x, y: point.y + this.y },
    );
  }

  dot(vec: Vector): number {
    return this.x * vec.x + this.y * vec.y;
  }

  scale(scalar: number): Vector {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  normalize(): Vector {
    const mag = this.magnitude();
    this.x /= mag;
    this.y /= mag;
    return this;
  }

  subtract(vec: Vector): Vector {
    this.x -= vec.x;
    this.y -= vec.y;
    return this;
  }

  add(vec: Vector): Vector {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  }

  cross(vec: Vector): number {
    return this.x * vec.y - this.y * vec.x;
  }

  magnitude(): number {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}
