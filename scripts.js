document.getElementById("rockBtn").addEventListener('click', function() {calculateResults("rock", myChoice());});
document.getElementById("paperBtn").addEventListener('click', function() {calculateResults("paper", myChoice());});
document.getElementById("scissorsBtn").addEventListener('click', function() {calculateResults("scissors", myChoice())});
document.getElementById("again").addEventListener('click', function() {reset()});
document.addEventListener('keydown', function(event) {useKeyboard(event.key)})

function myChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        choice = "rock";
    }
    else if (choice === 2) {
        choice = "paper";
    }
    else {
        choice = "scissors";
    }
    document.getElementById("computerChoice").innerHTML = choice;
    return choice;
}

function calculateResults(userChoice, computerChoice) {
    document.getElementById("userChoice").innerHTML = userChoice;
    let chosens = userChoice + "-" + computerChoice;
    console.log(chosens);
    switch (chosens) {
        case ("rock-rock"):
        case ("paper-paper"):
        case ("scissors-scissors"):
            document.getElementById("winner").innerHTML = "It is a tie!";
            document.getElementById("results").style.backgroundColor = "#80cbc4"
            document.getElementById("results").style.borderColor = "#80cbc4"
            break;
        case ("rock-scissors"):
        case ("paper-rock"):
        case ("scissors-paper"):
            document.getElementById("winner").innerHTML = "You win!";
            document.getElementById("results").style.backgroundColor = "#52e383"
            document.getElementById("results").style.borderColor = "#52e383"
            break;
        case ("rock-paper"):
        case ("paper-scissors"):
        case ("scissors-rock"):
            document.getElementById("winner").innerHTML = "Computer wins!";
            document.getElementById("results").style.backgroundColor = "#c93f3f";
            document.getElementById("results").style.borderColor = "#c93f3f";
            break;
        default:
            document.getElementById("winner").innerHTML = "Something went wrong, press play again";
    }
    document.getElementById("imgContainer").style.display = "none";
    document.getElementById("results").style.display = "block";
    document.getElementById("again").style.display = "block";
}

function reset() {
    document.getElementById("results").style.display = "none";
    document.getElementById("imgContainer").style.display = "grid";
    document.getElementById("again").style.display = "none";
}

function useKeyboard(key) {
    if (key == 'r') {
        calculateResults("rock", myChoice());
    }
    else if (key == 'p') {
        calculateResults("paper", myChoice());
    }
    else if (key == 's') {
        calculateResults("scissors", myChoice());
    }
}