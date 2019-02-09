class Player extends Sprite {
    constructor(divName, position, assetDesc, boundaryRect) {
        super(divName, position, assetDesc.fileName, 
            new Size(assetDesc.width, assetDesc.height));
        this.lives = GameSettings.playerStartLives;    
        this.score = 0;
        this.highScore = 0;
        this.state = GameSettings.playerState.ok;
        this.boundaryRect = boundaryRect;
        this.boundaryRect.shift(this.anchorShift.x, this.anchorShift.y);
    }

    reset() {
        this.state = GameSettings.playerState.ok;
        this.score = 0;
        this.lives = GameSettings.playerStartLives;
        this.setLives();
        this.setScore();
        this.setHighScore();
        this.setPosition(GameSettings.playerStart.x, GameSettings.playerStart.y, true );
    }

    move(x, y) {
        let xStep = GameSettings.playerMoveStep * x;
        let yStep = GameSettings.playerMoveStep * y;

        if (this.boundaryRect.OutsideHorizontal(xStep + this.position.x) == true) {
            xStep = 0;
        }
        if (this.boundaryRect.OutsideVertical(yStep + this.position.y) == true) {
            yStep = 0;
        }

        this.incrementPosition(xStep, yStep);
    }

    incrementScore (amount) {
        this.score += amount;
        this.setScore();
        this.setHighScore();
    }

    setLives() {
        $('#lives').text('x ' + this.lives);
    }
    setScore() {
        $('#score').text(this.score);
    }
    setHighScore() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
        }
        $('#highScore').text(this.highScore);
    }


}



















