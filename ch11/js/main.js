
function tick() {

    let now = Date.now();
    let dt = now - GameManager.lastUpdated;
    GameManager.lastUpdated = now;
    GameManager.fps = parseInt(1000 / dt);

    $('#divFPS').text('FPS:' + GameManager.fps);

    GameManager.bullets.update(dt);
    GameManager.enemies.update(dt);

    if(GameManager.enemies.gameOver == true) {
        console.log('game over');
        showGameOver();
    } else {
        setTimeout(tick, GameSettings.targetFPS);
    }

}

function showGameOver() {
    GameManager.phase = GameSettings.gameOver;

    writeMessage('Game Over');
    setTimeout(function() { appendMessage('Press Space To Reset'); }, 
            GameSettings.pressSpaceDelay);

}

function endCountDown() {
    clearMessages();
    GameManager.phase = GameSettings.gamePhase.playing;
    GameManager.lastUpdated = Date.now();
    setTimeout(tick, GameSettings.targetFPS);
}

function runCountDown() {
    GameManager.phase = GameSettings.gamePhase.countdownToStart;
    writeMessage(3);
    for (let i = 0; i < GameSettings.countDownValues.length; ++i) {
        setTimeout(writeMessage, GameSettings.countdownGap * (i + 1), 
            GameSettings.countDownValues[i]);
    }
    setTimeout(endCountDown, 
        (GameSettings.countDownValues.length + 1) * GameSettings.countdownGap);
}

function writeMessage(text) {
    clearMessages();
    appendMessage(text);
}

function appendMessage(text) {
    $('#messageContainer').append('<div class="message">' + text + '</div>');
}

function clearMessages() {
    $('#messageContainer').empty();
}

function resetBullets() {
    if (GameManager.bullets != undefined) {
        GameManager.bullets.reset();
    } else {
        GameManager.bullets = new BulletCollection(GameManager.player);
    }
}

function resetEnemies() {
    GameManager.enemies = new EnemyCollection(GameManager.player);
}

function resetplayer() {
	console.log('resetplayer()');
	console.log('resetplayer() GameManager.player:' , GameManager.player);
	if (GameManager.player == undefined) {
        console.log('resetplayer() making new');
        let asset = GameManager.assets['playerShip1_blue'];

         GameManager.player = new Player('playerSprite', 
         	new Point(GameSettings.playerStart.x, GameSettings.playerStart.y), 
             GameManager.assets['playerShip1_blue'] ,
             new Rect(40, 40, GameSettings.playAreaWidth - 80, GameSettings.playAreaHeight - 80));
         GameManager.player.addToBoard(true);

		console.log('resetplayer() added new GameManager.player:' , GameManager.player);
    } 

    console.log('resetplayer() GameManager.player:' , GameManager.player);
    GameManager.player.reset();
}

function resetGame() {
    console.log('Main Game init()');
    resetplayer();
    resetBullets();
    resetEnemies();
    
    GameManager.phase = GameSettings.gamePhase.readyToplay;
    GameManager.lastUpdated = Date.now();
    GameManager.elapsedTime = 0;
    
    writeMessage('Press Space To Start');
}


function processAsset(indexNum) {
    let img = new Image();
    let fileName = 'assets/' + ImageFiles[indexNum] + '.png';
    img.src = fileName;
    img.onload = function () {
        GameManager.assets[ImageFiles[indexNum]] = {
            width: this.width,
            height: this.height,
            fileName: fileName
        }
        indexNum++;
        if (indexNum < ImageFiles.length) {
            processAsset(indexNum);
        } else {
            console.log('Assets Done:', GameManager.assets);
            resetGame();
        }
    }
}


$(function () {
    console.log('ready..!');
    console.log("GameSettings:GameSettings", GameSettings);
    setUpSequences();
    $(document).keydown(function (e) {
        if(GameManager.phase == GameSettings.gamePhase.readyToplay) {
            if (e.which == GameSettings.keyPress.space) {
                runCountDown();
            }
        } else if (GameManager.phase == GameSettings.gamePhase.playing) {
            switch (e.which) {
                case GameSettings.keyPress.up:
                    GameManager.player.move(0, -1);
                    break;
                case GameSettings.keyPress.down:
                    GameManager.player.move(0, 1);
                    break;
                case GameSettings.keyPress.left:
                    GameManager.player.move(-1, 0);
                    break;
                case GameSettings.keyPress.right:
                    GameManager.player.move(1, 0);
                    break;
            }
        } else if(GameManager.phase == GameSettings.gameOver) {
            if (e.which == GameSettings.keyPress.space) {
                resetGame();
            }
        }
    });
    processAsset(0);
});