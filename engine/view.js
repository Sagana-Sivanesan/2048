import Game from "./game.js"

export const gameView = function(game) {
    const $root = $('#root');
    
    var title =`<div class="title">2048</div>`;
    var grid_=`<div class="grid_">`;
    var howToPlay= `<div class="howTo_container">Use your arrow key to move the tiles. Add tiles to reach 2048.</div>`;
    var score= `<div class="score">score: ${game.gameState.score}</div>`
    var new_game=`<button class="new_game" type="button">New Game</button>`
    var cover =`<div class="cover">Status</div>`;
    
    for (var i=0; i<game.gridSize; i++){
        grid_= grid_ + `<div class="square"> ${game.gameState.board[i]} </div>`
    }

    if (game.gameState.won){
        gameState=`<div class="winner">You won!</div>`
    } else if (game.gameState.over){
        gameState=`<div class="loser">Game Over!\nYou Lose!</div>`
    }

    $root.append(cover);
    $root.append(grid_);
    $root.append(title);
    $root.append(howToPlay);
    $root.append(score);
    $root.append(new_game);
}

$(function(){
    var game = new Game(4);
    gameView(game);

    $(document).on("keydown", function(event) {
        if (event.keyCode == 37) {
            game.move("left");
        } else if (event.keyCode == 38) {
            game.move("up");
        } else if (event.keyCode == 39) {
            game.move("right");
        } else if (event.keyCode == 40) {
            game.move("down");
        }

        const $root = $('#root');

        var gameState=``;
        var title =`<div class="title">2048</div>`;
        var grid_=`<div class="grid_">`;
        var howToPlay= `<div class="howTo_container">Use your arrow key to move the tiles. Add tiles to reach 2048.</div>`;
        var score= `<div class="score">score: ${game.gameState.score}</div>`
        var new_game=`<button class="new_game" type="button">New Game</button>`
        var cover =`<div class="cover">Status</div>`;

        for (var i=0; i<game.gridSize; i++){
            grid_= grid_ + `<div class="square">${game.gameState.board[i]}</div>`
        }

        if (game.gameState.won){
            gameState=`<div class="winner">You won!</div>`
        } else if (game.gameState.over){
            gameState=`<div class="loser">Game Over!\nYou Lose!</div>`
        }

        $(document).on('click',`.new_game`,function(){
            game.setupNewGame();

        const $root = $('#root');

        var gameState=``;
        var title =`<div class="title">2048</div>`;
        var grid_=`<div class="grid_">`;
        var howToPlay= `<div class="howTo_container">Use your arrow key to move the tiles. Add tiles to reach 2048.</div>`;
        var score= `<div class="score">score: ${game.gameState.score}</div>`
        var new_game=`<button class="new_game" type="button">New Game</button>`
        var cover =`<div class="cover">Status</div>`;

        for (var i=0; i<game.gridSize; i++){
            grid_= grid_ + `<div class="square">${game.gameState.board[i]}</div>`
        }

        if (game.gameState.won){
            gameState=`<div class="winner">You won!</div>`
        } else if (game.gameState.over){
            gameState=`<div class="loser">Game Over!\nYou Lose!</div>`
        }
        
        $root.append(cover);
        $root.append(title);
        $root.append(score);
        $root.append(grid_);
        $root.append(new_game);
        $root.append(howToPlay);
        $root.append(gameState);
    });
        $root.append(cover);
        $root.append(title);
        $root.append(score);
        $root.append(grid_);
        $root.append(new_game);
        $root.append(howToPlay);
        $root.append(gameState);
});
});