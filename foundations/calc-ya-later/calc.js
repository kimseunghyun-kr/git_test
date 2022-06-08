let term1 = "";
let term2 = "";
let currOper = "";

function initialise() {
    let buttonContainer = document.querySelector(".buttons");
    buttonContainer.style.gridTemplateRows = `repeat(5, 1fr)`
    buttonContainer.style.gridTemplateColumns = `repeat(4, 1fr)`

    for (let i = 1; i <= 20; i++) {
        let indivButton = document.createElement("button");
        indivButton.classList.add = "calcButtons";


        switch (i) {
            case 1:
                indivButton.textContent = "AC";
                indivButton.addEventListener("click", reset);
                break;
            case 2:
                indivButton.textContent = "sqrt";
                indivButton.addEventListener("click", operStore);
                indivButton.value = "sqrt";
                break;
            case 3:
                indivButton.textContent = "%";
                indivButton.addEventListener("click", operStore);
                indivButton.value = "%";
                break;
            case 4:
                indivButton.textContent = "/";
                indivButton.addEventListener("click", operStore);
                indivButton.value = "/";
                break;
            case 5:
                indivButton.textContent = "7";
                indivButton.addEventListener("click", valStore);
                indivButton.value = 7;
                break;
            case 6:
                indivButton.textContent = "8";
                indivButton.addEventListener("click", valStore);
                indivButton.value = 8;
                break;
            case 7:
                indivButton.textContent = "9";
                indivButton.addEventListener("click", valStore);
                indivButton.value = 9;
                break;
            case 8:
                indivButton.textContent = "x";
                indivButton.addEventListener("click", operStore);
                indivButton.value = "*";
                break;
            case 9:
                indivButton.textContent = "4";
                indivButton.addEventListener("click", valStore);
                indivButton.value = 4;
                break;
            case 10:
                indivButton.textContent = "5";
                indivButton.addEventListener("click", valStore);
                indivButton.value = 5;
                break;
            case 11:
                indivButton.textContent = "6";
                indivButton.addEventListener("click", valStore);
                indivButton.value = 6;
                break;
            case 12:
                indivButton.textContent = "-";
                indivButton.addEventListener("click", operStore);
                indivButton.value = "-";
                break;
            case 13:
                indivButton.textContent = "1";
                indivButton.addEventListener("click", valStore);
                indivButton.value = 1;
                break;
            case 14:
                indivButton.textContent = "2";
                indivButton.addEventListener("click", valStore);
                indivButton.value = 2;
                break;
            case 15:
                indivButton.textContent = "3";
                indivButton.addEventListener("click", valStore);
                indivButton.value = 3;
                break;
            case 16:
                indivButton.textContent = "+";
                indivButton.addEventListener("click", operStore);
                indivButton.value = "+";
                break;
            case 17:
                indivButton.textContent = "+/-";
                indivButton.addEventListener("click", operStore);
                indivButton.value = "+/-";
                break;
            case 18:
                indivButton.textContent = "0";
                indivButton.addEventListener("click", valStore);
                indivButton.value = 0;
                break;
            case 19:
                indivButton.textContent = ".";
                indivButton.addEventListener("click", decimal);
                indivButton.value = ".";
                break;
            case 20:
                indivButton.textContent = "=";
                indivButton.addEventListener("click", eccor);
                indivButton.value = "=";
                break;



        }

        buttonContainer.appendChild(indivButton);
    }
    let numDisplay = document.querySelector(".numDisplay");
    numDisplay.textContent = "0";
}

function reset() {
    let numDisplay = document.querySelector(".numDisplay");
    let operDisplay = document.querySelector(".operDisplay");

    term1 = "";
    term2 = "";
    currOper = "";
    numDisplay.textContent = "0";
    operDisplay.textContent = "";

}

function eccor() {
    let numDisplay = document.querySelector(".numDisplay");

    if (term1 == "") { // if term1 does not exist. -> ie first ever num written
        term1 = Number(term2);
        term2 = "";
        term1Operator();

    } else if (term2 != "") {
        evalExpr();
        term2 = "";
    
    } else {
        term1Operator();
        
    }
    numDisplay.textContent = term1;
}

function term1Operator() {

    switch (currOper) {
        case "%":
            term1 = term1 / 100;
            term2 = "";
            console.log(term1);
            break;

        case "sqrt":
            term1 = Math.sqrt(term1);
            term2 = "";
            break;

        case "+/-":
            term1 = -1.0 * term1;
            term2 = "";
            break;

    }

}

function evalExpr() {

    switch (currOper) {
        case "+":
            term1 += Number(term2);
            break;

        case "-":
            term1 -= Number(term2);

            break;
        case "*":
            term1 *= Number(term2);

            break;
        case "/":
            term1 /= Number(term2);
            break;
        case "%":
        case "sqrt":
        case "+/-":
            term1Operator();
            break;
    }

}

function valStore(numValueObj) {
    let numValue = numValueObj.target.value;
    let display = document.querySelector(".numDisplay");
    display.textContent = `${term2 + numValue}`;
    term2 += numValue;
}

function operStore(operValueObj) {
    let operValue = operValueObj.target.value;
    let display = document.querySelector(".operDisplay");
    display.textContent = `${operValue}`;
    currOper = operValue;
    eccor();
}

function decimal() {
    let numDisplay = document.querySelector(".numDisplay");
    numDisplay.textContent =`${term2 + "."}`;
    term2 += ".";

    

}

initialise();