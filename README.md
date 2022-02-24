# c.Js
A mini game engine inspired by, 24a2 by, jamesroutley made as a test Idea thingy.
# ?
c.Js is a tiny Js game engine thing inspired by, 24a2 that was designed to not be very large.
## How do I use it?
Download the repository and open the game.js file
  Go under the  const cjs = new Cjs();  code line and you can start under there.
  There are only 6 commands in cJs
  cjs.clear();  cjs.rect(); cjs.backGround(); cjs.text(); cjs.end(); cjs.getRandomInt();
  There are 32 squares that can be modified
  cjs.clear(); will reset the squares back to the main color
  cjs.rect(); has 2 modifiers Number & Color
  the number modifier will will select which of the 48 squares gets modified
  the Color modifier will will choose the color of the square using Hex
  For example cjs.rect(1,"#ff0000"); will make the first square in the screen red.
  The rest of the commands are just extras
  
And thats about it.
