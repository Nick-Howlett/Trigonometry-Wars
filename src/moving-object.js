class MovingObject { 
  constructor(pos, vel, direc){
    this.pos = pos;
    this.vel = vel;
    this.direc = direc;
  }

  move(){
    for(let i = 0; i < this.pos.length; i++){
      this.pos[i] += this.vel[i];
    }
  }
}