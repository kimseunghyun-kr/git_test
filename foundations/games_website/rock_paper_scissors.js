let computerWinCount = 0;
let playerWinCount = 0;
let MatchCount = 0;
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
    // console.log(NUMtoRPS(computer));
    document.querySelector(".computerChoice").textContent = NUMtoRPS(computer);
    let player = RPStoNUM(pChoice);
    document.querySelector(".playerChoice").textContent = pChoice;
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
    let buttons = document.querySelectorAll(".rpsButton");
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
    MatchCount = 0;
    totalDrawCount = 0;

    document.querySelector(".ties").textContent = "Ties : 0"
    document.querySelector(".playerChoice").textContent = ""
    document.querySelector(".computerChoice").textContent = ""
    document.querySelector(".playerCurrWins").textContent = "wins : 0"
    document.querySelector(".computerCurrWins").textContent = "wins : 0"
    document.querySelector(".currMatch").textContent = "Match : 1"
    document.querySelector(".endWinStatus").textContent = ""


}


//TODO
function update(RPSresult) {
    //during match
    if (MatchCount < 5) {
        MatchCount++;
        document.querySelector(".currMatch").textContent = "Match : " + MatchCount;
        if (RPSresult == "draw") {
            totalDrawCount++;
            document.querySelector(".ties").textContent = "Ties : " + totalDrawCount;
        } else {
            if (RPSresult == "win") {
                playerWinCount++;
                document.querySelector(".playerCurrWins").textContent = "wins : " + playerWinCount;
            } else {
                computerWinCount++;
                document.querySelector(".computerCurrWins").textContent = "wins : " + computerWinCount;
            }
        }

    } else {
        //at the end
        if (playerWinCount > computerWinCount) {
            document.querySelector(".endWinStatus").textContent = "player won"
            // return "win";
        } else {
            // return "lose";
            document.querySelector(".endWinStatus").textContent = "computer won"
        }
    }
}
let resetGame = document.querySelector('#reset');
resetGame.addEventListener("click", () => {reset()});
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


