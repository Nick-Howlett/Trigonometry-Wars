import Game from "./game";
import { Score } from "./types/backend";
import {
  assertElement,
  assertNonNull,
  updateClass,
} from "./utils/dom-manuipulation.utils";
import {
  elementIsAudio,
  elementIsCanvas,
  elementIsForm,
  elementIsInput,
} from "./utils/typeguards.utils";
const axios = require("axios");

document.addEventListener("DOMContentLoaded", () => {
  const canvas: HTMLCanvasElement = assertElement(
    document.getElementById("game-canvas"),
    elementIsCanvas,
    "Main canvas",
  );
  const background: HTMLCanvasElement = assertElement(
    document.getElementById("background-canvas"),
    elementIsCanvas,
    "Background canvas",
  );
  drawBackground(background);
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Missing 2d context for main canvas");
  }

  const overlays = Array.from(document.getElementsByClassName("overlay"));
  const gameOver = assertNonNull(
    document.getElementById("game-over"),
    "Game over screen",
  );
  const scoreOverlay = document.getElementById("score-overlay");
  const scoreBoard = assertNonNull(
    document.getElementById("scoreboard"),
    "Scoreboard",
  );
  const scoreButton = document.querySelectorAll(".scoreboard");
  const form = assertElement(
    document.getElementById("submit-form"),
    elementIsForm,
    "Submission form",
  );
  const scoreForm = assertNonNull(
    document.getElementById("score-submit"),
    "Score form",
  );
  const highScores = assertNonNull(
    document.getElementById("highscores"),
    "High score list",
  );
  const scoreFormButton = document.querySelectorAll(".score-submit");
  const playerName = assertElement(
    document.getElementById("player-name"),
    elementIsInput,
    "Player name field",
  );
  const formSubmit = assertElement(
    document.querySelector(".form-submit"),
    elementIsInput,
    "Form submit",
  );
  const play = Array.from(document.getElementsByClassName("play-button"));
  console.log(document.querySelector(".top-left"));
  const soundButton = assertNonNull(
    document.querySelector(".top-left"),
    "Mute button",
  );
  let scoreSubmitted = false;
  let audioContext: AudioContext;
  const sounds: { fire: HTMLAudioElement; charge: HTMLAudioElement } = {
    fire: assertElement(
      document.getElementById("fire"),
      elementIsAudio,
      "Fire sound",
    ),
    charge: assertElement(
      document.getElementById("charge"),
      elementIsAudio,
      "Charge sound",
    ),
  };
  sounds.fire.volume = 0.4;

  let mute = true;
  let game: Game;
  axios
    .get("https://trigonometry-scores.herokuapp.com/api/scores")
    .then((scores: { data: Score[] }) =>
      updateScores(scores, highScores, game, scoreSubmitted),
    );
  play.forEach((button) => {
    button.addEventListener("click", () => {
      if (!audioContext) {
        audioContext = new AudioContext();
        audioContext
          .createMediaElementSource(sounds.fire)
          .connect(audioContext.destination);
        audioContext
          .createMediaElementSource(sounds.charge)
          .connect(audioContext.destination);
      }
      game = new Game(canvas, ctx, gameOver, scoreOverlay, sounds, mute);
      game.start();
      overlays.forEach((overlay) => (overlay.className = "overlay hidden"));
      canvas.className = "active";
      scoreSubmitted = false;
      formSubmit.value = "Submit Score";
    });
  });
  scoreButton.forEach((button) => {
    button.addEventListener("click", () => {
      updateClass(scoreBoard, "overlay");
      updateClass(gameOver, "overlay hidden");
      updateClass(scoreForm, "overlay hidden");
    });
  });
  scoreFormButton.forEach((button) => {
    button.addEventListener("click", () => {
      updateClass(scoreForm, "overlay");
      updateClass(gameOver, "overlay hidden");
      updateClass(scoreBoard, "overlay hidden");
    });
  });
  formSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (form.reportValidity()) {
      axios
        .post("https://trigonometry-scores.herokuapp.com/api/scores", {
          name: playerName.value,
          score: game.score,
        })
        .then(() => {
          formSubmit.value = "Score Submitted";
          scoreSubmitted = true;
          axios
            .get("https://trigonometry-scores.herokuapp.com/api/scores")
            .then((scores: { data: Score[] }) =>
              updateScores(scores, highScores, game, scoreSubmitted),
            );
        })
        .catch((err: Error) => {
          formSubmit.value = "Score Upload Fail";
        });
      formSubmit.value = "Submitting Score...";
    }
  });
  const muteIcon = assertNonNull(document.getElementById("mute"), "Mute icon");
  const soundIcon = assertNonNull(
    document.getElementById("sound"),
    "Sound icon",
  );
  document.addEventListener("keypress", (e) => {
    if (e.key === "m" || e.key === "M") {
      toggleMute();
    }
  });
  soundButton.addEventListener("click", (e) => toggleMute());
  const toggleMute = () => {
    if (mute) {
      updateClass(soundIcon, "");
      updateClass(muteIcon, "hidden");
      mute = false;
      if (game) game.unmute();
    } else {
      updateClass(soundIcon, "hidden");
      updateClass(muteIcon, "");
      mute = true;
      if (game) game.mute();
    }
  };
});

const updateScores = (
  scores: { data: Score[] },
  highScores: HTMLElement,
  game: Game,
  scoreSubmitted: boolean,
) => {
  const scoreArray = scores.data;
  if (
    game &&
    (!scoreSubmitted || game.score < scoreArray[scoreArray.length - 1].score)
  )
    scoreArray.push({ name: "Your Score", score: game.score });
  scoreArray.sort((score1, score2) => score2.score - score1.score);
  highScores.innerHTML = "";
  scoreArray.forEach((score, i) => {
    const scoreNode = document.createElement("div");
    const scoreName = document.createElement("span");
    scoreName.appendChild(document.createTextNode(`${i + 1}. ${score.name}`));
    const scoreNum = document.createElement("span");
    scoreNum.appendChild(document.createTextNode(String(score.score)));
    scoreNode.appendChild(scoreName);
    scoreNode.appendChild(scoreNum);
    highScores.appendChild(scoreNode);
  });
};

const drawBackground = (canvas: HTMLCanvasElement): void => {
  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext("2d");

  if (!ctx) {
    return;
  }

  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#00ff00";
  ctx.lineWidth = 0.1;
  for (let i = 0; i < canvas.width; i += Math.floor(canvas.width / 12)) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height);
    ctx.stroke();
  }
  for (let i = 0; i < canvas.height; i += Math.floor(canvas.height / 8)) {
    ctx.moveTo(0, i);
    ctx.lineTo(width, i);
    ctx.stroke();
  }
};
