class Player {
    constructor() {
        this.velocity = 0;
        this.gravity = 0.2;
        this.width = 100;
        this.height = 140;
        this.x = 0;
        this.y = height - this.height;
        
    }

    draw() {

        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y >= height - this.height) {
			this.y = height - this.height;
		}

        image(game.playerImage, this.x, this.y, this.width, this.height)
    }

    jump() {
		this.velocity = - 10;
    }
}