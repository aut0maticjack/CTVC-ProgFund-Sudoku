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

function RandomElementFromArray(theArray) {

  var result = theArray[Math.floor(Math.random() * theArray.length)];
  return(result);
}

function FilterArrayWithArray(dataArray,filterArray) {

  var result = dataArray.filter(item => !filterArray.includes(item));
  return(result);
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

        newBoard[innerIndex][outerIndex] = oldBoard[outerIndex][innerIndex];
        
      }
  }
  return(newBoard);
}

function SquaresToRows(oldBoard) {
 //takes a 9x9 array filled with sudoku numbers and transforms it
 //so the subarrays (rows) in the new one are the 9 3x3 squares inside the 
 //larger 9x9 square. example: 1,1-3 and 2,1-3 and 3,1-3 become 1,1-9.
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
  
  // hardcoding this because i can't think of a good way to make it recursive
  // or scalible... or programatically print the second column...
  // open to suggestions. 

  newBoard[0][0] = oldBoard[0][0];
  newBoard[0][1] = oldBoard[0][1];
  newBoard[0][2] = oldBoard[0][2];
  newBoard[0][3] = oldBoard[1][0];
  newBoard[0][4] = oldBoard[1][1];
  newBoard[0][5] = oldBoard[1][2];
  newBoard[0][6] = oldBoard[2][0];
  newBoard[0][7] = oldBoard[2][1];
  newBoard[0][8] = oldBoard[2][2];
  newBoard[1][0] = oldBoard[0][3];
  newBoard[1][1] = oldBoard[0][4];
  newBoard[1][2] = oldBoard[0][5];
  newBoard[1][3] = oldBoard[1][3];
  newBoard[1][4] = oldBoard[1][4];
  newBoard[1][5] = oldBoard[1][5];
  newBoard[1][6] = oldBoard[2][3];
  newBoard[1][7] = oldBoard[2][4];
  newBoard[1][8] = oldBoard[2][5];
  newBoard[2][0] = oldBoard[0][6];
  newBoard[2][1] = oldBoard[0][7];
  newBoard[2][2] = oldBoard[0][8];
  newBoard[2][3] = oldBoard[1][6];
  newBoard[2][4] = oldBoard[1][7];
  newBoard[2][5] = oldBoard[1][8];
  newBoard[2][6] = oldBoard[2][6];
  newBoard[2][7] = oldBoard[2][7];
  newBoard[2][8] = oldBoard[2][8];
  newBoard[3][0] = oldBoard[3][0];
  newBoard[3][1] = oldBoard[3][1];
  newBoard[3][2] = oldBoard[3][2];
  newBoard[3][3] = oldBoard[4][0];
  newBoard[3][4] = oldBoard[4][1];
  newBoard[3][5] = oldBoard[4][2];
  newBoard[3][6] = oldBoard[5][0];
  newBoard[3][7] = oldBoard[5][1];
  newBoard[3][8] = oldBoard[5][2];
  newBoard[4][0] = oldBoard[3][3];
  newBoard[4][1] = oldBoard[3][4];
  newBoard[4][2] = oldBoard[3][5];
  newBoard[4][3] = oldBoard[4][3];
  newBoard[4][4] = oldBoard[4][4];
  newBoard[4][5] = oldBoard[4][5];
  newBoard[4][6] = oldBoard[5][3];
  newBoard[4][7] = oldBoard[5][4];
  newBoard[4][8] = oldBoard[5][5];
  newBoard[5][0] = oldBoard[3][6];
  newBoard[5][1] = oldBoard[3][7];
  newBoard[5][2] = oldBoard[3][8];
  newBoard[5][3] = oldBoard[4][6];
  newBoard[5][4] = oldBoard[4][7];
  newBoard[5][5] = oldBoard[4][8];
  newBoard[5][6] = oldBoard[5][6];
  newBoard[5][7] = oldBoard[5][7];
  newBoard[5][8] = oldBoard[5][8];
  newBoard[6][0] = oldBoard[6][0];
  newBoard[6][1] = oldBoard[6][1];
  newBoard[6][2] = oldBoard[6][2];
  newBoard[6][3] = oldBoard[7][0];
  newBoard[6][4] = oldBoard[7][1];
  newBoard[6][5] = oldBoard[7][2];
  newBoard[6][6] = oldBoard[8][0];
  newBoard[6][7] = oldBoard[8][1];
  newBoard[6][8] = oldBoard[8][2];
  newBoard[7][0] = oldBoard[6][3];
  newBoard[7][1] = oldBoard[6][4];
  newBoard[7][2] = oldBoard[6][5];
  newBoard[7][3] = oldBoard[7][3];
  newBoard[7][4] = oldBoard[7][4];
  newBoard[7][5] = oldBoard[7][5];
  newBoard[7][6] = oldBoard[8][3];
  newBoard[7][7] = oldBoard[8][4];
  newBoard[7][8] = oldBoard[8][5];
  newBoard[8][0] = oldBoard[6][6];
  newBoard[8][1] = oldBoard[6][7];
  newBoard[8][2] = oldBoard[6][8];
  newBoard[8][3] = oldBoard[7][6];
  newBoard[8][4] = oldBoard[7][7];
  newBoard[8][5] = oldBoard[7][8];
  newBoard[8][6] = oldBoard[8][6];
  newBoard[8][7] = oldBoard[8][7];
  newBoard[8][8] = oldBoard[8][8];
        
      
  
  return(newBoard);
}

