// program where the user has to guess a number generated by a program

function guessNumber() {

    // generating a random integer from 1 to 10
    const random = Math.floor(Math.random() * 10) + 1;
    console.log(random)

    // take input from the user
    let number = parseInt(prompt('Guess a number from 1 to 10: '));

    // take the input until the guess is correct
    let num = 0;
    while (number !== random && num < 4) {
        //  !== will help in continuing the while loop until number is not equal to(!==) random 
        number = parseInt(prompt('Guess a number from 1 to 10: '));
        // the num will be increased by 1 with every wrong attempt
        num += 1;
        console.log(num)
        if (num == 4) {
            window.alert("your tries are over")
            // break the loop when num == 4
            break
        }
    }

    // check if the guess is correct
    if (number == random) {
        window.alert(`You guessed the correct number in ${num} attempts! good luck`);
    } 

}

// call the function
guessNumber();