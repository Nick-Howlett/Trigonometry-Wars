import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const background = document.getElementById("background-canvas");
    drawBackground(background);
    const ctx = canvas.getContext('2d');
    const overlays = Array.from(document.getElementsByClassName('overlay'));
    const gameOver = document.getElementById('game-over');
    const scoreOverlay = document.getElementById('score-overlay');
    const play = Array.from(document.getElementsByClassName('play-button'));
    const audioContext = new AudioContext();
    const sounds = {};
    sounds.fire = document.getElementById('fire');
    sounds.fire.volume = 0.4;
    sounds.charge = document.getElementById('charge');
    audioContext.createMediaElementSource(sounds.fire).connect(audioContext.destination);
    audioContext.createMediaElementSource(sounds.charge).connect(audioContext.destination);
    let mute = true;
    let game;
    play.forEach(button => {
        button.addEventListener("click", () => {
            game = new Game(canvas, ctx, gameOver, scoreOverlay, sounds, mute);
            game.start();
            overlays.forEach(overlay => overlay.className = "overlay hidden");
            canvas.className = "active";
        });
    });
    const muteIcon = document.getElementById("mute");
    const soundIcon = document.getElementById("sound");
    document.addEventListener("keypress", e => {
        if(e.key === "m" || e.key === "M"){
            if(mute){
                soundIcon.classList = "";
                muteIcon.classList = "hidden";
                mute = false;
                game.unmute();
            } else {
                soundIcon.classList = "hidden";
                muteIcon.classList = "";
                mute = true;
                game.mute();
            }
        }
    });
});


const drawBackground = (canvas) => {
    const width = canvas.width;
    const height = canvas.height;
    const ctx = canvas.getContext('2d');
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = "#00ff00";
    ctx.lineWidth = .1;
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
 