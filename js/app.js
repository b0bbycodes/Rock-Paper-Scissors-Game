// Rock Paper Scissors Game

// function for computer to play
const computerChoice = ["rock", "paper", "scissors"];


function getComputerChoice() {
  const randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)]
  console.log("computer select 1 selected " + randomChoice );

  return randomChoice;

  
}


// function to play a single round of rock paper scissors

let computerSelect = getComputerChoice();
console.log("computer select 2 selected " + computerSelect);

function singleRound(playerSelection, computerSelection) {
  console.log("Player selected: " + playerSelection);
  console.log("Computer select 3 selected: " + computerSelection);

  if (playerSelection === computerSelection) {
  updatePlayerScore(1)
   updateComputerScore(1)
  checkGameEnd()

   return "Draw"

  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    updatePlayerScore(1)
    checkGameEnd()

    return "Win!"

  } else {
    updateComputerScore(1)
    checkGameEnd()

    return "Lose!"    
}


}


// UI

function handleClick(playerSelection){
  const handleClickResult = singleRound(playerSelection,computerSelect);
  console.log(handleClickResult);
  return handleClickResult;


}


document.querySelector('.rock').addEventListener('click', () => handleClick("rock"))
document.querySelector('.paper').addEventListener('click',() => handleClick("paper"))
document.querySelector('.scissors').addEventListener('click', () => handleClick("scissors"))

// function to update scores
let playerScore = 0;
let computerScore = 0;

 function updatePlayerScore(scoreChange){
  playerScore += scoreChange
document.querySelector('.player-score').textContent = `score: ${playerScore}`

}
 function updateComputerScore(scoreChange){
  computerScore += scoreChange
document.querySelector('.computer-score').textContent = `score: ${computerScore}`

}


// function to show text overlay 

function showOverlay (message){
  let overLay = document.querySelector('.overlay')
  let overlayContent = document.querySelector('.overlay-content') 
  overLay.style.display = "flex"
  overlayContent.textContent = message;
}

// function to show overlay button 

function showOverlayButton(){
  let overLayButton = document.querySelector('.play-again')
  overLayButton.style.display = "flex"

  overLayButton.addEventListener("click", () =>  location.reload())
}

// function to check if game has ended

function checkGameEnd(){

  if(playerScore === 5 || computerScore === 5){
    if(playerScore > computerScore){
      showOverlay("Game Over: You win!")
      showOverlayButton()
      playWinSound()


    }else if (computerScore > playerScore){
      showOverlay("Game Over: You lose")
      showOverlayButton()
      playLoseSound()
      
  }else {
    showOverlay("Draw")
    showOverlayButton()
    playDrawSound()

  }
disableButtons();

}

}

// function to disable button after game ends

function disableButtons(){
  document.getElementsByClassName('rock')[0].disabled = true;
  document.getElementsByClassName('paper')[0].disabled = true;
  document.getElementsByClassName('scissors')[0].disabled = true;

  document.getElementsByClassName('rock')[1].disabled = true;
  document.getElementsByClassName('paper')[1].disabled = true;
  document.getElementsByClassName('scissors')[1].disabled = true;
}

// function to play sound

function playClickSound () {
  let clickSound = document.getElementById("btn-sound");
   clickSound.play();

}


function playWinSound(){
  let winSound = document.getElementById("win-sound")
  winSound.play();
}


function playLoseSound(){
  let loseSound = document.getElementById("lose-sound");
  loseSound.play();
}


function playDrawSound(){
  let drawSound = document.getElementById("draw-sound");
  drawSound.play();
}

document.querySelector('.rock').addEventListener('click', playClickSound)
document.querySelector('.paper').addEventListener('click', playClickSound)
document.querySelector('.scissors').addEventListener('click', playClickSound)

document.querySelector('.play-again').addEventListener('click', playClickSound)

// function to show computer selection

// function to reset computer selection backkround

function resetComputerBackground(){
 const computerSelections = document.querySelectorAll("#computer-btn")
 for (const selection of computerSelections){
 selection.style.backgroundColor = "";

 }
}


function showComputerSelection(computerSelect){
  resetComputerBackground()

  // computerSelect = getComputerChoice()


  if (computerSelect === "rock"){
    document.querySelector(".rock.computer-selection").style.backgroundColor = "red"

  }else  if (computerSelect === "paper"){
    document.querySelector(".paper.computer-selection").style.backgroundColor = "red"

  }else {
    document.querySelector(".scissors.computer-selection").style.backgroundColor = "red"


  }
}

document.querySelector('.rock').addEventListener('click', () => {
  // const computerChoice = computerSelect
  // // computerSelect = computerChoice;
  // console.log("computer select 4 selected " + computerSelect);
  // showComputerSelection(computerChoice)
  const playerSelection = "paper";
  const computerSelection = getComputerChoice();
  singleRound(playerSelection, computerSelection);
})
document.querySelector('.paper').addEventListener('click',() => {
  // const computerChoice = computerSelect
  // // computerSelect = computerChoice;
  // console.log("computer select 4 selected " + computerSelect);

  // showComputerSelection(computerChoice)
  const playerSelection = "paper";
  const computerSelection = getComputerChoice();
  singleRound(playerSelection, computerSelection);
})
document.querySelector('.scissors').addEventListener('click', () => {
  // const computerChoice = computerSelect
  // // computerSelect = computerChoice;
  // console.log("computer select 4 selected " + computerSelect);
  // showComputerSelection(computerChoice)
  const playerSelection = "paper";
  const computerSelection = getComputerChoice();
  singleRound(playerSelection, computerSelection);
})

// console.clear()











