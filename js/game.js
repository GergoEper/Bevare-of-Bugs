class Game {
    constructor() {
        this.backgroundImage
    }

    setup() {
        this.background = new Background();
        this.player = new Player();
        this.obstacle = []
    }

    preload() {
        this.backgroundImage = loadImage('assets/background2.png');
        this.playerImage = loadImage('../assets/player.png');
        this.obstacleImage = loadImage('../assets/bug.png');
    }
    
    draw() {
        clear();
        this.background.draw();
        this.player.draw();

        if (frameCount % 350 === 0) {
            this.obstacle.push(new Obstacle(this.obstacleImage));
            console.log(this.obstacle);
        }

        this.obstacle.forEach(function (obstacle) {
            obstacle.draw();
        })

        this.obstacle = this.obstacle.filter(obstacle => {
			if (obstacle.collision(this.player || (obstacle.x + obstacle.width) < 0)) {
				return false;
			} else {
				return true
			}
		})
    }
}