function PrintTriangle(){
	var triangle = "#";
	while (triangle.length <= 7){
	  console.log(triangle);
	  triangle += "#";
	}
}


function PrintFizzBuzz(){
	for (var i = 1; i <= 100; i++){
	  var output = "";
	  if ((i % 3) != 0 && (i % 5) != 0)
		output = i;
	  else if ((i % 3) == 0)
		output = "Fizz";
	  if ((i % 5) == 0)
		output += "Buzz";
	  console.log(output);
	}
}

function PrintChessBoard(var size){
	//var size = 8;
	var output = "";
	for (var i = 0; i < size; i++){
	  for (var j = 0; j < size; j++){
		if ((i % 2) == 0){
		  if ((j %2) == 0)
			output += " ";
		  else 
			output += "#";
		}
		else if ((i % 2) != 0){
		  if ((j %2) != 0)
			output += " ";
		  else 
			output += "#";
		}
	  }
	  output += "\n";
	}
	console.log(output);
}


