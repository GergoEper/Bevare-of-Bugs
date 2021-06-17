class Obstacle {
    constructor(image) {
        this.image = image;
        this.x = width
        this.y = (Math.random() * height) / 1.5;
		this.width = 50;
		this.height = 50;
    }

    collision(playerPosition) {
		const obstacleX = this.x + this.width / 2;
		const obstacleY = this.y + this.height / 2;
		
		const playerX = playerPosition.x + playerPosition.width / 2;
		const playerY = playerPosition.y + playerPosition.height / 2;
		
		if (dist(obstacleX, obstacleY, playerX, playerY) > 45) {
			return false;
		} else {
            game.life --
            document.querySelector('.life').innerText = game.life
            if (game.life <= 0) {
                setTimeout(() => {
                    alert('Bugs everywhere!!! google it and try again!')
                    document.location.reload();
                }, 300);
                
               // noLoop();
                
            }
			return true	
		}

	}

    draw() {
		this.x = this.x - 5;
		image(this.image, this.x, this.y, this.width, this.height);
	}
}