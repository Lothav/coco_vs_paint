function create() {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'sky');
    platforms = game.add.group();
    platforms.enableBody = true;
    for(i = 0 ; i < 2 ; i ++){
        var ground = platforms.create(i * 800, game.world.height - 64, 'ground');
        ground.scale.setTo(2, 2);
        ground.body.immovable = true;
    }

    var ledge_arr = [{x: 100, y: 400},{x: 600, y: 200},{x: game.world.width-200, y: 400},{x: game.world.width-350, y: 0}];
    for(i = 0; i< 4; i++){
        var ledge = platforms.create(ledge_arr[i].x,ledge_arr[i].y, 'ground');
        ledge.body.immovable = true;
    }

    player = game.add.sprite(32, game.world.height - 140, 'dude');
    bull = game.add.sprite(game.world.width / 2 + 100, 120, 'bull');

    game.physics.arcade.enable([player, bull]);

    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;

    bull.body.gravity.y = 300;
    bull.body.collideWorldBounds = true;

    player.animations.add('left', [0, 1], 5, true);
    player.animations.add('right', [4, 5], 5, true);

    bull.animations.add('left', [0, 1], 5, true);
    bull.animations.add('right', [2, 3], 5, true);

    /* stars = game.add.group();
     stars.enableBody = true;

     for (i = 0; i < 12; i++) {
     var star = stars.create(i * 70, 0, 'star');
     star.body.gravity.y = 300;
     star.body.bounce.y = 0.7 + Math.random() * 0.2;
     }*/

    //scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignVertically = true;
    game.scale.pageAlignHorizontally = true;

    cursors = game.input.keyboard.createCursorKeys();
    space_bar = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    f = game.input.keyboard.addKey(Phaser.KeyCode.F);

    weapon = this.add.weapon(10, 'bullet');

    coco_weapon = this.add.weapon(1000, 'coco_bullet');
    coco_weapon.fireRate = 200;
    coco_weapon.bulletSpeed = 500;
    game.input.onDown.add(gofull, this);
}
