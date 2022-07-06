// core
import Phaser from 'phaser';

export class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('background', 'src/assets/sprites/background.jpeg');
  }

  create() {
    this.scene.start('Preload');
  }
}