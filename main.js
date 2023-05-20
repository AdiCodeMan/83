// Create a reference for the canvas
canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");


img_width = 300;
img_height = 100;
var keyPressed; 

var alphabet;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
	clearCanvas()
	keyPressed = e.keyCode;
	console.log(keyPressed);
	console.log("alphabet");
	ctx.font="50px serif";
	ctx.fillText(String.fromCharCode(keyPressed),250,250);
	
	if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
//write a code to check the type of key pressed
alphabetkey();
document.getElementById("d1").innerHTML="You pressed Alphabet key with ASCII value:";
document.getElementById("d2").innerHTML= keyPressed;
console.log("alphabet key");
		}
		else if((keyPressed >=48 && keyPressed<=57)){
			//write a code to check the type of key pressed
            numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key with ASCII value:";
			document.getElementById("d2").innerHTML= keyPressed;
			console.log("number key");
					}
					else if((keyPressed >=37 && keyPressed<=40)){
						//write a code to check the type of key pressed
						arrowkey();
						document.getElementById("d1").innerHTML="You pressed Arrow key with ASCII value:";
						document.getElementById("d2").innerHTML= keyPressed;
						console.log("arrow key");
								}
								else if((keyPressed ==18)||(keyPressed ==17)||(keyPressed ==27)){
									//write a code to check the type of key pressed
									specialkey();
									document.getElementById("d1").innerHTML="You pressed Special key with ASCII value:";
									document.getElementById("d2").innerHTML= keyPressed;
									console.log("special key");
								}else{
										otherkey();
										document.getElementById("d1").innerHTML="You pressed symbol or other key with ASCII value:";
										document.getElementById("d2").innerHTML= keyPressed;
										console.log("other key");
									}
}

function clearCanvas()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

function alphabetkey()
{
	img_image="Alpkey.png";
	add(); 

}
function numberkey()
{
	img_image="numkey.png";
	add(); 

}
function arrowkey()
{
	img_image="Arrkey.png";
	add(); 

}
function specialkey()
{
    img_image="spkey.png";
	add(); 
	
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
