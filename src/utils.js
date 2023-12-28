import Vector from "./vector";

export const calculateTheta = (pos1, pos2) => {
  const diffX = pos1.x - pos2.x;
  const diffY = pos1.y - pos2.y;
  return Math.atan2(diffY, diffX);
};

export const calculateDistance = (pos1, pos2) => {
  return Math.sqrt((pos2.x - pos1.x) ** 2 + (pos2.y - pos1.y) ** 2);
};

export const calculateVector = (theta, vel) => {
  return new Vector(
    { x: 0, y: 0 },
    { x: Math.cos(theta) * vel, y: Math.sin(theta) * vel },
  );
};

export const rotatePoint = (point, rot) => {
  const ret = {};
  ret.x = point.x * Math.cos(rot) - point.y * Math.sin(rot);
  ret.y = point.y * Math.cos(rot) + point.x * Math.sin(rot);
  return ret;
};

export const randomEdgePos = (width, height) => {
  const edges = ["top", "bottom", "left", "right"];
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

export const randomTheta = () => {
  return Math.floor(Math.random * Math.PI * 2);
};

export const aggregateEdges = (...edgeCollections) => {
  let ret = [];
  edgeCollections.forEach((collection) => (ret = ret.concat(collection.lines)));
  return ret;
};

export const randInt = (max) => {
  return Math.floor(Math.random() * max);
};
