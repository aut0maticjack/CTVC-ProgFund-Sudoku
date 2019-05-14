/*
  This is the JavaScript code for a sudoku board generator and possibly 
  ajax web game.
*/
function RandomNumberBetween(min, max) { //inclusive of min/max
  var result = Math.floor(Math.random() * (max - min)) + min;
}

function GenerateBoard() {
 // this makes a 9x9 filled it with numbers that conform to the rules of sudoku.
  var mainBoard = [
  ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
  ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
  ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
  ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
  ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
  ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
  ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
  ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
  ["_", "_", "_", "_", "_", "_", "_", "_", "_"]
  ];
  
  //iterate over the array and fill it with (eventualy sudoku compliant) numbers 
  for(var outerIndex=0; outerIndex < mainBoard.length; outerIndex++){
    var boardRow = mainBoard[outerIndex]
      for(var innerIndex=0; innerIndex < boardRow.length; innerIndex++){
        mainBoard[outerIndex][innerIndex] = RandomNumberBetween(1, 9);
      }
  }
  return(mainBoard);

}
function Main() {
    //define variables
  var input = "";
  var keepLooping = true; 
  var boardState = [];
  
  //collect an array of usernames
  while(keepLooping){
    input = prompt('Please enter the next username; enter "done" to quit: ');
    if(input === "done"){
      // they input "done" so stop.
      keepLooping = false;
    }else{
      usernames.push(input);
      }
    }
  //header text
  document.write("You entered " + usernames.length +
    " username(s). Here are the email addresses:\n\n");
  
  // loop through the array of usernames and convert them to email addresses!
  for(var index=0; index < usernames.length; index++){
    ;
  }

 
}


Main();
