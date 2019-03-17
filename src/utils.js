export const calculateTheta = (pos) => {
    return Math.atan2(pos[1], pos[0]);
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

export const randInt = max => {
    return Math.floor(Math.random() * max);
};

export const calculateVector = (pos, theta, vel) => {
   return [pos[0] + Math.cos(theta) * vel, pos[1] + Math.sin(theta) * vel];
};

