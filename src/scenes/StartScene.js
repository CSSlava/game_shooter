// core
import Phaser from 'phaser';

// config
import config from '../gameConfig';

export class StartScene extends Phaser.Scene {
  constructor() {
    super('Start');
  }

  create() {
    this.createBackground();
    this.createText();
    this.setEvents();
  }

  createBackground() {
    this.add.sprite(0, 0, 'background').setOrigin(0, 0);
  }

  createText() {
    this.add.text(config.width / 2, 500, 'Tap to play', {
      font: '40px',
      fill: '#fff',
    }).setOrigin(0.5);
  }

  setEvents() {
    this.input.on('pointerdown', () => {
      this.scene.start('Game');
    })
  }
}