const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")

canvas.width = 900;
canvas.height = 550;

const background = new Background(ctx)
const prizes = new Prizes(ctx)
const obstacles = new Obstacles(ctx)
const player = new Player(ctx, prizes)

const game = new Game(ctx, player, prizes, obstacles, background)

const canvasX = canvas.getBoundingClientRect().left;
const canvasY = canvas.getBoundingClientRect().top;

const startButton =  document.getElementById("start-button")
const startPage =  document.getElementById("startPage");
const gameBoard =  document.getElementById("game");
const playAgainButton = document.getElementById("playAgain-button");

const soundBackground = new Audio("sounds/backgroundSound.wav")
const soundAbsorb = new Audio("sounds/getIitem.wav")
const soundGameOver = new Audio("sounds/gameOver.wav")




  startButton.onclick = ()=> {
    //startButton.textContent = "Play Again";
    
    startPage.classList.toggle("hidden");
    gameBoard.classList.toggle("hidden");
    canvas.focus();
    game.startGame();
  };
  
  
  playAgainButton.onclick = ()=> {
    playAgainButton.classList.toggle("hidden");
    canvas.focus();
    game.startGame();
  };
  

  this.canvas.addEventListener(
      "mousemove",
      (event)=>{
          player.x = event.clientX - canvasX - (player.width/2) - 180;
          player.y = event.clientY - canvasY - (player.height/2);
              }
          )