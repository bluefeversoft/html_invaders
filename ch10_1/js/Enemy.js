
function addEnemySequence(delayBefore, image, score, 
    lives, speed, number, delayBetween, waypoints) {
        for(let i = 0; i < number; ++i) {
            let delay = delayBetween;
            if (i == 0) {
                delay = delayBefore;
            }
            EnemySequences.push({
                delayBefore: delay,
                image: image,
                waypoints: waypoints,
                score: score,
                lives: lives,
                speed: speed
            });
        }
}

function setUpSequences() {
    addEnemySequence(2000, 'Enemies/enemyRed1', 100, 1, 200 / 1000, 
        2, 800, WayPoints['LEFTTORIGHTSHALLOW']);
    addEnemySequence(4000, 'Enemies/enemyRed1', 100, 1, 400 / 1000, 
        6, 400, WayPoints['STREAMFROMB180']);
    console.log(EnemySequences);
}



















