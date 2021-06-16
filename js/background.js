class Background {
   constructor() {
    this.x1 = 0;
    this.y = 0;  
    this.x2 = width;
   }

    draw() {
        image(game.backgroundImage, this.x1, this.y, width, height)
        image(game.backgroundImage, this.x2, this.y, width, height)
        this.x1 -= 1.5
        this.x2 -= 1.5

        if (this.x1 < - width){
            this.x1 = width;
          }
          if (this.x2 < - width){
            this.x2 = width;
          }
    
    }
}