# Trigonometry-Wars
Armed with a bouncing laser, defend as long as you can against endless enemies!


## About
Trigonometry wars is a game in which the player defends against waves of enemies with a bouncing laser inspired by games like
Geometry Wars and Tank Trouble. The game is written in pure JavaScript using an HTML5 canvas, with all vector math, collision logic, 
particle effects, and frame rendering created from scratch. Earn more points for hitting enemies on a later bounce and survive as long as you can!

## Game Features
 * Central game canvas rendering loop 
 * Collision detection algorithm using vector math for pixel-perfect enemy-laser and enemy-player collision and accurate laser reflection off walls and obstacles
 * Particle effects for laser reflections and enemy explosions
 * Sound using HTML AudioContext
 * Score submission and high score board
 
### Laser Reflection
<img src="https://raw.githubusercontent.com/Nick-Howlett/Trigonometry-Wars/master/images/reflections.gif"/>

 
## Technologies
Trigonometry wars is written in pure JavaScript using an HTML5 Canvas on an HTML5/CSS3 styled page.
High scores and score submission are provided by calls to a lightweight Node.js, Express, and MongoDB external server. 
