export const calculateTheta = ({x, y}) => {
    return Math.atan2(y, x);
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