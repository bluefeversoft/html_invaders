const ImageFiles = [
    'playerShip1_blue',
    'Lasers/laserBlue02_s'
];

const GameSettings = {
    keyPress: {
        left: 37,
        right: 39,
        up: 38,
        down: 40,
        space: 32
    },
    targetFPS: 1000 / 60,

    bulletSpeed: 700 / 1000,
    bulletLife: 4000,
    bulletFireRate: 2000,

    playAreaWidth: 720,
    playAreaHeight: 576,
    playAreaDiv: '#playArea',

    playerDivName: 'playerSprite',
    playerStart: {
        x: 360,
        y: 440
    },
    playerStartLives: 3,
    playerState: {
        ok: 0,
        dead: 1,
        hitFlashing: 2
    },
    playerMoveStep: 8
};

let GameManager = {
    assets : {},
    player: undefined,
    bullets: undefined,
    lastUpdated: Date.now(),
    elapsedTime: 0,
    fps: 0
};






































