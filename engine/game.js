export default class Game  {
    constructor(size) {
        this.size = size;
        this.gridSize = this.size * this.size;
        this.addRow = [];
        this.addCol = [];
        this.arr_shift = [];
        this.arr_win = [];
        this.arr_lose = [];
        this.gameState = {
            board: new Array(this.gridSize).fill(0),
            score: 0,
            won: false,
            over: false,
        }
        this.randomValue();
        this.randomValue();
        this.setupNewGame();
        var direction;
        this.move(direction);
    }

// sets up new game
setupNewGame() {
    this.gameState.board = new Array(this.gridSize).fill(0);
    this.gameState.score = 0;
    this.gameState.won = false;
    this.gameState.over = false;
    this.randomValue();
    this.randomValue();
}

// randomly places any two values of 2 or 4 on board
randomValue() {
    var num = Math.floor(Math.random() * this.gameState.board.length);
    var prob = Math.floor((Math.random() * 100) + 1);
    if (this.gameState.board[num] == 0) {
        if (prob > 10) {
            this.gameState.board[num] = 2;
        } else if (prob <= 10) {
            this.gameState.board[num] = 4;
    }
    } else {
        this.randomValue();
    }
    }

// loads board
loadGame(gameState) {
    this.gameState = gameState;
}

// move(direction) --> "right", "left", "down", "up"
move(direction) {
    var copy = [...this.gameState.board];
    var isCopy = false;

    if (direction === "right") {
        // move("right")
        for (var i=0; i<this.gameState.board.length; i++) {
            if ((i % this.size) === 0) {
            var x = this.gameState.board[i];
            var y = this.gameState.board[i+1];
            var z = this.gameState.board[i+2];
            var w = this.gameState.board[i+3];
            var row = [x,y,z,w];

            var rowFilter = row.filter(num => num);
            var empty = this.size - rowFilter.length;
            var zero = new Array(empty).fill(0);
            this.addRow = zero.concat(rowFilter);

            this.gameState.board[i] = this.addRow[0];
            this.gameState.board[i+1] = this.addRow[1];
            this.gameState.board[i+2] = this.addRow[2];
            this.gameState.board[i+3] = this.addRow[3];
            }
        }
        // combine elements in each row
        var count = 0;
        for (var i=this.gridSize - 1; i > 0; i--) {
            if (count < this.size - 1) {
                count++;
                if (this.gameState.board[i] == this.gameState.board[i-1]) {
                    var total = this.gameState.board[i] + this.gameState.board[i-1];
                    this.gameState.board[i] = total;
                    this.gameState.board[i-1] = 0;
                    this.gameState.score = this.gameState.score + total;
                }
            } else if (count >= this.size - 1) {
                count = 0;
            }
        }       
    // move("right")
    for (var i=0; i<this.gameState.board.length; i++) {
        if ((i % this.size) === 0) {
        var x = this.gameState.board[i];
        var y = this.gameState.board[i+1];
        var z = this.gameState.board[i+2];
        var w = this.gameState.board[i+3];
        var row = [x,y,z,w];

        var rowFilter = row.filter(num => num);
        var empty = this.size - rowFilter.length;
        var zero = new Array(empty).fill(0);
        this.addRow = zero.concat(rowFilter);

        this.gameState.board[i] = this.addRow[0];
        this.gameState.board[i+1] = this.addRow[1];
        this.gameState.board[i+2] = this.addRow[2];
        this.gameState.board[i+3] = this.addRow[3];
        }
    }
    // check for copy (if isCopy ----> create randomValue of 2 or 4 on board)
    for (var i=0; i<this.gridSize; i++) {
        if (copy[i] != this.gameState.board[i]) {
            isCopy = true;
        }
    }
    if (isCopy) {
        this.randomValue();
    } 
    } else if (direction === "left") {
        for (var i=0; i<this.gameState.board.length; i++) {
            if ((i % this.size) === 0) {
            var x = this.gameState.board[i];
            var y = this.gameState.board[i+1];
            var z = this.gameState.board[i+2];
            var w = this.gameState.board[i+3];
            var row = [x,y,z,w];
        
            var rowFilter = row.filter(num => num);
            var empty = this.size - rowFilter.length;
            var zero = new Array(empty).fill(0);
            this.addRow = rowFilter.concat(zero);
    
            this.gameState.board[i] = this.addRow[0];
            this.gameState.board[i+1] = this.addRow[1];
            this.gameState.board[i+2] = this.addRow[2];
            this.gameState.board[i+3] = this.addRow[3];
            }
        }
        var count = 0;
        for (var i=0; i<this.gridSize-1; i++) {
            if (count < this.size-1) {
                count++;
                if (this.gameState.board[i] === this.gameState.board[i+1]) {
                    var total = this.gameState.board[i] + this.gameState.board[i+1];
                    this.gameState.board[i] = total;
                    this.gameState.board[i+1] = 0;
                    this.gameState.score = this.gameState.score + total;
                }
            } else if (count >= this.size - 1) {
                count = 0;
            }
        }
        for (var i=0; i<this.gameState.board.length; i++) {
            if ((i % this.size) === 0) {
            var x = this.gameState.board[i];
            var y = this.gameState.board[i+1];
            var z = this.gameState.board[i+2];
            var w = this.gameState.board[i+3];
            var row = [x,y,z,w];
    
            var rowFilter = row.filter(num => num);
            var empty = this.size - rowFilter.length;
            var zero = new Array(empty).fill(0);
            this.addRow = rowFilter.concat(zero);

            this.gameState.board[i] = this.addRow[0];
            this.gameState.board[i+1] = this.addRow[1];
            this.gameState.board[i+2] = this.addRow[2];
            this.gameState.board[i+3] = this.addRow[3];
            }
        }
        for (var i=0; i<this.gridSize; i++) {
            if (copy[i] != this.gameState.board[i]) {
                isCopy = true;
            }
        }
        if (isCopy) {
            this.randomValue();
        } 
    } else if (direction === "down") {
        for (var i=0; i<this.size; i++) {
            var x = this.gameState.board[i];
            var y = this.gameState.board[i+this.size];
            var z = this.gameState.board[i+(this.size*2)];
            var w = this.gameState.board[i+(this.size*3)];
            var column = [x,y,z,w];
        
            var colFilter = column.filter(num => num);
            var empty = this.size - colFilter.length;
            var zero = new Array(empty).fill(0);
            this.addCol = zero.concat(colFilter);
    
            this.gameState.board[i] = this.addCol[0];
            this.gameState.board[i+this.size] = this.addCol[1];
            this.gameState.board[i+(this.size*2)] = this.addCol[2];
            this.gameState.board[i+(this.size*3)] = this.addCol[3];    
        }
        for (var i=this.gridSize-1; i>0; i--) {
            if (this.gameState.board[i] == this.gameState.board[i-this.size]) {
                var total = this.gameState.board[i] + this.gameState.board[i-this.size];
                this.gameState.board[i] = total;
                this.gameState.board[i-this.size] = 0;
                this.gameState.score = this.gameState.score + total;
            }
        }
        for (var i=0; i<this.size; i++) {
            var x = this.gameState.board[i];
            var y = this.gameState.board[i+this.size];
            var z = this.gameState.board[i+(this.size*2)];
            var w = this.gameState.board[i+(this.size*3)];
            var column = [x,y,z,w];
    
            var colFilter = column.filter(num => num);
            var empty = this.size - colFilter.length;
            var zero = new Array(empty).fill(0);
            this.addCol = zero.concat(colFilter);

            this.gameState.board[i] = this.addCol[0];
            this.gameState.board[i+this.size] = this.addCol[1];
            this.gameState.board[i+(this.size*2)] = this.addCol[2];
            this.gameState.board[i+(this.size*3)] = this.addCol[3];
        }

        for (var i=0; i<this.gridSize; i++) {
            if (copy[i] != this.gameState.board[i]) {
                isCopy = true;
            }
        }
        if (isCopy) {
            this.randomValue();
        } 
    } else if (direction === "up") {
        for (var i=0; i<this.size; i++) {
            var x = this.gameState.board[i];
            var y = this.gameState.board[i+this.size];
            var z = this.gameState.board[i+(this.size*2)];
            var w = this.gameState.board[i+(this.size*3)];
            var column = [x,y,z,w];
        
            var colFilter = column.filter(num => num);
            var empty = this.size - colFilter.length;
            var zero = new Array(empty).fill(0);
            this.addCol = colFilter.concat(zero);
    
            this.gameState.board[i] = this.addCol[0];
            this.gameState.board[i+this.size] = this.addCol[1];
            this.gameState.board[i+(this.size*2)] = this.addCol[2];
            this.gameState.board[i+(this.size*3)] = this.addCol[3]; 
        }

        for (var i=0; i<this.gridSize-1; i++) {
            if (this.gameState.board[i] == this.gameState.board[i+this.size]) {
                var total = this.gameState.board[i] + this.gameState.board[i+this.size];
                this.gameState.board[i] = total;
                this.gameState.board[i+this.size] = 0;
                this.gameState.score = this.gameState.score + total;
            }
        }
        for (var i=0; i<this.size; i++) {
            var x = this.gameState.board[i];
            var y = this.gameState.board[i+this.size];
            var z = this.gameState.board[i+(this.size*2)];
            var w = this.gameState.board[i+(this.size*3)];
            var column = [x,y,z,w];
    
            var colFilter = column.filter(num => num);
            var empty = this.size - colFilter.length;
            var zero = new Array(empty).fill(0);
            this.addCol = colFilter.concat(zero);

            this.gameState.board[i] = this.addCol[0];
            this.gameState.board[i+this.size] = this.addCol[1];
            this.gameState.board[i+(this.size*2)] = this.addCol[2];
            this.gameState.board[i+(this.size*3)] = this.addCol[3];
        }
        for (var i=0; i<this.gridSize; i++) {
            if (copy[i] != this.gameState.board[i]) {
                isCopy = true;
            }
        }
        if (isCopy) {
            this.randomValue();
        } 
    }

    // check move()
    this.arr_shift.forEach(e => {
        e(this.getGameState());
    });

    // checkWin()
    for(var i=0; i<this.gameState.board.length; i++){
        if (this.gameState.board[i] == 2048){
            this.gameState.won = true;
            this.arr_win.forEach(e => {
                e(this.getGameState());
            })
        }
    }

    // checkOver()
    var checkIfZero = 0;
    var checkForMatches = 0;
    // if checkIfZero == 0 ----> has 0 in board, so increment variable
    for (var i=0; i<this.gameState.board.length; i++) {
        if (this.gameState.board[i] == 0) {
            checkIfZero = checkIfZero + 1;
        }
    }
    // if checkForMatches == 0 ----> if num is duplicate, then increment variable ("right", "down")
    var count = 0;
    if (checkIfZero == 0) {
        for (var k = this.gridSize-1; k > 0; k--) {
            if (count < this.size-1) {
                count++;
                if (this.gameState.board[k] == this.gameState.board[k-1]) {
                    checkForMatches = checkForMatches + 1; //true
                }
                if (this.gameState.board[k] == this.gameState.board[k-this.size]) {
                    checkForMatches = checkForMatches + 1;
                }
            } else if (count >= this.size-1) {
                count =0;
            }
        }
    }
    // if checkForMatches == 0 ----> if num is duplicate, then increment variable ("left", "up")
    var count = 0;
    if (checkIfZero == 0) {
        for (var k=0; k<this.gridSize-1; k++) {
            if (count < this.size - 1) {
                count++;
                if (this.gameState.board[k] == this.gameState.board[k+1]) {
                    checkForMatches = checkForMatches + 1;
                }
                if (this.gameState.board[k] == this.gameState.board[k+this.size]) {
                    checkForMatches = checkForMatches + 1;
                 }
            } else if (count >= this.size -1) {
                count = 0;
            }
        }
    }

    // final code to checkOver()
    if (checkIfZero == 0 && checkForMatches == 0) {
        this.gameState.over = true;
        this.arr_lose.forEach(e => {
            e(this.getGameState());
        });
    }
}

// converts to ascii
toString() {
    var str = '';
    for (var i=0; i<this.gameState.board.length; i++) {
        if ((i % this.size) === 0) {
            str = str + '\n';
        }
        str = str + this.gameState.board[i];
    }
    str += '\n' + 'Score: ' + this.gameState.score + '\n'
    return str;
}

// onMove
onMove(callback) {
    this.arr_shift[this.arr_shift.length] = callback;
}

// onWin
onWin(callback) {
    this.arr_win[this.arr_win.length] = callback;
}

// onLose
onLose(callback) {
    this.arr_lose[this.arr_lose.length] = callback;
}

// getter GameState
getGameState() {
    return this.gameState;
}
}