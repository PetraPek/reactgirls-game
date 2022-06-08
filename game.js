//console.log("Hello world")

function generateRandomNumber (minimum, maximum) {
    let result = Math.floor(Math.random() * (maximum - minimum +1)) + minimum;
    return result;
}

window.addEventListener("load" , function () {
    let randomNumber = generateRandomNumber(0, 100);
    console.log("random number", randomNumber);

    let guessCounter = 0

    let guessForm = document.querySelector(".guess-form"); //odkazuje na css tridu guess button
    
    let inputNumber = document.querySelector(".input-number");

    let titleElement = document.querySelector(".title");

    
    let playAgainButton = document.querySelector(".play-again-button")

    playAgainButton.addEventListener("click" , function() {
        document.location.reload()
    })
    
    guessForm.addEventListener("submit" , function (event) {
        event.preventDefault() //tímto zastavíme proces, že se nám nebude dělat refresh
        let userGuess = Number(inputNumber.value);
        console.log("uzivatel hadal cislo" , userGuess);

    guessCounter = guessCounter + 1

    if (userGuess === randomNumber) {
        titleElement.innerHTML = "You guessed it on " + guessCounter + " tries"
        document.body.className = "winner" //neni v HTML ale je tady napsany
    }   else if (userGuess > randomNumber) {
        titleElement.innerHTML = "Try again, I'm thinking of a smaller number"
    }   else if (userGuess < randomNumber) {
        titleElement.innerHTML = "Try again, I'm thinking of a bigger number"
    }

});


})


