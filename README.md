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

Laser reflection is the central conceit of the game, and playing with the collisions and math involved were what got me interested in making the game in the first place. 

```javascript
reflect(laserLine, reflectLine){
    if(this.reflections === 0){
        this.duration = Math.min(this.duration, 12);
        return; //stop if we are out of reflections
    }
    const laserVec = laserLine.vectorize();
    const norm = reflectLine.normalVec().normalize();
    const reflectVec = laserVec.subtract(norm.scale(2 * (laserVec.dot(norm))));
    const currentVec = this.vecs[this.vecs.length - 1];
    const newLine = reflectVec.createLine(currentVec.q);
    //translate the reflection point so it isn't directly on the reflected surface
    const laserNormalized = reflectVec.normalize();
    newLine.p.x += offset.x;
    newLine.p.y += offset.y;
    this.vecs.push(newLine);
    this.reflections--;
    return 1;
}
```
Much of the game's logic is written using a Vector class with methods such as ```normalize()``` and ```dot(secondVector)```, and the Line class, representing line segments with p and q instance variables for the beginning and end points of the line. These abstractions allow us to represent the actual laser portion of the Laser class as an array of Line objects, each a portion of the laser which we can ```vectorize()``` if we need to perform calculations.
By using these classes we can write the actual equation of reflection, r = d − 2(d ⋅ n)n, where r is the reflection vector, d is the current vector, and n is the normalized normal vector of the reflected surface, as a series of vector methods. Once the equation is performed it's simply a matter of creating a new line segment from the last line segment's endpoint using the new vector, and adding it to the Laser instance's array of line segments.
As a final element to the function we offset the starting point of the new reflection line by that line's unit vector so it doesn't share a point of intersection with the reflected surface. Without this offset, the collision algorithm would immediately detect this line as colliding with the same surface as before, and performing an erroneous reflection.
 
## Technologies
Trigonometry wars is written in pure JavaScript using an HTML5 Canvas on an HTML5/CSS3 styled page.
High scores and score submission are provided by calls to a lightweight Node.js, Express, and MongoDB external server. 
