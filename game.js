let maximum = parseInt(prompt("Enter the maximum number!!"));

while (!maximum) {
    maximum = parseInt(prompt("Enter the valid number!"));
}

let number = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("enter your guess!");
let attempt = 1;

while (parseInt(guess) !== number) {
    attempt++
    if (guess === 'q')
        break;

    if (parseInt(guess) > number) {
        guess = prompt("Too high! Guess again");
    }
    else {
        guess = prompt("Too low! Guess again");
    }
}

if (guess === 'q')
    alert("You quit!");
else
    alert(`CONGRATS, ${number} it is, you got it in ${attempt} attempts`);

