// constants
const playerId = [1,2];

// state
let playerTurn; // Who's turn it is
let currentBoard; // positions of both players
let win;
let draw;
let drawArr;

// DOM elements
const columnBtns = document.querySelectorAll('.columnbtn');
const player1Marker = document.querySelector('#player1-marker');
const player2Marker = document.querySelector('#player2-marker');
const playBtn = document.querySelector('#play-btn');
const msgEl = document.querySelector('#msg');
const boardEls = document.querySelectorAll('.game-board > div');

// board columns
const col1 = [boardEls[35],boardEls[28],boardEls[21],boardEls[14],boardEls[7],boardEls[0]];
const col2 = [boardEls[36],boardEls[29],boardEls[22],boardEls[15],boardEls[8],boardEls[1]];
const col3 = [boardEls[37],boardEls[30],boardEls[23],boardEls[16],boardEls[9],boardEls[2]];
const col4 = [boardEls[38],boardEls[31],boardEls[24],boardEls[17],boardEls[10],boardEls[3]];
const col5 = [boardEls[39],boardEls[32],boardEls[25],boardEls[18],boardEls[11],boardEls[4]];
const col6 = [boardEls[40],boardEls[33],boardEls[26],boardEls[19],boardEls[12],boardEls[5]];
const col7 = [boardEls[41],boardEls[34],boardEls[27],boardEls[20],boardEls[13],boardEls[6]];
const gameBoard = [col1, col2, col3, col4, col5, col6, col7];

// board rows
const row1 = [boardEls[35],boardEls[36],boardEls[37],boardEls[38],boardEls[39],boardEls[40],boardEls[41]];
const row2 = [boardEls[28],boardEls[29],boardEls[30],boardEls[31],boardEls[32],boardEls[33],boardEls[34]];
const row3 = [boardEls[21],boardEls[22],boardEls[23],boardEls[24],boardEls[25],boardEls[26],boardEls[27]];
const row4 = [boardEls[14],boardEls[15],boardEls[16],boardEls[17],boardEls[18],boardEls[19],boardEls[20]];
const row5 = [boardEls[7],boardEls[8],boardEls[9],boardEls[10],boardEls[11],boardEls[12],boardEls[13]];
const row6 = [boardEls[0],boardEls[1],boardEls[2],boardEls[3],boardEls[4],boardEls[5],boardEls[6]];
const gameBoardRows = [row1, row2, row3, row4, row5, row6];

// init and event listeners
playBtn.addEventListener('click', init);
document.querySelector('#column-selector').addEventListener('click', handleClick);

// initialize function
function init(e){
    console.log('Lets Play!');
    playBtn.innerText = 'Restart Game';
    player1Marker.id = 'player1-marker';
    player2Marker.id = 'player2-marker';
    choosePlayer();
    if(playerTurn === 1){
        msgEl.innerText = `Player ${playerTurn} goes first!`;
        player1Marker.id = 'player1-marker-active';
    } else {
        msgEl.innerText = `Player ${playerTurn} goes first!`;
        player2Marker.id = 'player2-marker-active';
    };
    currentBoard = [...gameBoard];
    currentBoard.forEach(column => {
        column.forEach(element => element.className = 'empty-space');
    });
    win = false;
    draw = false;
    columnBtns.forEach(button => button.disabled = false);
};

// player selection and alternation
function choosePlayer(){
    return playerTurn = playerId[Math.floor(Math.random()*2)];
};

function alternateTurn(){
    if(playerTurn === 1){
        playerTurn = 2;
        player1Marker.id = 'player1-marker';
        player2Marker.id = 'player2-marker-active';
    } else {
        playerTurn = 1;
        player1Marker.id = 'player1-marker-active';
        player2Marker.id = 'player2-marker';
    }
};

// marker placement
function placeMarker(marker, column){
    let availableIdx = column.findIndex(element => element.className === 'empty-space');
    if(availableIdx !== -1){
        column[availableIdx].className = marker;
        if(playerTurn === 2){
            return msgEl.innerText = `Player 1's turn!`;
        } else if(playerTurn === 1){
            return msgEl.innerText = `Player 2's turn!`;
        };
    } else {
        return msgEl.innerText = `That row is full! Try again, Player ${playerTurn}.`;
    };
}

// win check
function checkWin(){
    // column
    for(const column of currentBoard){
        for(let i = 0; i < 3; i++){
            if((column[i].className === column[i+1].className) && (column[i].className === column[i+2].className) && (column[i].className === column[i+3].className) && (column[i].className !== 'empty-space')){
                win = true;
            }
        }
    };  
    // row
    for(const row of gameBoardRows){
        for(let i = 0; i < 4; i++){
            if((row[i].className === row[i+1].className) && (row[i].className === row[i+2].className) && (row[i].className === row[i+3].className) && (row[i].className !== 'empty-space')){
                win = true;
            }
        }
    };
    // diagonal
    
    // draw
    drawArr = [];
    for(i = 0; i < boardEls.length; i++){
        drawArr.push(boardEls[i].className);
    }
    if(drawArr.includes('empty-space')){
        draw = false;
    } else {
        draw = true;
    }
};

// button functions
function handleClick(e){
    //   
    if(e.target.tagName === 'SECTION'){return}
    
    let btnIndex = parseInt(e.target.id.slice(-1));
    let columnChoice = currentBoard[btnIndex];
    
    console.log(playerTurn)
    if(playerTurn === 1){
        placeMarker('player1-token', columnChoice);
        if(msgEl.innerText.includes('That row is full!')){return}
    } else {
        placeMarker('player2-token', columnChoice);
        if(msgEl.innerText.includes('That row is full!')){return}
    };
    // if(msgEl.innerText.includes('That row is full!')){return}
    checkWin();

    if(playerTurn === 1 && win === true){
        msgEl.innerText = `Player ${playerTurn} Wins!`;
        playBtn.innerText = `Play Again`;
        columnBtns.forEach(button => button.disabled = true);
        return;
    } else if(playerTurn === 2 && win === true){
        msgEl.innerText = `Player ${playerTurn} Wins!`;
        playBtn.innerText = `Play Again`;
        columnBtns.forEach(button => button.disabled = true);
        return;
    };

    if(draw === true){
        msgEl.innerText = `It's a Draw!`;
        playBtn.innerText = `Play Again`;
        columnBtns.forEach(button => button.disabled = true);
        return;
    }
    alternateTurn();
};