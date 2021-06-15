class Game {
    constructor() {
        this.backgroundImage
    }

    setup() {
        this.background = new Background();
        this.player = new Player();
    }

    preload() {
        this.backgroundImage = loadImage('assets/background.png')
        this.playerImage = loadImage('../assets/player.png')
    }
    
    draw() {
        clear();
        this.background.draw();
        this.player.draw();
    }
}