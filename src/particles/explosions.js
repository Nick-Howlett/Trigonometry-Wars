import Spark from "./spark";

export function explode(pos, normal){
    const ret = [];
    if(normal){
        
    } else{
        for(let i = 0; i < 40; i++){
            ret.push(new Spark(pos, Math.random() * Math.PI * 2));
        }
    }
    return ret;
}