// core
import Phaser from 'phaser';

// config
import config from '../gameConfig';


export class Player extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, 120, config.height / 2, 'helicopter', 'hel_1');
    this.init();
  }

  init() {
    // add atlas
    this.scene.add.existing(this).setScale(0.5);
    // add physics
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.velocity = 500;
  }

  move() {
    this.body.setVelocity(0);

    if (this.scene.cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity);
    } else if (this.scene.cursors.right.isDown) {
      this.body.setVelocityX(this.velocity);
    }

    if (this.scene.cursors.up.isDown) {
      this.body.setVelocityY(-this.velocity);
    } else if (this.scene.cursors.down.isDown) {
      this.body.setVelocityY(this.velocity);
    }
  }
}