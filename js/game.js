class Game{
    constructor(ctx, player, prize, obstacles, background){
        this.ctx = ctx;
        this.player = player;
        this.prizes = prize;
        this.obstacles = obstacles;
        this.background = background
        this.frameNumber = 0;
        this.score = this.player.score;
        this.playAgainButton = document.getElementById("playAgain-button");


    
    //----------- Listener para las teclas de flecha---------------

    // document.addEventListener('keydown', (e) => {
    // switch (e.keyCode) {
    //          case 38: // up arrow
    //          this.player.speedY -= 8;
    //          break;
    //          case 40: // down arrow
    //          this.player.speedY += 8;
    //          break;
    //          case 37: // left arrow
    //          this.player.speedX -= 8;
    //          break;
    //          case 39: // right arrow
    //          this.player.speedX += 8;
    //          break;
    //     }
    //  })
        
}

startGame(){
    this.init()
    this.start()
}

init(){
    this.frameNumber = 0;
    this.score = this.player.score;
    this.player.init()
    this.background.init()
    this.prizes.init()
    this.obstacles.init()
    this.ctx.canvas.style.cursor = "none"
}

start(){
    soundBackground.play()
    this.prizes.removePrizes(this.frameNumber)
    this.obstacles.removeObjects(this.frameNumber)
    this.prizes.createRandomObjects(this.frameNumber)
    this.obstacles.createRandomObjects(this.frameNumber)
    this.player.checkCollisionPrize()
   // this.move()
    this.draw()
    if (this.player.checkCollisionDead()) this.gameOver();
    
    //this.player.isOutOfCanvas()
    if (this.frameNumber !== null) {
        this.frameNumber = requestAnimationFrame(this.start.bind(this));
    }
        
}
    
draw(){
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.background.draw()
    this.player.draw()
    this.prizes.draw(this.frameNumber)
    this.obstacles.draw(this.frameNumber)
    this.drawScore()
}

// move(){
   
// }

drawScore(){
    this.ctx.save();
    this.ctx.fillStyle = "black";
    this.ctx.font = " bold 24px cutefont";
    this.ctx.fillText(`Score: ${this.player.score} pts`, 20, 40);
    this.ctx.restore();
}

stop(){
    cancelAnimationFrame(this.frameNumber) 
    this.frameNumber = null
    soundBackground.pause()
}

gameOver() {
    this.stop();
    soundGameOver.play()
    this.ctx.save();
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.font = "normal 62px cutefont";
     this.ctx.fillText(
       `Well done!`,
       this.ctx.canvas.width / 2,
       this.ctx.canvas.height / 2,
     )
    this.ctx.font = "normal 25px sans-serif"
    this.ctx.fillText(
      `You have abducted ${this.player.score} babies`,
      this.ctx.canvas.width / 2,
      (this.ctx.canvas.height / 2) + 70,
    )

    this.ctx.restore();
    this.ctx.canvas.style.cursor = "auto"
    this.playAgainButton.classList.toggle("hidden");
    
  }

}


