var inquirer = require('inquirer');

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
function playGame() {
  var game = new TicTacToe();
  console.log(game.board);
  while(!game.check) {
    inquirer.prompt(questions).then(function (answers) {
      console.log(answers);
      game.place(answers.Xposition, answers.Yposition, answers.player);
      console.log(game);
    });
  }
}

playGame();