class Obstacles{
    constructor(ctx){
        this.ctx = ctx
        this.obstaclesArray = []
        this.x = 320
        this.y = 154

        this.width = 90
        this.height = 90

        this.img = new Image()
        this.img.src="images/cute-obstacle.png"        
    }

init(){
    this.obstaclesArray = []
    this.x = 320
    this.y = 154
}

draw(){
    this.obstaclesArray.forEach((prize)=>
    {
        this.ctx.drawImage(
            this.img,
            prize[0],
            prize[1],
            this.width,
            this.height
            )
    }
    )
}
    //  this.obstaclesArray.forEach((obstacle)=>
    //  {
    //      this.ctx.fillStyle = "rgb(0,0,254)"
    //      this.ctx.fillRect(obstacle[0], obstacle[1], 30, 30)}
    //  )


createRandomObjects(frameNumber){
    if (frameNumber % 100 === 0){
    let randomPositionX = Math.floor(Math.random() * this.ctx.canvas.width)
    let randomPositionY = Math.floor(Math.random() * this.ctx.canvas.height)
    let object = [randomPositionX, randomPositionY]
        this.obstaclesArray.push(object)
    }
}
removeObjects(frameNumber){
    if (frameNumber % 200 === 0){
    this.obstaclesArray.shift()
    }
}
}