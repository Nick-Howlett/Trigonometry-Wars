import { calculateVector } from './utils';

class MovingObject { 
  constructor(pos, vel, direc){
    this.pos = pos;
    this.vel = vel;
    this.direc = direc;
  }

  accelerate(accel){
      this.vel = accel;
  }

  decelerate(){
      this.vel = 0;
  }

  rotate(rot){  
    this.direc = rot;
  }

  move(edges){
    const vec = calculateVector(this.direc, this.vel);
    this.pos.x += vec.x;
    this.pos.y += vec.y;
    for(let i = 0; i < edges.length; i++){
      if(this.is_collided(edges[i])){
        this.pos.x -= vec.x;
        this.pos.y -= vec.y;
        return edges[i];
      }
    }
  }
} 

export default MovingObject;