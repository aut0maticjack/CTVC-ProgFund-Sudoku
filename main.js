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
        var testing = true
        cellCandidate = RandomNumberBetween(1, 9);
  			while(testing == true);
        	if(boardRow.includes(cellCandidate)){
    				cellCandidate = RandomNumberBetween(1, 9); 
					}
          else {
        mainBoard[outerIndex][innerIndex] = cellCandidate;
        testing = false;
        }
      }
  }
  return(mainBoard);

}
function Main() {
  var boardState = GenerateBoard();
  for(var index=0; index < boardState.length; index++){
  document.write(boardState[index] + "<br>");
}
}

Main();
