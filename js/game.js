class Game {
    constructor() {
        this.backgroundImage
    }

    setup() {
        this.background = new Background();
    }

    preload() {
        this.backgroundImage = loadImage('assets/background.png')
    }

    draw() {
        this.background.draw();
    }
}