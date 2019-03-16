import {randomEdgePos} from './utils';

class Enemy {
  constructor(id, gameWidth, gameHeight, vel){
    this.id = id;
    this.pos = randomEdgePos(gameWidth, gameHeight);
    this.vec = [0, 0];
  }

  move(){
    this.pos[0] += this.vec[0];
    this.pos[1] += this.vec[1];
  }


  draw(ctx){
    ctx.beginPath();
    ctx.arc(this.pos[0], this.pos[1], 10, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export default Enemy;