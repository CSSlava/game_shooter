// core
import Phaser from 'phaser';

export class PreloadScene extends Phaser.Scene {
  constructor() {
    super('Preload');
  }

  preload() {

  }

  create() {
    this.scene.start('Start');
  }
}