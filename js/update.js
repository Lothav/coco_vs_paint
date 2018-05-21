function update() {

    game.physics.arcade.collide( [bull, player], platforms );
    //game.physics.arcade.overlap(player, stars, collectStar, null, this);
    game.physics.arcade.overlap( player, bull_weapon.bullets, function(){
        bull_life = 10;
        game.state.restart();
    });
    game.physics.arcade.overlap( bull, coco_weapon.bullets, hitBull );
    player.body.velocity.x = 0;

    /*  Bull update  */
    if( !bull_walk_away && bull_life > 0 ) {
        if( bull.x < player.x ) {
            bull.body.velocity.x = +100;
            bull_body_turn = 'right';
            bull.animations.play('right');
        } else {
            bull.body.velocity.x = -100;
            bull_body_turn = 'left';
            bull.animations.play('left');
        }
        if( bull.y > player.y && bull.body.touching.down ) {
            bull.body.velocity.y = -350;
        }

    }

    if(bull_body_turn == "right"){
        bull_weapon.fireFrom.centerOn( bull.x+50, bull.y+20 );
    } else {
        bull_weapon.fireFrom.centerOn(bull.x + 10, bull.y + 20);
    }
    bull_weapon.fireRate = Math.round(Math.random()*1200)+500;
    console.log(bull_weapon.fireRate);
    bull_weapon.fireAngle = (Math.atan2(player.y - bull_weapon.y , player.x - bull_weapon.x)) * (180/Math.PI);
    if(bull_alive) {
        bull_weapon.fire();
    }

    bull_walk_away = bull_walk_away == 80 ? 0 : bull_walk_away + 1;


    /*  Player update  */
    if( f.isDown ){
        /* is shooting */
        if( cursors.left.isDown ) player_body_turn = 'left';
        if( cursors.right.isDown ) player_body_turn = 'right';

        if( player_body_turn == 'right' ){
            coco_weapon.fireAngle = 0;
            coco_weapon.fireFrom.centerOn(player.x+60, player.y + 30);
            player.frame = 6;
        } else {
            player.frame = 7;
            coco_weapon.fireFrom.centerOn(player.x, player.y +30 );
            coco_weapon.fireAngle = 180;
        }
        coco_weapon.fire();
    } else if ( cursors.left.isDown ) {
        /* walking to left */
        player.body.velocity.x = -150;
        game.camera.x -= 1;
        if ( player.body.touching.down ){
            player.animations.play('left');
        } else {
            player.frame = 0;
        }
        player_body_turn = 'left';
    } else if ( cursors.right.isDown ) {
        /* walking to right */
        player.body.velocity.x = 150;
        game.camera.x += 1;
        if( player.body.touching.down ){
            player.animations.play('right');
        } else {
            player.frame = 5;
        }
        player_body_turn = 'right';
    } else {
        /* player stop */
        player.frame = player_body_turn == 'right' ?  3  : 2;
        player.animations.stop();
    }
    if (space_bar.isDown && player.body.touching.down) {
        /* player Jump */
        player.body.velocity.y = -350;
    }
}