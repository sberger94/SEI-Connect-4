# SEI-Connect-4

A simple Connect 4 game built with Javascript, CSS, and HTML

## Wireframe
![Initial wireframe sketch](/pictures/connect-4-wireframe.jpg)

## Technologies Used

**_HTML_** The game display and user interface were created using HTML. Each slot of the gameboard is a ```<div>``` element with a unique ID and a class to signify whether the spot is empty or occupied by either player's token.

**_CSS_** The layout of the page, as well as the individual board positions are both laid out using CSS grid. The empty spaces are set to be a circular element the same color as the page's background color. The board positions change color to the corresponding player's token color by assigning a new class to the HTML element of the board position.

**_Javascript_** The game logic and organization was built out using Javascript, and the user interaction was constructed with DOM manipulation. The HTML elements for the board positions were placed into an array, and the logic for win or draw conditions is built off of that array and it's indicies.

## Getting Started

The rules of Connect 4 are simple: try to get four of the same color marker in adjacent positions. The current version of this game only registers a win with four markers adjacent in a row or column, but I hope to update it to register diagonal wins. Decide who is Player 1 and who is Player 2 and have fun!

[Play Connect 4!](https://sberger94.github.io/SEI-Connect-4/)

![Gameplay](/pictures/gameplay-screenshot.jpg)

## Next Steps

- Register diagonal wins
- Allow player to choose name and gamepiece color
- Add an animation for gamepieces dropping into place
- Build a computer player