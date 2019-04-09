import Game from './game';
const axios = require('axios');

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const background = document.getElementById("background-canvas");
    drawBackground(background);
    const ctx = canvas.getContext('2d');
    const overlays = Array.from(document.getElementsByClassName('overlay'));
    const gameOver = document.getElementById('game-over');
    const scoreOverlay = document.getElementById('score-overlay');
    const scoreBoard = document.getElementById('scoreboard');
    const scoreButton = document.querySelector('.scoreboard');
    const highScores = document.getElementById('highscores');
    const play = Array.from(document.getElementsByClassName('play-button'));
    const soundButton = document.querySelector(".top-left");
    const audioContext = new AudioContext();
    const sounds = {};
    sounds.fire = document.getElementById('fire');
    sounds.fire.volume = 0.4;
    sounds.charge = document.getElementById('charge');
    audioContext.createMediaElementSource(sounds.fire).connect(audioContext.destination);
    audioContext.createMediaElementSource(sounds.charge).connect(audioContext.destination);
    let mute = true;
    let game;
    axios.get("https://trigonometry-scores.herokuapp.com/api/scores").then(scores => updateScores(scores, highScores));
    play.forEach(button => {
        button.addEventListener("click", () => {
            game = new Game(canvas, ctx, gameOver, scoreOverlay, sounds, mute);
            game.start();
            overlays.forEach(overlay => overlay.className = "overlay hidden");
            canvas.className = "active";
        });
    });
    scoreButton.addEventListener("click", () => {
        axios.get("https://trigonometry-scores.herokuapp.com/api/scores").then(scores => updateScores(scores, highScores));
        scoreBoard.classList = "overlay";
        gameOver.classList = "overlay hidden";
    });
    const muteIcon = document.getElementById("mute");
    const soundIcon = document.getElementById("sound");
    document.addEventListener("keypress", e => {
        if(e.key === "m" || e.key === "M") {
            toggleMute();
        }
    });
    soundButton.addEventListener("click", e => toggleMute());
    const toggleMute = () => {
        if(mute){
            soundIcon.classList = "";
            muteIcon.classList = "hidden";
            mute = false;
            if(game) game.unmute();
        } else {
            soundIcon.classList = "hidden";
            muteIcon.classList = "";
            mute = true;
            if(game) game.mute();
        }
    };
});

const updateScores = (scores, highScores) => {
    const scoreArray = scores.data;
    highScores.innerHTML = "";
    scoreArray.forEach(score => {
        const scoreNode = document.createElement('div');
        const scoreName = document.createElement('span');
        scoreName.appendChild(document.createTextNode(score.name));
        const scoreNum = document.createElement('span');
        scoreNum.appendChild(document.createTextNode(score.score));
        scoreNode.appendChild(scoreName);
        scoreNode.appendChild(scoreNum);
        highScores.appendChild(scoreNode);
    });
};


const drawBackground = (canvas) => {
    const width = canvas.width;
    const height = canvas.height;
    const ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = "#00ff00";
    ctx.lineWidth = 0.1;
    for(let i = 0; i < canvas.width; i += Math.floor(canvas.width / 12)){
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
    }
    for(let i = 0; i < canvas.height; i += Math.floor(canvas.height / 8)){
        ctx.moveTo(0, i);
        ctx.lineTo(width, i);
        ctx.stroke();
    }
};
 