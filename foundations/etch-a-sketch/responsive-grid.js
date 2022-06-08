let outerBox = document.createElement("div");
outerBox.classList.add("outerBox");
outerBox.style.height = "80%";
outerBox.style.width = "80%";
outerBox.style.minWidth = "500px";
let sideLen = 16;

for (i = 0; i < sideLen ; i++) {
    let row = document.createElement("div");
    row.classList.add("row" + i);
    row.style.display = 'flex';
    row.style.flexDirection = 'row';
    for (j = 0; j < sideLen ; j++) {
        let innerSquare = document.createElement("div");
        innerSquare.classList.add("innerSquareDiv"+j);
        innerSquare.style.border = "1px solid black";
        innerSquare.style.boxSizing = "border-box";
        innerSquare.style.width = 100/sideLen + 'vw';
        innerSquare.style.aspectRatio = '1';
        row.appendChild(innerSquare);

    }
    outerBox.appendChild(row);
}

document.body.appendChild(outerBox);
