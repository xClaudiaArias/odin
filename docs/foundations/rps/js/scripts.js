const player_choice = document.getElementById('player-choice')
const computer_choice = document.getElementById('computer-choice')
const player_score = document.getElementById('player-score')
const computer_score = document.getElementById('computer-score')
const choiceBtn = document.querySelectorAll(".choice-btn");
const display = document.getElementById("display");
const modal = document.getElementById("modal")
const modal_container = document.getElementById("modal-container")
const play_again_btn = document.getElementById("play-again-btn")

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

    modal_container.style.display = "none"
    play_again_btn.style.display = "none"
    choiceBtn.forEach(btn => btn.addEventListener('click', () => {
            const computerSelection = getComputerChoice()
            const humanSelection = btn.innerHTML.toLowerCase();
            console.log(humanSelection, " :humanSelection")
            playRound(humanSelection, computerSelection)
            player_score.innerHTML = "Your score: " +  humanScore
            computer_score.innerHTML = "Computer score: " +  computerScore
            
            if (humanScore === 5) {
                choiceBtn.forEach(btn => btn.style.display = "none")
                display.style.display = "none"
                computer_choice.style.display = "none"
                player_choice.style.display = "none"
                modal_container.style.display = "block"
                modal.innerHTML = "YOU WON!!!"
                humanScore = 0
                computerScore = 0

                play_again_btn.style.display = "block"
            } else if (computerScore === 5) {
                choiceBtn.forEach(btn => btn.style.display = "none")
                display.style.display = "none"
                computer_choice.style.display = "none"
                player_choice.style.display = "none"
                modal_container.style.display = "block"
                modal.innerHTML = "Computer WON!!!"
                humanScore = 0
                computerScore = 0

                play_again_btn.style.display = "block"
            } 

        }
    ))

    // modal_container.style.display = "none"



    

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

