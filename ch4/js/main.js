function init() {
    console.log('Main Game init()');
}

function processAsset(indexNum) {
    var img = new Image();
    var fileName = 'assets/' + ImageFiles[indexNum] + '.png';
    img.src = fileName;
    img.onload = function() {
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
