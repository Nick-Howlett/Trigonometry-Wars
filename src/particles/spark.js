export default class Spark{
    constructor(start, direction, timeToLive){
        this.pos = {x: start.x, y: start.y};
        this.direction = direction;
        this.length = Math.random() * 15;
        this.vel = Math.random() * 5 + 3;
        this.age = 0;
        this.timeToLive = timeToLive || 20; 
        this.opacity = 1;
    }

    finished(){
        return this.age > this.timeToLive;
    }

    move(){
        this.pos.x += Math.cos(this.direction) * this.vel;
        this.pos.y += Math.sin(this.direction) * this.vel;
    }

    lifecycle(){
        this.age++;
        this.vel -= 0.1;
        this.opacity = (this.timeToLive - this.age) / this.timeToLive;
    }

    draw(ctx){
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.strokeStyle = "#1aff1a";
        ctx.shadowColor = "#1aff1a";
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.moveTo(this.pos.x, this.pos.y);
        ctx.lineTo(this.pos.x + Math.cos(this.direction) * this.length, this.pos.y + Math.sin(this.direction) * this.length);
        ctx.stroke();
        ctx.restore();
    }
}