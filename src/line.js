import Vector from './vector';

export default class line {
  constructor(p, q){
    this.p = p;
    this.q = q;
  }

  len(){
    return Math.sqrt((this.p.x - this.q.x)**2 + (this.p.y - this.q.y)**2);
  }

  normalVec(){
    return new Vector({x: 0, y: 0}, {x: -(this.q.x - this.p.x), y: this.q.y - this.p.y});
  }

  vectorize(){
    return new Vector(this.p, this.q);
  }


}