import { lineCircleCollision } from './utils';

class Player {
    constructor(pos){
        this.pos = pos;
        this.lines = [[-10, 4], [0, -22], [10, 4], [0, 0]];
    }

    is_collided(enemy){
        const maxDist = enemy.radius + 10; //max distance at which the two are not colliding, enemy's radius and cricle of radius 20 around player.
        const dist = Math.sqrt(enemy.pos[0] * enemy.pos[0] + enemy.pos[1] * enemy.pos[1]);
        if(dist < maxDist){
            return true;
        }
        // const lines = [[0, 0], ...this.lines];
        // for(let i = 0; i < lines.length - 1; i++){
        //     if(lineCircleCollision([lines[i], lines[i + 1]], enemy.pos, enemy.radius)){
        //         return true;
        //     }
        // }
        return false;
    }
    draw(ctx, rot){
        ctx.fillstyle = "#dee4ed";
        ctx.save();
        ctx.translate(this.pos[0], this.pos[1]); 
        ctx.rotate(rot);
        ctx.beginPath();
        this.lines.forEach(pos => {
            ctx.lineTo(pos[0], pos[1]);
        });
        ctx.fill();
        ctx.restore();
    }
}

export default Player;