// constants
const playerId = [1,2];

// state
let player1Token; // player 1's gamepiece
let player2Token; // player 2's gamepiece
let playerTurn; // Who's turn it is
let currentBoard // positions of both players
let winner;

// DOM elements
const columnBtns = document.querySelectorAll('.columnbtn');
const player1Bank = document.querySelector('.player1-bank');
const player2Bank = document.querySelector('.player2-bank');
const playBtn = document.querySelector('#play-btn');
const msgEl = document.querySelector('#msg');
const boardEls = document.querySelectorAll('.game-board > div');

// board columns **REFORMAT WHEN SCALED UP
const col1 = [boardEls[6],boardEls[3],boardEls[0]];
const col2 = [boardEls[7],boardEls[4],boardEls[1]];
const col3 = [boardEls[8],boardEls[5],boardEls[2]];
const gameBoard = [col1, col2, col3];
console.log(gameBoard)

// init and event listeners
playBtn.addEventListener('click', init);
document.querySelector('#column-selector').addEventListener('click', handleClick);

function init(e){
    console.log('Lets Play!');
    playBtn.innerText = 'Restart Game';
    // playerTurn = playerId[Math.floor(Math.random()*2)];
    choosePlayer();
    if(playerTurn === 1){
        msgEl.innerText = `${player1Bank.innerText} goes first!`
    } else {
        msgEl.innerText = `${player2Bank.innerText} goes first!`
    };
    gameBoard.forEach(column => {
        column.forEach(element => element.className = 'empty-space');
    });
};

function choosePlayer(){
    return playerTurn = playerId[Math.floor(Math.random()*2)];
};

function turnAlternate(){
    if(playerTurn === 1){
        playerTurn = 2;
    } else {
        playerTurn = 1;
    }
};

// render
function render(){

}

// button functions
function handleClick(e){
    if(e.target.tagName === 'BUTTON'){
        console.log(e.target.id);
    } if(e.target.tagName === 'SECTION'){
        return;
    }
    
}

// reset/replay
