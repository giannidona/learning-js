const insertNumber = parseInt(prompt("Enter a number:"));
const convertNumber = Number(insertNumber);
const randomNumber = Math.floor(Math.random() * 10);

if (convertNumber === randomNumber) {
    alert("You won");
} else {
    alert("You lose");
}

console.log(randomNumber, insertNumber, typeof(convertNumber));