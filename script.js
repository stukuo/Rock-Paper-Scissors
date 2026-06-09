let robotScore = 0;
let playerScore = 0;

const plrScoreLabel = document.querySelector("#player-score");
const rbtScoreLabel = document.querySelector("#robot-score");
const plrDisplay = document.querySelector("#player-display");
const rbtDisplay = document.querySelector("#robot-display");

const resultDisplay = document.querySelector("#result");
const playBtn = document.querySelector("#play");
const overalLabel = document.querySelector("#overal");

const buttons = [
    { element: document.querySelector("#rock"), value: "rock" },
    { element: document.querySelector("#paper"), value: "paper" },
    { element: document.querySelector("#scissors"), value: "scissors" }
]

async function playGame() {
    resultDisplay.setAttribute("style", "display: none;")
    robotScore = 0;
    playerScore = 0;
    updateUI("none","none")

    for (let i = 0; i < 5; i++) {
        let playerChoise = await getPlayerChoise()
        let robotChoise = getRobotChoise()
        playRound(playerChoise, robotChoise);
        updateUI(playerChoise, robotChoise);
    }

    console.log("==== OVERAL GAME ====")
    if (playerScore > robotScore) {
        console.log("PLAYER WIN!")
        overalLabel.textContent = "PLAYER WIN!";
    } else if (playerScore < robotScore) {
        console.log("ROBOT WIN!")
        overalLabel.textContent = "ROBOT WIN!"
    } else {
        console.log("DRAW!!!!")
        overalLabel.textContent = "DRAW!!!!";
    }

    resultDisplay.setAttribute("style", "display: block;");
}

playBtn.addEventListener("click", () => playGame());

playGame()

function updateUI(playerChoise, robotChoise) {
    plrScoreLabel.textContent = "score : " + playerScore;
    rbtScoreLabel.textContent = "score : " + robotScore;

    plrDisplay.innerHTML = playerChoise.toUpperCase();
    rbtDisplay.innerHTML = robotChoise.toUpperCase();
}

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

    console.log(playerChoise)
    console.log('Player Choose : ' + playerChoise);
    console.log('Robot Choose : ' + robotChoise)
    console.log("Player Score : " + playerScore);
    console.log("Robot Score : " + robotScore)
    console.log("=================================")
}

async function getPlayerChoise() {
    const choise = await waitForAnyButton(buttons);
    return choise;
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

function waitForAnyButton(buttons) {
    // Store Listener To Remove it Later
    const listeners = [];

    const promises = buttons.map(({ element, value }) => {
        return new Promise((resolve) => {
            const listener = () => {
                // Remove All Listener
                listeners.forEach(({ el, fn }) => {
                    el.removeEventListener("click", fn);
                });
                resolve(value);
            };

            listeners.push({ el: element, fn: listener });
            element.addEventListener("click", listener);
        });
    });

    return Promise.race(promises);
}