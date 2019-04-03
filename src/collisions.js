
export const dotProduct = (vec1, vec2) => { 
  if(vec1.length != vec2.length){
      return null;
  } else {
      let sum = 0;
      for(let i = 0; i < vec1.length; i++){
          sum += vec1[i] * vec2[i];
      }
      return sum;
  }
};

export const crossProduct = (vec1, vec2) => {
  return vec1[0] * vec2[1] - vec1[1] * vec2[0];
};


export const lineDiff = (line) => {
  return [line[1][0] - line[0][0], line[1][1] - line[0][1]];
}

export const samePoint = (p1, p2) => {
  for(let i = 0; i < p1.length; i++){
    if(p1[i] !== p2[i]) return false;
  }
  return true;
};

//https://stackoverflow.com/questions/1073336/circle-line-segment-collision-detection-algorithm
export const lineCircleCollision = (line, center, radius) => { //line is of the form [[x1, y1], [x2, y2]]
  const lineVec = lineDiff(line);
  const posDiff = [line[0][0] - center[0], line[0][1] - center[1]];
  const a = dotProduct(lineVec, lineVec);
  const b = 2 * dotProduct(posDiff, lineVec);
  const c = dotProduct(posDiff, posDiff) - radius * radius;
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
  const p = line1[0];
  const p2 = line1[1];
  const q = line2[0];
  const q2 = line2[1];
  const r = lineDiff(line1);
  const s = lineDiff(line2);
  const num = crossProduct(lineDiff([p, q]), r);
  const denom = crossProduct(r, s);
  if(num === 0 && denom === 0){
    if(samePoint(p, q) || samePoint(p, q2) || samePoint(p2, q) || samePoint(p2, q2)){ //lines literally start or end at same point
      return true;
    } else {
      return ((q[0] - p[0] < 0 && q[0] - p2[0] < 0 && q2[0] - p[0] < 0 && q2[0] - p2[0] < 0) || 
             (q[1] - p[1] < 0 && q[1] - p2[1] < 0 && q2[1] - p[1] < 0 && q2[1] - p2[1] < 0)); //Do lines overlap?
    }
  } else if(denom === 0){ //parallel
    return false;
  } else {
    const u = num / denom;
    const t = crossProduct(lineDiff([p, q]), s) / denom;
    if((t >= 0) && (t <= 1) && (u >= 0) && (u <= 1)){
      return t;
    } else {
      return false;
    }
  }
};
