document.querySelector(".start-btn").addEventListener('click',() => {
    window.location.href = "../html/main.html"
})

// click sound function

function playClickSound () {
    let clickSound = document.getElementById("btn-sound");
     clickSound.play();  
  
  } 

document.querySelector('.start-btn').addEventListener('click', () => {
  console.log("button clicked")

    playClickSound
}
)
