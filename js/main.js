const game = new Game();
//let audio = new Audio("music/funny_track_with_ringtone_effects_c64_style.ogg")

function preload() {
    game.preload();
    //audio.play();
}

function setup() {
    //window.alert('Start')
    createCanvas(899, 522);
    game.setup();
    button = createButton('Sound On');
    button.position(0, 0);
    button.mousePressed(game.sound);
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