import MovingObject from "./moving-object";
import { calculateDistance, calculateVector } from "./utils";
import { lineCircleCollision } from "./collisions";
import Vector from "./vector";
import Point from "./point";
import Line from "./line";

const ENEMY_SPEED = 1;

class Enemy extends MovingObject {
  id: number;
  radius: number;

  constructor(id: number, pos: Point, vel: number, direc: number) {
    super(pos, vel, direc);
    this.id = id;
    this.radius = 10;
    setInterval(() => (this.vel += 0.5), 5000);
  }

  isCollided(collider: Line): boolean {
    if (lineCircleCollision(collider, this.pos, this.radius)) return true;
    return false;
  }

  reroute(collidedEdges: Line[], playerPos: Point): void {
    if (!collidedEdges.length) {
      return;
    }
    const firstEdge = collidedEdges[0];
    let vec1: Vector = firstEdge.vectorize().normalize();
    const newVec: Vector = new Vector(firstEdge.q, firstEdge.p);
    let vec2: Vector = newVec.normalize();

    collidedEdges.slice(1).forEach((edge) => {
      vec1 = edge.vectorize().normalize();
      const newVec = new Vector(edge.q, edge.p);
      vec2 = newVec.normalize();
    });

    const pos1 = { x: this.pos.x + vec1.x, y: this.pos.y + vec1.y };
    const pos2 = { x: this.pos.x + vec2.x, y: this.pos.y + vec2.y };

    if (calculateDistance(pos1, playerPos) > calculateDistance(pos2, playerPos))
      this.pos = pos2;
    else {
      this.pos = pos1;
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.fillStyle = "#11e023";
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export default Enemy;
