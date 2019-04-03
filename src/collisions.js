import Vector from './vector';

export const samePoint = (p1, p2) => {
  return (p1.x === p2.x) && (p1.y === p2.y);
};

//https://stackoverflow.com/questions/1073336/circle-line-segment-collision-detection-algorithm
export const lineCircleCollision = (line, center, radius) => { 
  console.log(line);
  const lineVec = line.vectorize();
  console.log(lineVec);
  const startToCenter = new Vector(center, line.p);
  const a = lineVec.dot(lineVec);
  const b = 2 * startToCenter.dot(lineVec);
  const c = startToCenter.dot(startToCenter) - radius * radius;
  console.log([a, b, c]);
  let discrim = (b * b) - (4 * a * c);
  if(discrim > 0){
    discrim = Math.sqrt(discrim);
    let t1 = (-b - discrim) / (2 * a);
    let t2 = (-b + discrim) / (2 * a);
    if(t1 >= 0 && t1 <= 1){
      return true;
    } else if(t2 >= 0 && t2 <= 1) {
      return true;
    } else{
      return false;
    }
  } 
  return false;
};




//https://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
export const lineLineCollision = (line1, line2) => {
  const r = line1.vectorize();
  const s = line2.vectorize();
  const startVec = new Vector(line1.p, line2.p);
  const num = startVec.cross(r);
  const denom = r.cross(s);
  if(num === 0 && denom === 0){
    if(samePoint(line1.p, line2.p) || samePoint(line1.p, line2.q) || samePoint(line1.q, line2.p) || samePoint(line1.q, line2.q)){ //lines literally start or end at same point
      return true;
    } else {
      return ((line1.p.x - line2.p.x < 0 && line1.p.x - line2.q.x < 0 && line1.q.x - line2.p.x < 0 && line1.q.x - line2.q.x < 0) || 
             (line1.p.y - line2.p.y < 0 && line1.p.y - line2.q.y < 0 && line1.q.y - line2.p.y < 0 && line1.q.y - line2.q.y < 0)); //Do lines overlap?
    }
  } else if(denom === 0){ //parallel
    return false;
  } else {
    const u = num / denom;
    const t = startVec.cross(s) / denom;
    if((t >= 0) && (t <= 1) && (u >= 0) && (u <= 1)){
      return t;
    } else {
      return false;
    }
  }
};
