import { STARTING_ENEMY_SPEED } from "./constants";
import Enemy from "./enemy";
import Player from "./player";
import { randomEdgePos, calculateTheta } from "./utils";

type RunIntervalsProps = {
  tick: () => void;
  entities: Array<Player | Enemy>;
  player: Player;
  dims: { width: number; height: number };
  updateScore: () => void;
};

function runIntervals({
  tick,
  dims,
  entities,
  player,
  updateScore,
}: RunIntervalsProps): NodeJS.Timeout[] {
  let eid = 1;
  let enemySpeed = STARTING_ENEMY_SPEED;
  const intervals: NodeJS.Timeout[] = [];
  intervals.push(setInterval(tick, 20));
  intervals.push(
    setInterval(() => {
      const startPos = randomEdgePos(dims);
      entities.push(
        new Enemy(
          eid,
          startPos,
          enemySpeed,
          calculateTheta(startPos, player.pos),
        ),
      );
      eid += 1;
    }, 1000),
  );
  intervals.push(setInterval(() => (enemySpeed += 0.2), 4000));
  intervals.push(setInterval(() => updateScore, 100));
  return intervals;
}

export default runIntervals;
