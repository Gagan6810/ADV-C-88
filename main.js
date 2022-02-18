// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');

//Set initial positions for ball and hole images.
apple_y = 50;
apple_x = 50;
basket_x = 900;
basket_y = 400;

basket_object = "";
apple_object = "";

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	fabric.Image.fromURL("basket.jpg", function(Img){
		basket_object = Img;
		basket_object.scaleToWidth(50);
		basket_object.scaleToHeight(50);
		basket_object.set({
			top:basket_y,
			left:basket_x
		});
		canvas.add(basket_object);
		});
}

function new_image()
{
	// write code to Upload ball image on canvas
	fabric.Image.fromURL("apple.jpg", function(Img){
		apple_object = Img;
		apple_object.scaleToWidth(50);
		apple_object.scaleToHeight(50);
		apple_object.set({
			top:apple_y,
			left:apple_x
		});
		canvas.add(apple_object);
		});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((apple_x==basket_x)&&(apple_y==basket_y)){
		canvas.remove(apple_object);
		document.getElementById("hd3").innerHTML = "Yay!!! You Have Put the Apple in the Basket";
		document.getElementById("myCanvas").style.borderColor = "red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if(apple_y >= 0){
			apple_y = apple_y - block_image_height;
			console.log("When Up Arrow is pressed, X =" + apple_x +", Y = " + apple_y);
			canvas.remove(apple_object);
			new_image();
		}
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if(apple_y <= 450){
			apple_y = apple_y + block_image_height;
			console.log("When Down Arrow is pressed, X =" + apple_x +", Y = " + apple_y);
			canvas.remove(apple_object);
			new_image();
		}
	}

	function left()
	{
			// Write a code to move ball left side.
			if(apple_x >= 0){
				apple_x = apple_x - block_image_width;
				console.log("When Left Arrow is pressed, X =" + apple_x +", Y = " + apple_y);
				canvas.remove(apple_object);
				new_image();
			}
	}

	function right()
	{
			// Write a code to move ball right side.
			if(apple_x <= 1050){
				apple_x = apple_x + block_image_width;
				console.log("When Right Arrow is pressed, X =" + apple_x +", Y = " + apple_y);
				canvas.remove(apple_object);
				new_image();
			}
		}
	
}