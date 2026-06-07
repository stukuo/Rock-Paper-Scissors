let robotScore = 0;
let playerScore = 0;

function playGame() {
    robotScore = 0;
    playerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerChoise = getPlayerChoise()
        let robotChoise = getRobotChoise()
        playRound(playerChoise,robotChoise);
    }

    console.log("==== OVERAL GAME ====")
    if (playerScore > robotScore){
        console.log("PLAYER WIN!")
    } else if (playerScore < robotScore) {
        console.log("ROBOT WIN!")
    } else{
        console.log("DRAW!!!!")
    }
}

// playGame()

function playRound(playerChoise, robotChoise) {
    if (playerChoise == 'rock') {
        if (robotChoise == 'rock') {
            console.log('draw');
        } else if (robotChoise == 'paper') {
            console.log('robot win!');
            robotScore += 1;
        } else if (robotChoise == 'scissors') {
            console.log('human win!');
            playerScore += 1;
        }
    } else if (playerChoise == 'paper') {
        if (robotChoise == 'paper') {
            console.log('draw');
        } else if (robotChoise == 'scissors') {
            console.log('robot win!');
            robotScore += 1;
        } else if (robotChoise == 'rock') {
            console.log('human win!');
            playerScore += 1;
        }
    } else if (playerChoise == 'scissors') {
        if (robotChoise == 'scissors') {
            console.log('draw');
        } else if (robotChoise == 'rock') {
            console.log('robot win!');
            robotScore += 1;
        } else if (robotChoise == 'paper') {
            console.log('human win!');
            playerScore += 1;
        }
    }

    console.log('Player Choose : ' + playerChoise);
    console.log('Robot Choose : ' + robotChoise)
    console.log("Player Score : " + playerScore);
    console.log("Robot Score : " + robotScore)
    console.log("=================================")
}

function getPlayerChoise() {
    do {
        let input = prompt("Input Rock | Paper | Scissors").toLocaleLowerCase();
        if (input == 'rock' || input == 'paper' || input == 'scissors') {
            return input;
        } else {
            console.warn('Invalid Input')
        }
    } while (true);
}

function getRobotChoise() {
    let input = Math.round(Math.random() * 2);

    switch (input) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;

        default:
            return 'rock';
            break;
    }
}

