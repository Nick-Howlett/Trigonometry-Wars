import {randomEdgePos, calculateTheta, relPosition} from './utils';
import MovingObject from "./moving-object";

class Enemy extends MovingObject{
  constructor(id, dims, vel){
    const pos = relPosition([dims[0] / 2, dims[1] / 2], randomEdgePos(dims[0], dims[1]));
    super(pos, vel, calculateTheta(pos));
    this.id = id;
    this.radius = 10;
  }

  

  draw(ctx, mid){
    ctx.save(); 
    ctx.translate(mid[0], mid[1]);
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.restore();
  }
}

export default Enemy;