function GetSquareIndex(outerIndex, innerIndex) {
/*
  This takes the coordinates of a cell in a 9x9 array and decides which 3x3
  subarray it also belongs to. outer=rows=x, inner=cols=y. 
  This is 0 indexed so 1-9 is actually 0-8 etc
*/
  var squareIndex = 0;
        if (outerIndex >= 0 && outerIndex <= 2) {
          if (innerIndex >= 0 && innerIndex <= 2){
            squareIndex = 0;
          }
          else if (innerIndex >= 3 && innerIndex <= 5){
            squareIndex = 1;
          }
          else if (innerIndex >= 6 && innerIndex <= 8){
            squareIndex = 2;
          }
          else {
            document.write("squareIndex our of range - Row: " + outerIndex +
            " Col: " + innerIndex + " #: " + cellCandidate + "<br>");
          }
        }
        else if (outerIndex >= 3 && outerIndex <= 5) {
          if (innerIndex >= 0 && innerIndex <= 2){
            squareIndex = 3;
          }
          else if (innerIndex >= 3 && innerIndex <= 5){
            squareIndex = 4;
          }
          else if (innerIndex >= 6 && innerIndex <= 8){
            squareIndex = 5;
          }
          else {
            document.write("squareIndex our of range - Row: " + outerIndex +
            " Col: " + innerIndex + " #: " + cellCandidate + "<br>");
          }
        }
        else if (outerIndex >= 6 && outerIndex <= 8) {
          if (innerIndex >= 0 && innerIndex <= 2){
            squareIndex = 6;
          }
          else if (innerIndex >= 3 && innerIndex <= 5){
            squareIndex = 7;
          }
          else if (innerIndex >= 6 && innerIndex <= 8){
            squareIndex = 8;
          }
          else {
            document.write("squareIndex our of range - Row: " + outerIndex +
            " Col: " + innerIndex + " #: " + cellCandidate + "<br>");
          }
        }
        else {
            document.write("squareIndex our of range - Row: " + outerIndex +
            " Col: " + innerIndex + " #: " + cellCandidate + "<br>");
        }
 return(squareIndex);
}


function GenerateBoard() {
 // this makes a 9x9 filled it with numbers that conform to the rules of Sudoku.
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
  
  var oneThoughNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  //iterate over the array and fill it with (eventually Sudoku compliant) numbers 
  for(var outerIndex=0; outerIndex < mainBoard.length; outerIndex++){
    var boardRow = mainBoard[outerIndex];
      
      for(var innerIndex=0; innerIndex < boardRow.length; innerIndex++){
        var cellCandidate = 0;
        var cellOptions = oneThoughNine;
        var boardColsFirst = ColumnsToRows(mainBoard);
        var boardSqrsFirst = SquaresToRows(mainBoard); 
        var squareIndex = GetSquareIndex(outerIndex, innerIndex); 

        //rows and columns are linearish and pretty straight-forward to check...
        cellOptions = FilterArrayWithArray(cellOptions,mainBoard[outerIndex]);
        cellOptions = FilterArrayWithArray(cellOptions,boardColsFirst[innerIndex]);
        //the 3x3 squares... OTOH their index function is bigger than this one...
        cellOptions = FilterArrayWithArray(cellOptions,boardSqrsFirst[squareIndex]);


        
        cellCandidate = RandomElementFromArray(cellOptions);
        
        
        
        if(boardRow.includes(cellCandidate)){
            document.write("Duplicate! - Row: " + outerIndex + " Col: " +
            innerIndex + " #: " + cellCandidate + "<br>");

        }

        cellOptions = FilterArrayWithArray(cellOptions,boardSqrsFirst[squareIndex]);


        mainBoard[outerIndex][innerIndex] = cellCandidate;
        
      }
  }
  return(mainBoard);
}

function DebugBoardState() {
  var boardRowsFirst = GenerateBoard();
  var boardColsFirst = ColumnsToRows(boardRowsFirst);
  var boardSqrsFirst = SquaresToRows(boardRowsFirst); 

  for(var indexRows=0; indexRows < boardRowsFirst.length; indexRows++){
    document.write(boardRowsFirst[indexRows] + "<br>");
  }
  
  document.write("<br>");
  
  for(var indexCols=0; indexCols < boardColsFirst.length; indexCols++){
  document.write(boardColsFirst[indexCols] + "<br>");
  }

  document.write("<br>");

  for(var indexSqrs=0; indexSqrs < boardSqrsFirst.length; indexSqrs++){ 
  document.write(boardSqrsFirst[indexSqrs] + "<br>");
  }
}

function Main() {
  DebugBoardState();
}


Main();


