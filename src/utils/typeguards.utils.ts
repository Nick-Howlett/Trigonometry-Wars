import Enemy from "../enemy";
import Player from "../player";

export const entityIsEnemy = (entity: Player | Enemy): entity is Enemy => {
  return entity instanceof Enemy;
};

export const elementIsCanvas = (
  element: HTMLElement,
): element is HTMLCanvasElement => {
  return element instanceof HTMLCanvasElement;
};

export const elementIsAudio = (
  element: HTMLElement,
): element is HTMLAudioElement => {
  return element instanceof HTMLAudioElement;
};

export const elementIsInput = (
  element: HTMLElement,
): element is HTMLInputElement => {
  return element instanceof HTMLInputElement;
};

export const elementIsForm = (
  element: HTMLElement,
): element is HTMLFormElement => {
  return element instanceof HTMLFormElement;
};
