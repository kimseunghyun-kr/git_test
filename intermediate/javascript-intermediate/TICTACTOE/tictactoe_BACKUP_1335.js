let game = (function (doc) {
    let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    let boardLen = 3;


    let fillboard = (elem) => {
        console.log(elem);
        let i = elem.dataset.x;
        let j = elem.dataset.y;
        if (_isBoardfilled(i, j)) {
            alert("fill somewhere unfilled");
        } else {
            if (currPlayer.ident == 1) {
                board[i][j] = "O";
                elem.innerText = "O";
            } else {
                board[i][j] = "X";
                elem.innerText = "X";
            }
            if (_isWin()) {
                alert("player" + currPlayer.ident + "  won");
                _reset();
                currPlayer = player1();
            } else {

                if (_isFull()) {
                    alert("draw");
                    _reset();
                }
                _nextTurn();
            }
            // _nextTurn();
        }

    }

    let _isFull = function () {
        for (i = 0; i < boardLen; i++) {
            for (j = 0; j < boardLen; j++) {
                if (board[i][j] == " ") {
                    return false;
                }
            }
        }

        return true;
    }

    let _reset = function () {
        currSession = game(doc);
        let gameGrid = doc.querySelectorAll(".cell");
        gameGrid.forEach(gameCell => gameCell.innerText = "");
    }

    let _isBoardfilled = function (i, j) {
        if (board[i][j] != " ") {
            return true;
        } else {
            return false;
        }
    }

    let _nextTurn = function () {
        if (currPlayer.ident == 1) {
            currPlayer = player2();
        } else {
            currPlayer = player1();
        }
    }

    let _isWin = function () {



        // horiz win
        for (i = 0; i < boardLen; i++) {
            let winBool = false;
            if (board[i][0] == currPlayer.symbol) {
                winBool = true;
                for (j = 0; j < boardLen; j++) {
                    winBool = winBool && board[i][j] == currPlayer.symbol;
                }
            }
            if (winBool) {
                return true;
            }
        }

        //vert win
        for (j = 0; j < boardLen; j++) {
            let winBool = false;
            if (board[0][j] == currPlayer.symbol) {
                winBool = true;
                for (i = 0; i < boardLen; i++) {
                    winBool = winBool && board[i][j] == currPlayer.symbol;
                }
            }
            if (winBool) {
                return true;
            }
        }

        // diagonalwin
        console.log(currPlayer.symbol);
        console.log(board[0][0]);
        console.log(board[1][1]);
        console.log(board[2][2]);
        console.log(board[0][0] == board[1][1]);
        if (((board[0][0] == board[1][1]) && (board[0][0] == board[2][2]) && (board[0][0] == currPlayer.symbol)) ||
            (board[2][0] == board[1][1]) && (board[0][2] == board[1][1]) && (board[1][1] == currPlayer.symbol)) {
            return true;
        }

        return false;
    }

    return { fillboard }
});

let player1 = (function () {
    const ident = 1;
    const symbol = "O"
    return { ident, symbol };
});

let player2 = (function () {
    const ident = 2;
    const symbol = "X"
    return { ident, symbol };

});

let computer = (function () {
    // for each computer round, make a minimax tree, given the current board.
    // take the move that gives max number

    // next time;
})

let currPlayer = player1();
let currSession = game(document);
<<<<<<< Updated upstream
let grid = document.querySelector(".grid");
grid.addEventListener('click' , e => currSession.fillboard(e.target));
// let cell = document.querySelectorAll(".cell");
// cell.forEach( divCell => {
//     divCell.addEventListener("click", (event) => {
//     console.log("clicked");
//     let elemSelect = event.target;
//     // let x = elemSelect.dataset.x;
//     // let y = elemSelect.dataset.y;
//     console.log("clicked");

//     currSession.fillboard(elemSelect);

//     });

// });
=======
let cell = document.querySelectorAll(".cell");
cell.forEach(divCell => {
    divCell.addEventListener("click", (event) => {
        console.log("clicked");
        let elemSelect = event.target;
        // let x = elemSelect.dataset.x;
        // let y = elemSelect.dataset.y;
        console.log("clicked");

        currSession.fillboard(elemSelect);

    });

});
>>>>>>> Stashed changes

// console.log(game().fillboard(1,1));