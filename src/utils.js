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
