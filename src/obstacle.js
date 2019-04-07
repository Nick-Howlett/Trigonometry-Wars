import Line from './line';



export default class Obstacle{
    constructor(pos){
        this.pos = pos;
        this.points = this.createPoints();
        this.lines = this.createLines();
    }


    createPoints(){
        const x = this.pos.x;
        const y = this.pos.y;
        return [{x, y: y - 25}, {x: x - 25, y}, {x, y: y + 25}, {x: x + 25, y}];
    }

    createLines(){
        const lines = [];
        for(let i = 0; i < this.points.length - 1; i++){
            lines.push(new Line(this.points[i], this.points[i + 1]));
        }
        lines.push(new Line(this.points[this.points.length - 1], this.points[0]));
        return lines;
    }

    draw(ctx){
        ctx.save();
        ctx.fillStyle = "#D0D0D0";
        ctx.beginPath();
        ctx.moveTo(this.lines[0].p.x, this.lines[0].p.y);
        this.lines.forEach(line => {
            ctx.lineTo(line.q.x, line.q.y);
        });
        ctx.fill();
        ctx.restore();
    }
}