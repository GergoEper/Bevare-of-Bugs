class Obstacle {
    constructor(image) {
        this.image = image;
        this.x = width
        this.y = (Math.random() * height) / 1.5;
		this.width = 50;
		this.height = 50;
        this.score = document.querySelector('h2').innerText
    }

    collision(playerPosition) {
		//console.log('collision', playerPosition);
		// get the middle of the obstacle
		const obstacleX = this.x + this.width / 2;
		const obstacleY = this.y + this.height / 2;
		// get the middle of the player
		const playerX = playerPosition.x + playerPosition.width / 2;
		const playerY = playerPosition.y + playerPosition.height / 2;
		// measure the distance between obstacle and player using the dist() function
		if (dist(obstacleX, obstacleY, playerX, playerY) > 45) {
			return false;
		} else {
			return true
			
		}

	}

    draw() {
		this.x-- ;
		image(this.image, this.x, this.y, this.width, this.height);
	}
}