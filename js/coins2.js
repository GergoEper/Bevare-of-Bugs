class Coins2 {
    constructor(image) {
        this.image = image;
        this.x = width
        this.y = (Math.random() * height) / 1.5;
		this.width = 50;
		this.height = 50; 
    }

    collision(playerPosition) {
		const coinX = this.x + this.width / 2;
		const coinY = this.y + this.height / 2;
		
		const playerX = playerPosition.x + playerPosition.width / 2;
		const playerY = playerPosition.y + playerPosition.height / 2;
		
		if (dist(coinX, coinY, playerX, playerY) > 45) {
			return false;
		} else {
            //console.log(game.score)
            game.score ++
            document.querySelector('.score').innerText = game.score
            //console.log(game.score)
            //console.log('something is happening')
            if (game.score >= 10) {
                alert('You win!')
                document.location.reload();
            }
			return true;
		}

	}

    draw() {
		this.x = this.x -2;
		image(this.image, this.x, this.y, this.width, this.height);
	}
}