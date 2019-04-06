import Laser from "./laser";
import { calculateTheta, calculateVector } from './utils';

function startInputs(){
  //moving the cursor
  this.canvas.addEventListener("mousemove", e => { // from https://codepen.io/chrisjaime/pen/lcEpn
      const rect = this.canvas.getBoundingClientRect();
      this.cursor.updatePos(e.clientX - rect.left, e.clientY - rect.top);
  });

  //listeners for charging and firing laser
  this.clickListener = document.addEventListener("mousedown", e => {
    const chargeTime = 500;
    let i = 0;
    this.chargeInterval = setInterval(() => {
        this.player.chargeLaser(i/chargeTime);   
        i += 10;
    }, 10);
  });  

  this.mouseUpListener = document.addEventListener("mouseup", e => {
    if(this.chargeInterval){
        clearInterval(this.chargeInterval);
    }
    if(this.player.charged()){
        const theta = calculateTheta(this.player.pos, this.cursor.pos);
        const offsetVec = calculateVector(theta, -30);
        this.laser = new Laser({x: this.player.pos.x + offsetVec.x, y: this.player.pos.y + offsetVec.y}, theta);
    }
    this.player.discharge();    
});
  
  //forward movement toggle
  document.addEventListener("keydown", e => {
    if(e.key === "w") this.w = true;
  }); 
  document.addEventListener("keyup", e => {
      if(e.key === "w") this.w = false;
  }); 
};

export default startInputs;