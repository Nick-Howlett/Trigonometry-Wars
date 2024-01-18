import Line from "./line";
import Point from "./point";
import { calculateVector } from "./utils";

class MovingObject {
  pos: Point;
  vel: number;
  direc: number;

  constructor(pos: Point, vel: number, direc: number) {
    this.pos = pos;
    this.vel = vel;
    this.direc = direc;
  }

  accelerate(accel: number) {
    this.vel = accel;
  }

  decelerate() {
    this.vel = 0;
  }

  rotate(rot: number) {
    this.direc = rot;
  }

  isCollided(line: Line): boolean {
    // implemented in parent
    return false;
  }

  move(edges: Line[]) {
    const vec = calculateVector(this.direc, this.vel);
    this.pos.x += vec.x;
    this.pos.y += vec.y;
    const ret = [];
    for (let i = 0; i < edges.length; i++) {
      if (this.isCollided(edges[i])) {
        this.pos.x -= vec.x;
        this.pos.y -= vec.y;
        ret.push(edges[i]);
      }
    }
    return ret;
  }
}

export default MovingObject;
