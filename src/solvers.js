/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n, rowIndex, colIndex) {
  var solution = undefined;
  var board = new this.Board({n: n});
  var found = false;
  var findSolution = function(rows) {
    // board = board || new this.Board({n: n});

    if (rows === n) { // base case
      solution = board.rows();
      found = true;
    }

    for (var i = 0; i < n; i++) {  // iterates over columns
      if (found) {
        break;
      }
      board.togglePiece(rows, i);
      if (!board.hasAnyRooksConflicts()) {
        findSolution(rows + 1, board);
      }
      board.togglePiece(rows, i);
    }
  };
  findSolution(0);

  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var board = new this.Board({n: n});

  var findSolution = function(rows) {
    // board = board || new this.Board({n: n});

    if (rows === n) { // base case
      solutionCount++;
      return;
    }

    for (var i = 0; i < n; i++) {  // iterates over columns
      board.togglePiece(rows, i);
      if (!board.hasAnyRooksConflicts()) {
        findSolution(rows + 1, board);
      }
      board.togglePiece(rows, i);
    }
  };

  findSolution(0);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
