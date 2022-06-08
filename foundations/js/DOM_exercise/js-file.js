const p = document.createElement('p');
p.classList.add('content');
p.textContent = " Hey I'm red ";
p.style.color = 'red';
// document.body.appendChild(p);


const h3 = document.createElement('h3');
h3.classList.add('content');
h3.textContent = " I'm a blue h3! ";
h3.style.color = 'blue';
document.body.append(p,h3);

const div = document.createElement('div');
div.style.border = "3px solid black";
div.style.backgroundColor = 'pink'

const h1 = document.createElement('h1');
h1.textContent = "i'm in a div";
const p2 = document.createElement('p');
p2.textContent = "ME TOO!"

// const 
div.append(h1, p2);
document.body.append(div);


function alertFunction() {
    alert("YAY! YOU DID IT!");
}

btn.addEventListener('click', alertFunction);

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});