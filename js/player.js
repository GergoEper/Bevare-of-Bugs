class Player {
    constructor() {
        this.velocity = 0;
        this.gravity = 0.2;
        this.width = 100;
        this.height = 140;
        this.x = 20;
        this.y = height - (this.height + 70);
        
    }

    draw() {

        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y >= height - (this.height + 70)) {
			this.y = height - (this.height + 70);
		}

        image(game.playerImage, this.x, this.y, this.width, this.height)
    }

    jump() {
		this.velocity = - 10;
    }

    forward() {
        this.x = this.x + 30;
        
    }

    backwards() {
        this.x = this.x - 30;
        if (this.x <= 0) {
            return this.x
        }
    }
}