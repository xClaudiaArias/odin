const player_choice = document.getElementById('player-choice')
const computer_choice = document.getElementById('computer-choice')
const player_score = document.getElementById('player-score')
const computer_score = document.getElementById('computer-score')
const choiceBtn = document.querySelectorAll(".choice-btn");
const displa = document.getElementById(".display");

const getComputerChoice = () => {

    let computerChoice = Math.floor(Math.random() * 3)
    console.log(computerChoice, " :computerChoice")

    switch (computerChoice) {
        case 0:
            console.log('rock', " :computerChoice")
            return 'rock';
        case 1:
            console.log('paper', " :computerChoice")
            return 'paper';
        case 2:
            console.log('scissors', " :computerChoice")
            return 'scissors';
    }
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    const playRound = (humanChoice, computerChoice) => {

        if ((humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'paper') ) {
            computer_choice.innerHTML = "Computer's choice: " + computerChoice
            player_choice.innerHTML = "Your choice: " + humanChoice
            display.innerHTML = `You Win! ${humanChoice} beats ${computerChoice}`
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`)
            return  humanScore += 1
        } else if ((computerChoice === 'paper' && humanChoice === 'rock') || (computerChoice === 'rock' && humanChoice === 'scissors') || (computerChoice === 'scissors' && humanChoice === 'paper')) {
            computer_choice.innerHTML = "Computer's choice: " + computerChoice
            player_choice.innerHTML = "Your choice: " + humanChoice
            display.innerHTML = `You lose! ${computerChoice} beats ${humanChoice}`
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            return computerScore += 1
        } else {
            computer_choice.innerHTML = "Computer's choice: " + computerChoice
            player_choice.innerHTML = "Your choice: " + humanChoice
            display.innerHTML = 'It\'s a tie'
            console.log('It\'s a tie')
            return ''
        }
    }

    choiceBtn.forEach(btn => btn.addEventListener('click', () => {
            const computerSelection = getComputerChoice()
            const humanSelection = btn.innerHTML.toLowerCase();
            console.log(humanSelection, " :humanSelection")
            playRound(humanSelection, computerSelection)
            player_score.innerHTML = "Your score: " +  humanScore
            computer_score.innerHTML = "Computer score: " +  computerScore
        }
    ))
    

    // console.log(`SCORE ---- HUMAN: ${humanScore} COMPUTER: ${computerScore}`)
    // if (humanScore > computerScore) {
    //     alert(`Human wins!!! Human: ${humanScore} > Computer: ${computerScore}`)
    //     console.log('Human wins')
    // } else if (computerScore > humanScore) {
    //     alert(`Computer wins!!! Computer:  ${computerScore} > Human: ${humanScore}`)
    //     console.log('Computer wins')
    // } else {
    //     alert(`it\'s a tie!!! Human: ${humanScore}, Computer: ${computerScore}`)
    //     console.log('it\'s a tie')
    // }
}

// Create three buttons, one for each selection. 
// Add an event listener to the buttons that call your playRound function with the correct playerSelection every time a button is clicked. (you can keep the console.logs for this step)
playGame()

