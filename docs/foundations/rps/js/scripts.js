// console.log("Hello World")
const playBtn = document.getElementById('play-btn')

const getComputerChoice = () => {

    let computerChoice = Math.floor(Math.random() * 3)
    console.log(computerChoice)

    switch (computerChoice) {
        case 0:
            console.log('rock')
            return 'rock';
            break;
        case 1:
            console.log('paper')
            return 'paper';
            break;
        case 2:
            console.log('scissors')
            return 'scissors';
            break;
    }
}

const getHumanChoice = () => {
    let humanChoice = prompt("rock, paper or scissors?")
    return humanChoice.toLowerCase()
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {
        humanChoice = getHumanChoice()
        computerChoice = getComputerChoice()

        if ((humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper') ) {
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            return  humanScore += 1
        } else if ((computerChoice === 'paper' && humanChoice === 'rock') || (computerChoice === 'rock' && humanChoice === 'scissors') || (computerChoice === 'scissors' && humanChoice === 'paper')) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            return computerScore += 1
        } else {
            console.log('It\'s a tie')
            return ''
        }
    }

    const humanSelection = getHumanChoice()
    const computerSelection = getComputerChoice()

    playRound(humanSelection, computerSelection)
    playRound(humanSelection, computerSelection)
    playRound(humanSelection, computerSelection)
    playRound(humanSelection, computerSelection)
    playRound(humanSelection, computerSelection)


    console.log(`SCORE ---- HUMAN: ${humanScore} COMPUTER: ${computerScore}`)
    if (humanScore > computerScore) {
        alert(`Human wins!!! Human: ${humanScore} > Computer: ${computerScore}`)
        console.log('Human wins')
    } else if (computerScore > humanScore) {
        alert(`Computer wins!!! Computer:  ${computerScore} > Human: ${humanScore}`)
        console.log('Computer wins')
    } else {
        alert(`it\'s a tie!!! Human: ${humanScore}, Computer: ${computerScore}`)
        console.log('it\'s a tie')
    }
}

playBtn.addEventListener('click', () => {
    playGame()
})


