let game = (function() {
    let board = [[" "," " ," " ], [" " ," " ," " ], [" " ," " ," " ]];
    let boardLen = 3;
    let fillboard = (player, i ,j) => {
        if(_isBoardfilled(i,j)) {
            alert("fill somewhere unfilled");
        } else {
            if(player.ident == 1) {
                board[i][j] = "O";
            } else {
                board[i][j] = "X";
            }
            _isWin(player);
            _nextTurn(player);
        }
        
    }

    let _isBoardfilled = function(i,j) {
        if(board[i][j] != " " ) {
            return true;
        } else {
            return false;
        }
    }

    let _nextTurn = function(player) {
        //dom port needed -> for i/o; a
        if(player.ident == 1) {
            //player 2 turn
        } else {
            //player 1 turn
        }
    }

    let _isWin = function(player) {
        let winBool = true;

        // horiz win
        for(i = 0 ; i < boardLen; i++) {
            let winBool = false;
            if(board[i][0] == player.symbol) {
                winBool = true;
                for(j = 0 ; j < boardLen ; j++) {
                    winBool = winBool && board[i][j] == player.symbol;
                }
            }
            if(winBool) {
                return true;
            }
        }

        //vert win
        for(j = 0 ; j < boardLen; j++) {
            let winBool = false;
            if(board[0][j] == player.symbol) {
                winBool = true;
                for(i= 0 ; i < boardLen ; i++) {
                    winBool = winBool && board[i][j] == player.symbol;
                }
            }
            if(winBool) {
                return true;
            }
        }

        // diagonalwin

        if(board[0][0] == board[1][1] == board[2][2] == player.symbol || board[0][2] == board[1][1] == board[2][0] == player.symbol ) {
            return true;
        }
        
        return false;
    }

    return {fillboard}
});

let player1 = (function() {
    const ident = 1;
    const symbol = "O"
    return { ident , symbol };
});

let player2 = (function(){
    const ident = 2;
    const symbol = "X"
    return { ident , symbol };

});

let computer = (function() {

})

console.log(game().fillboard(player1(), 1,1));