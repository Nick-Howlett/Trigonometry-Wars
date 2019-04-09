import Laser from "./laser";
import { calculateTheta, calculateVector } from './utils';

function startInputs(){
  //moving the cursor
  this.canvas.addEventListener("mousemove", e => { // from https://codepen.io/chrisjaime/pen/lcEpn
      const rect = this.canvas.getBoundingClientRect();
      this.cursor.updatePos(e.clientX - rect.left, e.clientY - rect.top);
  });

  this.clickListener = document.addEventListener("mousedown", e => {
    this.keys.Mouse = true;
  });  

  this.mouseUpListener = document.addEventListener("mouseup", e => {
    this.keys.Mouse = false;
  });

  document.addEventListener("keydown", e => {
    this.keys[e.code] = true;
  }); 
  document.addEventListener("keyup", e => {
    this.keys[e.code] = false;
  }); 
}



export default startInputs;