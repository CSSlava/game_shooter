// core
import Phaser from 'phaser';

// scenes
import {BootScene} from './scenes/BootScene';
import {PreloadScene} from './scenes/PreloadScene';
import {StartScene} from './scenes/StartScene';
import {GameScene} from './scenes/GameScene';


const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: [BootScene, PreloadScene, StartScene, GameScene],
};

export default config;