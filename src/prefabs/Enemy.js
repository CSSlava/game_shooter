// core
import Phaser from 'phaser';

import config from "../gameConfig";

export class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene) {
    super(scene, config.width - 150, config.height / 3, 'enemy', 'enemy_1');
    this.init();
  }

  init() {
    // add atlas
    this.scene.add.existing(this).setScale(0.4);
    // add physics
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.velocity = -100;
  }
  move() {
    this.body.setVelocityX(this.velocity);
  }
}