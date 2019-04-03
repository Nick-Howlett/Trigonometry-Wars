import Game from './game';

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("game-canvas");
    const ctx = canvas.getContext('2d');
    const overlays = Array.from(document.getElementsByClassName('overlay'));
    const gameOver = document.getElementById('game-over');
    const scoreOverlay = document.getElementById('score-overlay');
    const play = Array.from(document.getElementsByClassName('play-button'));
    play.forEach(button => {
        button.addEventListener("click", () => {
            const game = new Game(canvas, ctx, gameOver, scoreOverlay);
            game.start();
            overlays.forEach(overlay => overlay.className = "overlay hidden");
            canvas.className = "active";
        });
    });
});
 