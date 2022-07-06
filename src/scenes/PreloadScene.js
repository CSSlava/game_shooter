// core
import Phaser from 'phaser';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    this.load.atlas('helicopter', 'src/assets/sprites/helicopter.png', 'src/assets/sprites/helicopter.json');
  }

  create() {
    this.scene.start('Start');
  }
}