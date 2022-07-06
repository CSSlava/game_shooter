// core
import Phaser from 'phaser';

export class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  create() {
    this.createBackground();
  }

  createBackground() {
    this.add.sprite(0, 0, 'background').setOrigin(0, 0);
  }
}