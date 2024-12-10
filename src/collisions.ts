import Line from "./line";
import Point from "./point";
import Vector from "./vector";

export const bestLaserCollision = (
  laser: Line,
  ...lines: Line[]
): [number, Line | null] => {
  let min = 10;
  let min_edge = null;
  for (let i = 0; i < lines.length; i++) {
    const edge = lines[i];
    const t = lineLineCollision(laser, edge);
    if (typeof t === "number" && t < min) {
      min = t;
      min_edge = edge;
    }
  }
  return [min, min_edge];
};

export const samePoint = (p1: Point, p2: Point): boolean => {
  return p1.x === p2.x && p1.y === p2.y;
};

//https://stackoverflow.com/questions/1073336/circle-line-segment-collision-detection-algorithm
export const lineCircleCollision = (
  line: Line,
  center: Point,
  radius: number,
): boolean => {
  const lineVec = line.vectorize();
  const startToCenter = new Vector(center, line.p);
  const a = lineVec.dot(lineVec);
  const b = 2 * startToCenter.dot(lineVec);
  const c = startToCenter.dot(startToCenter) - radius * radius;
  let discrim = b * b - 4 * a * c;
  if (discrim > 0) {
    discrim = Math.sqrt(discrim);
    let t1 = (-b - discrim) / (2 * a);
    let t2 = (-b + discrim) / (2 * a);
    if (t1 >= 0 && t1 <= 1) {
      return true;
    } else if (t2 >= 0 && t2 <= 1) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};

//https://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
export const lineLineCollision = (
  line1: Line,
  line2: Line,
): number | boolean => {
  const r = new Vector(line1.q, line1.p);
  const s = new Vector(line2.q, line2.p);
  const startVec = new Vector(line2.p, line1.p);
  const num = startVec.cross(r);
  const denom = r.cross(s);
  if (num === 0 && denom === 0) {
    if (
      samePoint(line1.p, line2.p) ||
      samePoint(line1.p, line2.q) ||
      samePoint(line1.q, line2.p) ||
      samePoint(line1.q, line2.q)
    ) {
      //lines literally start or end at same point
      return 0.1;
    } else {
      if (
        (line1.p.x - line2.p.x < 0 &&
          line1.p.x - line2.q.x < 0 &&
          line1.q.x - line2.p.x < 0 &&
          line1.q.x - line2.q.x < 0) ||
        (line1.p.y - line2.p.y < 0 &&
          line1.p.y - line2.q.y < 0 &&
          line1.q.y - line2.p.y < 0 &&
          line1.q.y - line2.q.y < 0)
      ) {
        //Do lines overlap?
        return 0.1;
      }
    }
  } else if (denom === 0) {
    //parallel
    return false;
  } else {
    const u = num / denom;
    const t = startVec.cross(s) / denom;
    if (t >= 0 && t <= 1 && u >= 0 && u <= 1) {
      return t;
    } else {
      return false;
    }
  }

  return false;
};
