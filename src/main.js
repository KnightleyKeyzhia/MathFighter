import Phaser, { Scenes } from 'phaser'
import MathFighterScenes from './scenes/MathFigtherScenes'
import GameOverScene from './scenes/GameOverScene';
scene: [MathFighterScenes, GameOverScene]

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 480,
	height: 640,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 },
		},
	},
	scene: [MathFighterScenes], 
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH
	},
}

export default new Phaser.Game(config)
