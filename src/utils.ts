import Enemy from "./enemy";
import Line from "./line";
import Player from "./player";
import Point from "./point";
import Vector from "./vector";

export const calculateTheta = (pos1: Point, pos2: Point): number => {
  const diffX = pos1.x - pos2.x;
  const diffY = pos1.y - pos2.y;
  return Math.atan2(diffY, diffX);
};

export const calculateDistance = (pos1: Point, pos2: Point): number => {
  return Math.sqrt((pos2.x - pos1.x) ** 2 + (pos2.y - pos1.y) ** 2);
};

export const calculateVector = (theta: number, vel: number): Vector => {
  return new Vector(
    { x: 0, y: 0 },
    { x: Math.cos(theta) * vel, y: Math.sin(theta) * vel },
  );
};

export const rotatePoint = (point: Point, rot: number): Point => {
  const x = point.x * Math.cos(rot) - point.y * Math.sin(rot);
  const y = point.y * Math.cos(rot) + point.x * Math.sin(rot);
  return new Point(x, y);
};

export const randomEdgePos = ({
  width,
  height,
}: {
  width: number;
  height: number;
}): Point => {
  const edges = ["top", "bottom", "left", "right"] as const;
  const edge = edges[randInt(4)];
  switch (edge) {
    case "top":
      return { x: randInt(width), y: 0 };
    case "bottom":
      return { x: randInt(width), y: height };
    case "left":
      return { x: 0, y: randInt(height) };
    case "right":
      return { x: width, y: randInt(height) };
  }
};

type LinedEntity<T> = T extends { lines: Line[] } ? T : never;

export const aggregateEdges = <T>(...edgeCollections: LinedEntity<T>[]) => {
  let ret: Line[] = [];
  edgeCollections.forEach((collection) => (ret = ret.concat(collection.lines)));
  return ret;
};



export const randInt = (max: number): number => {
  return Math.floor(Math.random() * max);
};
