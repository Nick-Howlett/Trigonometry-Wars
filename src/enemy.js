import {randomEdgePos} from './utils';

class Enemy {
  constructor(id, vec){
    this.pos = randomEdgePos();
    this.vec = vec; 
  }

  move(){
    this.pos[0] += this.vec[0];
    this.pos[1] += this.vec[1];
  }


  draw(ctx){
    ctx.beginPath();
    ctx.arc(pos[0], pos[1], 10, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export default Enemy;