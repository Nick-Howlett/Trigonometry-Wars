import Vector from './vector';

export default class line {
  constructor(p, q){
    this.p = p;
    this.q = q;
  }

  vectorize(){
    return new Vector(this.p, this.q);
  }


}