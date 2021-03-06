var LiveForm = require("./LiveForm");
var random = require("./random.js");

module.exports = class Peaceful extends LiveForm {
    constructor(x, y) {
        super(x, y);
        this.life = 20;
        this.timeout = 7;
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }
    mull() {
        var emptyCells = this.chooseCell(7);
        var newCell = random(emptyCells);

        if (newCell && this.timeout <= 0) {
            this.timeout = 10;
            this.life++;
            var x = newCell[0];
            var y = newCell[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;

            this.mul();
        }
        else if(this.life < 0){
            this.die();
        }
        else {
            this.move();
        }
    }
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);
        var emptyCells1 = this.chooseCell(0);
        var newCell1 = random(emptyCells1);

        if (newCell) {
            peacHashiv++
            var x = newCell[0];
            var y = newCell[1];
            var peac = new Peaceful(x, y);
            peacArr.push(peac);
            this.life = 7;
        }
        if (newCell1) {
            peacHashiv++
            var x = newCell1[0];
            var y = newCell1[1];
            var peac = new Peaceful(x, y);
            peacArr.push(peac);
            this.life = 7;
        }
        if (this.life < 0) {
            this.die();
        }
        else{
            this.move();
        }
    }
    move() {
        this.timeout--;
        this.life--;
        var emptyCells1 = this.chooseCell(0);
        var emptyCells2 = this.chooseCell(1);
        var emptyCells = emptyCells1.concat(emptyCells2)
        var newCell = random(emptyCells);

        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 6;
            matrix[this.y][this.x] = 0;
            this.y = y;
            this.x = x;
        }
        if (this.life < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (var i in peacArr) {
            if (peacArr[i].x == this.x && peacArr[i].y == this.y) {
                peacArr.splice(i, 1)
            }
        }
    }
}