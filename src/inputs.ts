import Cursor from "./cursor";

type StartInputsProps = {
  canvas: HTMLCanvasElement;
  cursor: Cursor;
  keys: { [key: string]: boolean };
};

function startInputs({ canvas, cursor, keys }: StartInputsProps) {
  canvas: HTMLCanvasElement;
  //moving the cursor
  canvas.addEventListener("mousemove", (e) => {
    // from https://codepen.io/chrisjaime/pen/lcEpn
    const rect = canvas.getBoundingClientRect();
    cursor.updatePos(e.clientX - rect.left, e.clientY - rect.top);
  });

  document.addEventListener("keydown", (e) => {
    keys[e.code] = true;
  });
  document.addEventListener("keyup", (e) => {
    keys[e.code] = false;
  });

  document.addEventListener("mousedown", (e) => {
    keys.Mouse = true;
  });

  document.addEventListener("mouseup", (e) => {
    keys.Mouse = false;
  });
}

export default startInputs;
