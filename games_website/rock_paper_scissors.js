let computerWinCount = 0;
let playerWinCount = 0;
let MatchCount = 1;
let totalDrawCount = 0;

//RPS functionality

function computerPlay() {
    const randint = Math.random();
    if (randint < 1 / 3) {
        return "0";
    } else if (randint >= 1 / 3 && randint < 2 / 3) {
        return "1";
    } else {
        return '2';
    }

}

function NUMtoRPS(num) {
    if (num == 0) {
        return "rock";
    } else if (num == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function RPStoNUM(string) {
    return string == "rock" ? 0 : string == "paper" ? 1 : string == "scissors" ? 2 : null;
}

function RPS(pChoice) {
    let computer = computerPlay();
    console.log(NUMtoRPS(computer));
    let player = RPStoNUM(pChoice);
    // console.log(player);

    if (computer == player) {
        return update("draw");
    } else if (player > computer) {
        return update("win");
    } else {
        if (player == 0 && computer == 2) {
            return update("win");
        } else {
            return update("lose");
        }
    }

}

    //initialise
function startGame() {
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) =>
        button.addEventListener("click", () => {
            if (button.id) {
                RPS(button.id);
            }
        })
    );


}

//reset
function reset() {

    computerWinCount = 0;
    playerWinCount = 0;
    MatchCount = 1;
    totalDrawCount = 0;

}

function update(RPSresult) {
    //during match
    if (MatchCount < 6) {
        MatchCount++;
        if (RPSresult == "draw") {
            totalDrawCount++;
        } else {
            if (RPSresult == "win") {
                playerWinCount++;
            } else {
                computerWinCount++;
            }
        }

    } else {
        //at the end
        if (playerWinCount > computerWinCount) {
            return "win";
        } else {
            return "lose";
        }
    }
}

startGame();

//Legacy

// console.log(RPS("rock"));
// console.log(RPS());
// console.log(typeof(RPS));


// let rock = document.querySelector(".rock");
// rock.addEventListener("click", function () { let result = RPS("rock")
//                                              RPSMatchUI(result);});

// let paper = document.querySelector(".paper");
// paper.addEventListener("click", function () { let result = RPS("paper");
//                                               RPSMatchUI(result);});

// let scissors = document.querySelector(".scissors");
// scissors.addEventListener("click", function () { let result = RPS("scissors");
//                                                 RPSMatchUI(result);});


