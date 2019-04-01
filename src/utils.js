export const calculateTheta = (pos1, pos2) => {
    const diffX = pos1[0] - pos2[0];
    const diffY = pos1[1] - pos2[1];
    return Math.atan2(diffY, diffX);
};


export const randomEdgePos = (width, height) => {
    const edges = ['top', 'bottom', 'left', 'right'];
    const edge = edges[randInt(4)];
    switch(edge){
        case 'top': 
            return [randInt(width), 0];
        case 'bottom':
            return [randInt(width), height];
        case 'left':
            return [0, randInt(height)];
        case 'right':
            return [width, randInt(height)];
    }
};

export const relPosition = (mid, pos) => { // make coordinates relative to midpoint
    return [pos[0] - mid[0], pos[1] - mid[1]];
};

export const randInt = max => {
    return Math.floor(Math.random() * max);
};

export const calculateVector = (theta, vel) => {
   return [Math.cos(theta) * vel, Math.sin(theta) * vel];
};

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

//https://stackoverflow.com/questions/1073336/circle-line-segment-collision-detection-algorithm
export const lineCircleCollision = (line, center, radius) => { //line is of the form [[x1, y1], [x2, y2]]
    const linePos = relPosition(line[0], line[0]);
    const lineVec = [linePos[0] - line[1][0], linePos[1] - line[1][1]];
    const posDiff = [linePos[0] - center[0], linePos[1] - center[1]];
    const a = dotProduct(lineVec, lineVec);
    const b = 2 * dotProduct(posDiff, lineVec);
    const c = dotProduct(posDiff, posDiff) - radius * radius;
    const discrim = (b * b) - (4 * a * c);
    return discrim > 0; 
};
