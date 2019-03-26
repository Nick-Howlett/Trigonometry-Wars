import {randomEdgePos, calculateVector, calculateTheta, relPosition} from './utils';

class Enemy {
  constructor(id, dims){
    this.id = id;
    this.radius = 10;
    this.pos = relPosition([dims[0] / 2, dims[1] / 2], randomEdgePos(dims[0], dims[1]));
    const theta = calculateTheta(this.pos);
    this.vec = calculateVector(theta, -2);
  }

  move(){
    this.pos[0] += this.vec[0];
    this.pos[1] += this.vec[1];
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