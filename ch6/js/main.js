function resetPlayer() {
    if (GameManager.player == undefined) {
        let asset = GameManager.assets['playerShip1_blue'];

        GameManager.player = new Player(GameSettings.playerDivName,
            new Point(GameSettings.playerStart.x, GameSettings.playerStart.y),
            asset
        );
        GameManager.player.addToBoard(true);
    }
    console.log('resetplayer() GameManager.player:' , GameManager.player);
    GameManager.player.reset();
}

function init() {
    console.log('Main Game init()');
    resetPlayer();

    window.setTimeout(function() {
        GameManager.player.incrementScore(200);
    }, 3000);

    window.setTimeout(function() {
        GameManager.player.incrementScore(200);
        GameManager.player.lives--;
        GameManager.player.setLives();
    }, 6000);
    
    window.setTimeout(function() {
        GameManager.player.reset();
    }, 9000);
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
        };
        indexNum++;
        if (indexNum < ImageFiles.length) {
            processAsset(indexNum);
        } else {
            console.log('Assets Done:', GameManager.assets);
            init();
        }
    }
}

$(function () {
    processAsset(0);
    $(document).keydown(
        function (e) {
            switch (e.which) {
                case GameSettings.keyPress.up:
                    console.log('up');
                    break;
                case GameSettings.keyPress.down:
                    console.log('down');
                    break;
                case GameSettings.keyPress.left:
                    console.log('left');
                    break;
                case GameSettings.keyPress.right:
                    console.log('right');
                    break;
                case GameSettings.keyPress.space:
                    console.log('space');
                    break;
            }
        }
    );
});
