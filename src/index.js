import Phaser from 'phaser';
import logoImg from './assets/logo.png';

class MyGame extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('logo', logoImg);
  }

  create() {

  }
}

const config = {};

const game = new Phaser.Game(config);
