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
  var solution = undefined; //fixme
  var board = new this.Board({'n': n});
  rowIndex = rowIndex || 0;
  colIndex = colIndex || 0;
  // place a piece
  for (var i = 0; i < n; i++) {
    if (rowIndex >= n) {
      rowIndex = (rowIndex + n) % n;
    } 
    if (colIndex >= n) {
      colIndex = (colIndex + n) % n;
    }
    board.togglePiece(rowIndex, colIndex);
    rowIndex++;
    colIndex++;
  }
  if (!(board.hasAnyRowConflicts() || board.hasAnyColConflicts())) {
    console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
    solution = board.rows();
  }
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  // create counter
  // iterate through each row
      // iterate through each column 
        // manipulate the position object we are passing to findNRooks
    // if result is defined, increment counter


  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
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
