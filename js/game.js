class Game {
    constructor() {
        this.backgroundImage
    }

    setup() {
        this.background = new Background();
        this.player = new Player();
        this.obstacle = [];
        this.coins = [];
        this.score = 0;
        this.life = 3;
    }

    preload() {
        this.backgroundImage = loadImage('assets/background2.png');
        this.playerImage = loadImage('../assets/player.png');
        this.obstacleImage = loadImage('../assets/bug.png');
        this.coinImage = loadImage('../assets/javascript.png');
    }
    
    draw() {
        clear();
        this.background.draw();
        this.player.draw();

        //bugs
        if (frameCount % 476 === 0) {
            this.obstacle.push(new Obstacle(this.obstacleImage));
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

        // coins
        if (frameCount % 279 === 0) {
            this.coins.push(new Coins(this.coinImage));
            //console.log(this.coins);
        }

        this.coins.forEach(function (coins) {
            coins.draw();
        })

        this.coins = this.coins.filter(coins => {
			if (coins.collision(this.player || (coins.x + coins.width) < 0)) {
				return false;
			} else {
				return true
			}
		})
    }
}