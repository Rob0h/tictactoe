var inquirer = require('inquirer');
var clear = require('clear');

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
    var Ocount = 0;
    var Xcount = 0;
    for (var j = 0; j < this.board[i].length; j++) {
      if (this.board[i][j] === 'X') {
        Xcount++;
      } else if (this.board[i][j] === 'O') {
        Ocount++;
      }
    }
    if (Ocount === 3) {
      return 'O';
    } else if (Xcount === 3) {
      return 'X';
    }
  }
  return null;
}

// questions for player input
var questions = [
  {
    name: 'player',
    type: 'input',
    message: 'Enter your player: X or O',
    validate: function( value ) {
      if (value === 'X' || value === 'O') {
        return true;
      } else {
        return 'Please enter either X or O';
      }
    }
  },
  {
    name: 'Xposition',
    type: 'input',
    message: 'Enter the desired X position:',
    validate: function(position) {
      // Enter position validation
      return true;
    }
  },
  {
    name: 'Yposition',
    type: 'input',
    message: 'Enter the desired Y position:',
    validate: function(position) {
      // Enter position validation
      return true;
    }
  }
];

// initializes game
function playGame(board) {
  clear();
  var game = board || new TicTacToe();
  console.log(game.board);
  inquirer.prompt(questions).then(function (answers) {
    game.place(answers.Xposition, answers.Yposition, answers.player);
    if (game.check() === null) {
      playGame(game);
    } else if (game.check() === 'X') {
      console.log('Congratulations, X wins!');
    } else if (game.check() === 'O') {
      console.log('Congratulations, O wins!');
    }
  });
}

playGame();