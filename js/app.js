// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt * 30;
    if (this.x > 505) {
        this.x = -101;
    }

    if (this.y === player.y
        && player.x - this.x < 101
        && this.x - player.x < 101) {
        player.x = 200;
        player.y = 300;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/char-princess-girl.png';
};

Player.prototype.update = function() {
    if (this.x > 402) {
        this.x = 402;
    }
    if (this.x < 0) {
        this.x = 0;
    }
    if (this.y > 383) {
        this.y = 383;
    }
    if (this.y < 51) {
        this.y = 383;
    }

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(keyPress) {
    if (keyPress === 'left') {
        this.x = this.x - 101;
    }
    if (keyPress === 'right') {
        this.x = this.x + 101;
    }
    if (keyPress === 'up') {
        this.y = this.y - 83;
    }
    if (keyPress === 'down') {
        this.y = this.y + 83;
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];
var player = new Player (200, 300, 1);

(function addEnemy() {
    var positionY = [51, 134, 134, 217];

    for (var i of positionY) {
        allEnemies.push(new Enemy(-101, i, Math.floor((Math.random() * 10) + 1)));
    }
})();
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
