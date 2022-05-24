//readline shenanigans
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function masterWord(inputString) {



    //variables
    let incorrectGuessCount = 0;
    let guessChars = [];
    let lowerCased = inputString.toLowerCase();


    //storing the word as a key-value map where key = char, map = array of the positions
    //and add _ to the guesschars
    const charMap = new Map();
    for (i = 0; i < lowerCased.length; i++) {
        guessChars.push("_");
        let charToComp = lowerCased.charAt(i);
        if (charMap.has(charToComp)) {
            let arrayContains = charMap.get(charToComp);
            arrayContains.push(i);
            charMap.set(charToComp, arrayContains);
        } else {
            charMap.set(charToComp, [i]);
        }
    }

    while (charMap.size !== 0 || incorrectGuessCount <= 10) {
        console.log(guessChars);


        if (charMap.has(userInput)) {
            let positionArray = charMap.get(userInput);
            for (j = 0; j < positionArray.length; j++) {
                guessChars[positionArray[j]] = userInput;
            }
            charMap.delete(userInput);
        } else {
            incorrectGuessCount++;
        }
    }

    console.log("congratulations, you have saved hangman!")
    console.log("total incorrect tries = " + incorrectGuessCount);



}

// masterWord("Apple")

let userInput = rl.question("guess a character", function (answer) {
    rl.close();
});

// console.log(userInput);


