function computerPlay () {
    const randint = Math.random();
    if (randint < 1 / 3) {
        return "0";
    } else if (randint >= 1/3 && randint < 2/3 ) {
        return "1";
    } else {
        return '2';
    }

}

function RPS(pChoice) {
    let computer = computerPlay();
    console.log(computer)
    let player = pChoice == "rock" ? 0 : pChoice == "paper" ? 1 : pChoice == "scissors" ? 2 : null;
    
    if (computer == player) {
        return "draw";
    } else if (player > computer ) {
        return "win";
    } else {
        if(player == 0 && computer == 2) {
            return "win";
        } else {
            return "lose"
        }
    }
    

}
console.log(RPS("rock"))

