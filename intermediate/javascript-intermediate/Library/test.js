const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

console.log(admitted);
console.log(refused);
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';
console.log(typeof(refused.textContent));
for (let i = 0; i < people.length; i++) {
    if (people[i] === 'Phil' || people[i] === "Lola") {
        refused.textContent += ", " + people[i];
    } else {
        admitted.textContent += ", " + people[i];
    }
}


console.log(refused);
console.log(admitted);