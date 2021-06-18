class Game {
    constructor() {
        this.backgroundImage
    }

    setup() {
        this.background = new Background();
        this.player = new Player();
        this.obstacle = [];
        this.coins = [];
        this.coins2 = [];
        this.coins3 = [];
        this.score = 0;
        this.life = 3;
        this.count = 0;
        // something
    }

    preload() {
        this.backgroundImage = loadImage('assets/background2.png');
        this.playerImage = loadImage('assets/player.png');
        this.obstacleImage = loadImage('assets/bug.png');
        this.coinImage = loadImage('assets/javascript.png');
        this.coin2Image = loadImage('assets/CSS.png');
        this.coin3Image = loadImage('assets/HTML.png');
    }
    
    draw() {
        clear();
        this.background.draw();
        this.player.draw();

        //bugs
        if (frameCount % 326 === 0) {
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
        if (frameCount % 479 === 0) {
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

        //coins2
        if (frameCount % 398 === 0) {
            this.coins2.push(new Coins(this.coin2Image));
            //console.log(this.coins2);
        }

        this.coins2.forEach(function (coins) {
            coins.draw();
        })

        this.coins2 = this.coins2.filter(coins => {
			if (coins.collision(this.player || (coins.x + coins.width) < 0)) {
				return false;
			} else {
				return true
			}
		})

        //coins3
        if (frameCount % 298 === 0) {
            this.coins3.push(new Coins(this.coin3Image));
            //console.log(this.coins3);
        }

        this.coins3.forEach(function (coins) {
            coins.draw();
        })

        this.coins3 = this.coins3.filter(coins => {
			if (coins.collision(this.player || (coins.x + coins.width) < 0)) {
				return false;
			} else {
				return true
			}
		})
    }

    sound() {
        let audio = new Audio("music/funny_track_with_ringtone_effects_c64_style.ogg");
        
        if ( this.count === 0) {
            console.log(this.count);
            this.count = 1;
            console.log(this.count);
            audio.play();
        } else {
            this.count = 0;
            audio.pause();
        }    
    }
}