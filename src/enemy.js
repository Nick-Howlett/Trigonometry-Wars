import MovingObject from "./moving-object";

class Enemy extends MovingObject{
  constructor(id, pos, vel, direc){
    super(pos, vel, direc);
    this.id = id;
    this.radius = 10;
  }

  

  draw(ctx){
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export default Enemy;