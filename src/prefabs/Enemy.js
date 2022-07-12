// core
import Phaser from 'phaser';

import config from "../gameConfig";

export class Enemy extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    this.init();
  }

  static generate(scene) {
    const x = config.width + 200;
    const y = Phaser.Math.Between(100, config.height - 100);
    const id = Phaser.Math.Between(1, 4);
    const frame = `enemy_${id}`;
    return new Enemy(scene, x, y, 'enemy', frame);
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