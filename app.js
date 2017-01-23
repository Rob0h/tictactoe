// generate board
function TicTacToe () {
  this.board = [['', '', ''], ['', '', ''], ['', '', '']];
}

// places O, X at designated position 
TicTacToe.prototype.place = function(positionX, positionY, player) {
  this.board[positionX][positionY] = player;
}

// checks board for winner
TicTacToe.prototype.check =  function() {
  for (var i = 0; i < this.board.length; i++) {
    for (var j = 0; j < this.board[i].length; j++) {
      if (this.board[i][j]) {

      }
    }
  }
}

var test = new TicTacToe();
test.place(0, 0, 'X');
console.log(test.board);

function playGame() {
  var test = new TicTacToe();
  console.log(test);
  var res = window.prompt('hi');
}

playGame();