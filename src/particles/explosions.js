import Spark from "./spark";

export function explode(pos, theta){
    const ret = [];
    if(theta){ //we only want half the explosion, this is a collision with a wall;

        for(let i = 0; i < 5; i ++){
            ret.push(new Spark(pos, theta - Math.PI / 2 + Math.random() * Math.PI, 10));
        }
    } else{
        for(let i = 0; i < 30; i++){
            ret.push(new Spark(pos, Math.random() * Math.PI * 2));
        }
    }
    return ret;
}