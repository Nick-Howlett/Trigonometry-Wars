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

  move(){
    const vec = calculateVector(this.direc, this.vel);
    for(let i = 0; i < this.pos.length; i++){
      this.pos[i] += vec[i];
    }
  }
} 

export default MovingObject;