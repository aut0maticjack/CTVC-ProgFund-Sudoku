/*
  This is the JavaScript code for a sudoku board generator and possibly 
  ajax web game.
*/
function RandomNumberBetween(min, max) { //inclusive of min/max
  min = Number(min);
  max = Number(max);
  
  var result = Math.floor(Math.random() * (max - min)) + min;
  return(result);
}

function GenerateBoard() {
 // this makes a 9x9 filled it with numbers that conform to the rules of sudoku.
  var mainBoard = [
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""]
  ];
  
  //iterate over the array and fill it with (eventualy sudoku compliant) numbers 
  for(var outerIndex=0; outerIndex < mainBoard.length; outerIndex++){
    var boardRow = mainBoard[outerIndex];
      
      for(var innerIndex=0; innerIndex < boardRow.length; innerIndex++){
        var cellCandidate = 0;
        cellCandidate = RandomNumberBetween(1, 9);
        if(boardRow.includes(cellCandidate)){
            document.write("Outer: " + outerIndex + "Inner:" + innerIndex +
            "#:" + cellCandidate + "<br>");

        }

        mainBoard[outerIndex][innerIndex] = cellCandidate;
        
      }
  }
  return(mainBoard);
}

function ColumnsToRows(oldBoard) {
 //takes a 9x9 array filled with sudoku numbers and transforms (mirrors?) it
 //so the subarrays (rows) in the new one are the columns of the old one.
 //used for checking board correctness.  
  var newBoard = [
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", ""]
  ];
  
  //iterate over the array and make a new array where old column = new row 
  for(var outerIndex=0; outerIndex < oldBoard.length; outerIndex++){
    var boardRow = oldBoard[outerIndex];
      
      for(var innerIndex=0; innerIndex < boardRow.length; innerIndex++){  

        newBoard[innerIndex][outerIndex] = oldBoard[outerIndex][innerIndex] ;
        
      }
  }
  return(newBoard);
}
function Main() {
  var boardRowsFirst = GenerateBoard();
  var boardColsFirst = ColumnsToRows(boardRowsFirst);

//var boardSqrsFirst = SquaresToRows(boardRowsFirst); //WIP

  for(var indexRows=0; indexRows < boardRowsFirst.length; indexRows++){
    document.write(boardRowsFirst[indexRows] + "<br>");
  }
  
  document.write("<br>");
  
  for(var indexCols=0; indexCols < boardColsFirst.length; indexCols++){
  document.write(boardColsFirst[indexCols] + "<br>");
  }
  //for(var indexSqrs=0; indexSqrs < boardSqrsFirst.length; indexSqrs++){ //WIP
  //document.write(boardSqrsFirst[indexSqrs] + "<br>");
  //}
}


Main();


