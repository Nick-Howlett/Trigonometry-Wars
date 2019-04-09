import Enemy from './enemy';
import { randomEdgePos, calculateTheta } from './utils';

function runIntervals(){
  const intervals = [];
  intervals.push(setInterval(this.tick.bind(this), 20));
  intervals.push(setInterval(() => {
      const startPos = randomEdgePos(...this.dims);
      this.entities.push(new Enemy(this.eid, startPos, this.enemySpeed, calculateTheta(startPos, this.player.pos)));
  }, 1000));
  intervals.push(setInterval(() => this.enemySpeed += 0.2, 4000));
  intervals.push(setInterval(() => this.displayScore = this.score, 100));
  return intervals; 
};

export default runIntervals;