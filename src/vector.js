import Line from "./line";

export default class Vector {
  constructor(p, q) {
    this.x = q.x - p.x;
    this.y = q.y - p.y;
    this.coords = [this.x, this.y];
  }

  createLine(point) {
    return new Line(
      { x: point.x, y: point.y },
      { x: point.x + this.x, y: point.y + this.y },
    );
  }

  dot(vec) {
    return this.x * vec.x + this.y * vec.y;
  }

  scale(scalar) {
    this.x *= scalar;
    this.y *= scalar;
    return this;
  }

  normalize() {
    const mag = this.magnitude();
    this.x /= mag;
    this.y /= mag;
    return this;
  }

  subtract(vec) {
    this.x -= vec.x;
    this.y -= vec.y;
    return this;
  }

  add(vec) {
    this.x += vec.x;
    this.y += vec.y;
    return this;
  }

  cross(vec) {
    return this.x * vec.y - this.y * vec.x;
  }

  magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}
