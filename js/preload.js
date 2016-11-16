function preload() {
    game.load.image('sky', 'assets/inferno_background.jpg');
    game.load.image('bullet', 'assets/fire_shoot.png');
    game.load.image('ground', 'assets/platform.png');
    game.load.image('star', 'assets/star.png');
    game.load.image('coco_bullet', 'assets/coco_bullet.png');
    game.load.spritesheet('bull', 'assets/bull.png', 64,64);
    game.load.spritesheet('dude', 'assets/coco_walk.png', 64, 64);
    game.plugins.add( Phaser.Weapon );
    game.world.setBounds(0, 0, 1280, 600);
}