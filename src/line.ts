import type Point from "./point";
import Vector from "./vector";

export default class Line {
  p: Point;
  q: Point;

  constructor(p: Point, q: Point) {
    this.p = p;
    this.q = q;
  }

  len(): number {
    return Math.sqrt((this.p.x - this.q.x) ** 2 + (this.p.y - this.q.y) ** 2);
  }

  normalVec(): Vector {
    return new Vector(
      { x: 0, y: 0 },
      { x: -(this.q.y - this.p.y), y: this.q.x - this.p.x },
    );
  }

  vectorize(): Vector {
    return new Vector(this.p, this.q);
  }
}
