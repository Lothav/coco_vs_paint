
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var player, bull, platforms, cursors, space_bar, f, i, weapon, coco_weapon, player_body_turn = 'right';

var bull_walk_away = 0;
var bull_life = 5;


function hitBull(bull, bullet){
    bullet.kill();
    bull_life--;
    bull.frame = 4;
    if(bull_life <= 0){
        bull.frame = 5;
        bull.animations.stop();
        bull.body.velocity.x = 0;
    }
}

function gofull() {
    if (game.scale.isFullScreen) {
        game.scale.stopFullScreen();
    }else{
        game.scale.startFullScreen(false);
    }
}