$(function () {
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
