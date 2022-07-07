// core
import Phaser from 'phaser';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {
    this.load.atlas('helicopter', 'src/assets/sprites/helicopter.png', 'src/assets/sprites/helicopter.json');
    this.load.atlas('enemy', 'src/assets/sprites/enemy.png', 'src/assets/sprites/enemy.json');
  }

  create() {
    this.scene.start('Start');
  }
}