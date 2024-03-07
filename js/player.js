class Player{
    constructor(ctx, prizes){
        this.ctx = ctx
      
        this.width = 100
        this.height = 100
        this.prizes = prizes
        this.obstacles = obstacles
        this.score = 0

        this.x = 100
        this.y = 100

        this.img = new Image()
        this.img.src="images/cute-alien.png"

    }

init(){
    this.score = 0
    this.x = 100
    this.y = 100

}

draw(){
    this.ctx.drawImage(
    this.img,
    this.x,
    this.y,
    this.width,
    this.height
    )
}

// move(){
    
//     // player.x = event.clientX - canvasX - (player.width/2) - 180;
//     // player.y = event.clientY - canvasY - (player.height/2);
//     //this.isOutOfCanvas()
// }


//  isOutOfCanvas(){
//      if(this.x > this.ctx.canvas.width){
//          this.x = 0;
//          this.speedX = 0
//      } else if(this.x < 0){
//          this.x = this.ctx.canvas.width - this.width;
//          this.speedX = this.ctx.canvas.width - this.width
//      } else if (this.y > this.ctx.canvas.height){
//           this.y = 0;
//           this.speedY = 0
//      } else if (this.y < 0){
//          this.y = this.ctx.canvas.height - this.height;
//          this.speedY = this.ctx.canvas.height - this.height
//      }
//  }

checkCollisionDead(){
    let playerCheck = this.ctx.getImageData(this.x, this.y,  this.width, this.height)
    
     for(let i = 0; i < playerCheck.data.length; i ++){
        if(playerCheck.data[i] === 166 && playerCheck.data[i+1] === 178 && playerCheck.data[i+2] === 110 || playerCheck.data[i] === 247 && playerCheck.data[i+1] === 202 && playerCheck.data[i+2] === 110) {
            return true
        }
     }
     return false
}

checkCollisionPrize(){
    let playerCheck = this.ctx.getImageData(this.x, this.y,  this.width, this.height)
        this.prizes.prizesArray.forEach((element, index) => {
            let distanceX = (element[0]) - (this.x)
            let distanceY = (element[1]) - (this.y)

        if((distanceX < 55 && distanceX > -55) && (distanceY < 55 && distanceY > -55) ) {
            this.prizes.prizesArray.splice(index, 1)
            this.score += 1
            soundAbsorb.play()
        } 
    });
}
// checkCollisionScoreUp(){
//     //let score = 0
//     let playerCheck = this.ctx.getImageData(this.x, this.y,  this.width, this.height)
//     this.prizes.prizesArray.forEach((element, index) => {
//         let distanceX = (element[0]) - (this.x)
//         let distanceY = (element[1]) - (this.y)
        
//          if((distanceX < 40 && distanceX > -40) && (distanceY < 40 && distanceY > -40) ) {
             
//          } 
//         });
//         return score
//  }
 //      let playerCheck = this.ctx.getImageData(this.x, this.y,  this.width, this.height)
//      for(let i = 0; i < playerCheck.data.length; i ++){
//        if(playerCheck.data[i] === 251) 
//            console.log("SCORE"); 
//            return + 1
//      } return 0
//  }


}




