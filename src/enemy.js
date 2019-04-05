import MovingObject from "./moving-object";

class Enemy extends MovingObject{
  constructor(id, pos, vel, direc){
    super(pos, vel, direc);
    this.id = id;
    this.radius = 10;
  }

  

  draw(ctx){
    ctx.beginPath();
    ctx.fillStyle = "#11e023";
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export default Enemy;