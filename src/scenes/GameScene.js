// core
import Phaser from 'phaser';

// prefabs
import {Player} from '/src/prefabs/Player';

// config
import config from '/src/gameConfig';


export class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.createBackground();

    this.player = new Player(this);
  }

  update() {
    this.player.move();
    this.background.tilePositionX += 0.5;
  }

  createBackground() {
    this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0, 0);
  }
}