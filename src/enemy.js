import MovingObject from "./moving-object";
import { calculateDistance, calculateVector } from './utils';
import { lineCircleCollision } from "./collisions";
import Vector from "./vector";

class Enemy extends MovingObject{
  constructor(id, pos, vel, direc){
    super(pos, vel, direc);
    this.id = id;
    this.radius = 10;
    setInterval(() => this.vel += 0.5, 5000);
  }

  is_collided(collider){
    if(lineCircleCollision(collider, this.pos, this.radius)) return true;
    return false;
  }

  reroute(collidedEdge, playerPos, ctx){
    const vec1 = collidedEdge.vectorize().normalize();
    const vec2 = new Vector(collidedEdge.q, collidedEdge.p).normalize();
    const pos1 = {x: this.pos.x + vec1.x, y: this.pos.y + vec1.y};
    const pos2 = {x: this.pos.x + vec2.x, y: this.pos.y + vec2.y};
    if(calculateDistance(pos1, playerPos) > calculateDistance(pos2, playerPos))
      this.pos = pos2;
    else{
      this.pos = pos1;
    }
  }

  draw(ctx){
    ctx.beginPath();
    ctx.fillStyle = "#11e023";
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export default Enemy;