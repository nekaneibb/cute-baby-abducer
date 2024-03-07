

class Prizes{
    constructor(ctx){
        this.ctx = ctx
        this.prizesArray = []
        this.x = 800
        this.y = 200

        this.width = 60
        this.height = 60

        this.img = new Image()
        this.img.src="images/baby-prize.png"
    }

init(){
    this.prizesArray = []
    this.x = 800
    this.y = 200
}

draw(frameNumber){
    this.prizesArray.forEach((prize)=>
    {
        this.ctx.drawImage(
            this.img,
            prize[0],
            prize[1],
            this.width,
            this.height
            )
        // this.ctx.fillStyle = "rgb(251,0,0)"
        // this.ctx.fillRect(prize[0], prize[1], 40, 40)
    }
    )
}

createRandomObjects(frameNumber){
    if (frameNumber % 80 === 0){
    let randomPositionX = Math.floor(Math.random() * this.ctx.canvas.width)
    let randomPositionY = Math.floor(Math.random() * this.ctx.canvas.height)
    let object = [randomPositionX, randomPositionY]
        this.prizesArray.push(object)
    }
}

removePrizes(frameNumber){
    if (frameNumber % 180 === 0){
    this.prizesArray.shift()
    }
}

}





