let currColour = 'white'
let isMouseDown = 0;
let chaseTheRainBow = false;
let currsize = 16;

document.body.onmousedown = function () {

    isMouseDown = 1;
    // console.log(isMouseDown);
}
document.body.onmouseup = function () {

    isMouseDown = 0;
    // console.log(isMouseDown);

}

document.body.ondrag = function () {
    isMouseDown = 0;
}

function initialiseBoard(size) {

    let sketchBoard = document.querySelector(".board");
    let existingSquares = document.querySelectorAll(".innerSquare");
    existingSquares.forEach(curr => { curr.remove() });
    currsize = size;
    sketchBoard.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketchBoard.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        let innerSquare = document.createElement("div");
        innerSquare.classList.add("innerSquare");
        innerSquare.style.border = "1px solid black";
        innerSquare.addEventListener("mouseover", draw);
        sketchBoard.appendChild(innerSquare);
    }
}

function changeBoardSize(newSize) {
    if (newSize >= 0 && newSize <= 100) {
        initialiseBoard(newSize);
    }
}

function reset() {
    let existingSquares = document.querySelectorAll(".innerSquare");
    existingSquares.forEach(curr => { curr.remove() });
    let sketchBoard = document.querySelector(".board");
    sketchBoard.style.gridTemplateColumns = `repeat(${currsize}, 1fr)`;
    sketchBoard.style.gridTemplateRows = `repeat(${currsize}, 1fr)`;

    for (let i = 0; i < currsize * currsize; i++) {
        let innerSquare = document.createElement("div");
        innerSquare.classList.add("innerSquare");
        innerSquare.style.border = "1px solid black";
        innerSquare.addEventListener("mouseover", draw);
        sketchBoard.appendChild(innerSquare);
    }
}


function draw(evt) {
    console.log(chaseTheRainBow);
    if (evt.button == 0 && isMouseDown == 1) {
        
        if (chaseTheRainBow) {
            evt.target.style.backgroundColor = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`;
        } else {
            evt.target.style.backgroundColor = currColour;
        }
    }
}

function changeColour(colour) {
    chaseTheRainBow = false;
    if (colour == "rainbow") {
        chaseTheRainBow = true;
        
    } else if (colour == "random") {
        currColour = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255})`
        console.log(currColour);
    } else {
        currColour = colour;
    }
}

initialiseBoard(16);