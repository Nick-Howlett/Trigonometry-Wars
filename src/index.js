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
    const scoreButton = document.querySelectorAll('.scoreboard');
    const form = document.getElementById("submit-form");
    const scoreForm = document.getElementById('score-submit');
    const highScores = document.getElementById('highscores');
    const scoreFormButton = document.querySelectorAll('.score-submit');
    const playerName = document.getElementById('player-name');
    const formSubmit = document.querySelector('.form-submit');
    const play = Array.from(document.getElementsByClassName('play-button'));
    const soundButton = document.querySelector(".top-left");
    const audioContext = new AudioContext();
    const sounds = {};
    let scoreSubmitted = false;
    sounds.fire = document.getElementById('fire');
    sounds.fire.volume = 0.4;
    sounds.charge = document.getElementById('charge');
    audioContext.createMediaElementSource(sounds.fire).connect(audioContext.destination);
    audioContext.createMediaElementSource(sounds.charge).connect(audioContext.destination);
    let mute = true;
    let game;
    axios.get("https://trigonometry-scores.herokuapp.com/api/scores").then(scores => updateScores(scores, highScores, game, scoreSubmitted));
    play.forEach(button => {
        button.addEventListener("click", () => {
            game = new Game(canvas, ctx, gameOver, scoreOverlay, sounds, mute);
            game.start();
            overlays.forEach(overlay => overlay.className = "overlay hidden");
            canvas.className = "active";
        });
    });
    scoreButton.forEach(button => {
        button.addEventListener("click", () => {
            scoreBoard.classList = "overlay";
            gameOver.classList = "overlay hidden";
            scoreForm.classList = "overlay hidden";
        });
    });
    scoreFormButton.forEach(button => {
        button.addEventListener("click", () => {
            scoreForm.classList = "overlay";
            gameOver.classList = "overlay hidden";
            scoreBoard.classList = "overlay hidden";
        });
    });
    formSubmit.addEventListener("click", e => {
        e.preventDefault();
        if(form.reportValidity()){
            axios.post('https://trigonometry-scores.herokuapp.com/api/scores', {name: playerName.value, score: game.score})
                .then(() => {
                    formSubmit.value = "Score Submitted";
                    scoreSubmitted = true;
                    axios.get("https://trigonometry-scores.herokuapp.com/api/scores").then(scores => updateScores(scores, highScores, game, scoreSubmitted));
                })
                .catch(err => {
                    formSubmit.value = "Score Upload Fail";
                });
            formSubmit.value = "Submitting Score...";
        }
    
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

const updateScores = (scores, highScores, game) => {
    const scoreArray = scores.data;
    if(game && (!scoreSubmitted || game.score < scoreArray[scoreArray.length - 1].score)) scoreArray.push({name: "Your Score", score: game.score});
    scoreArray.sort((score1, score2) =>  score2.score - score1.score);
    highScores.innerHTML = "";
    scoreArray.forEach((score, i) => {
        const scoreNode = document.createElement('div');
        const scoreName = document.createElement('span');
        scoreName.appendChild(document.createTextNode(`${i + 1}. ${score.name}`));
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
 