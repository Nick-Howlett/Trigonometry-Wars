export default class Vector {
  constructor(p, q){
    this.x = q.x - p.x;
    this.y = q.y - p.y;
    this.coords = [this.x, this.y];
  }


  dot(vec){ 
    return (this.x * vec.x) + (this.y * vec.y);
  }


  cross(vec){
    return this.x * vec.y - this.y * vec.x;
  } 

  magnitude(){
    return Math.sqrt(this.x**2 + this.y**2);
  }
  
}

