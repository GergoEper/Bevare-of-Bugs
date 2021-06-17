const game = new Game();

function preload() {
    game.preload();
}

function setup() {
    createCanvas(899, 522);
    game.setup();
}

function draw() {
    game.draw();

}

function keyPressed() {
    if (keyCode === 32) {
        game.player.jump();
    }
    if (keyCode === LEFT_ARROW) {
        game.player.backwards();
    }
    if (keyCode === RIGHT_ARROW) {
        game.player.forward();
    }
}