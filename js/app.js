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

// board columns
const col1 = [boardEls[35],boardEls[28],boardEls[21],boardEls[14],boardEls[7],boardEls[0]];
const col2 = [boardEls[36],boardEls[29],boardEls[22],boardEls[15],boardEls[8],boardEls[1]];
const col3 = [boardEls[37],boardEls[30],boardEls[23],boardEls[16],boardEls[9],boardEls[2]];
const col4 = [boardEls[38],boardEls[31],boardEls[24],boardEls[17],boardEls[10],boardEls[3]]
const col5 = [boardEls[39],boardEls[32],boardEls[25],boardEls[18],boardEls[11],boardEls[4]]
const col6 = [boardEls[40],boardEls[33],boardEls[26],boardEls[19],boardEls[12],boardEls[5]]
const col7 = [boardEls[41],boardEls[34],boardEls[27],boardEls[20],boardEls[13],boardEls[6]]
const gameBoard = [col1, col2, col3, col4, col5, col6, col7];
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

function alternateTurn(){
    if(playerTurn === 1){
        playerTurn = 2;
    } else {
        playerTurn = 1;
    }
};

function placeMarker(marker, column){
    let availableIdx = column.findIndex(element => element.className = 'empty-space');
    column[availableIdx].className = marker;
}

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
    
    let btnIndex = parseInt(e.target.id.slice(-1));
    let columnChoice = gameBoard[btnIndex];
    
    if(playerTurn === 1){
        placeMarker('player1-token', columnChoice);
        alternateTurn();
    } else {
        placeMarker('player2-token', columnChoice);
        alternateTurn();
    }
    
}

// reset/replay
