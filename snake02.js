window.onload = function(){
	var cvs = document.getElementById("canvas");
	var ctx = cvs.getContext("2d");

	var cvsW = cvs.width;
	var cvsH = cvs.height;

	var snakeW = 10;
	var snakeH = 10;

//default direction

var direction = "right";
// read users directions
document.addEventListener("keydown", getDirection);

function getDirection(e){
	if(e.keyCode == 37  && direction != 'right')
	{
		direction = "left";
	} else if(e.keyCode == 38  && direction != 'down'){
		direction = "up" ;
	}else if(e.keyCode == 39  && direction != 'left'){
		direction ="right";
	}else if(e.keyCode == 40  && direction != 'up'){
		direction = "down";
	}
}
function drawSnake(x, y){
	ctx.fillStyle = "white";
	ctx.fillRect(x*snakeW, y*snakeH, snakeW,snakeH);

	ctx.fillStyle = "#000";
	ctx.strokeRect(x*snakeW, y*snakeH, snakeW,snakeH);
};


//create out snake array

var len = 5;
var snake = [];

for(var i = len - 1; i>=0; i--){
	snake.push(
		{x:i,
			y:0
		}
	);
}

function draw(){
	ctx.clearRect(0,0, cvsW, cvsH);
	for (var i = 0; i<snake.length; i++)
	{
		var x = snake[i].x;
		var y = snake[i].y;
		drawSnake(x,y);
	
}
	//snake head
	var snakeY = snake[0].y;
	var snakeX = snake[0].x;

	//remove to the last
	snake.pop();

	//create a new head , based onthe previous head and direction
	if (direction == "left") snake--;
		else if(direction == "up") snakeY--;
		else if(direction == "right") snakeX++;
		else if(direction == "down") snakeY++;

	var newHead = {
		x: snakeX,				
		y: snakeY

	};
	snake.unshift(newHead);
};

setInterval(draw, 60);

//draw();



}










