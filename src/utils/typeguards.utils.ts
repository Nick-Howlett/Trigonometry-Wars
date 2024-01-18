import Enemy from "../enemy";
import Player from "../player";

export const entityIsEnemy = (entity: Player | Enemy): entity is Enemy => {
  return !!(entity as Enemy).reroute;
};

export const elementIsCanvas = (
  element: HTMLElement,
): element is HTMLCanvasElement => {
  return !!(element as HTMLCanvasElement).captureStream;
};

export const elementIsAudio = (
  element: HTMLElement,
): element is HTMLAudioElement => {
  return !!(element as HTMLAudioElement).pause;
};

export const elementIsInput = (
  element: HTMLElement,
): element is HTMLInputElement => {
  return !!(element as HTMLInputElement).value;
};

export const elementIsForm = (
  element: HTMLElement,
): element is HTMLFormElement => {
  return !!(element as HTMLFormElement).value;
};
