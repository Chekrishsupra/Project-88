var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

image_image_width = 30;
image_image_height = 30;

var player_object= "";
var image_image_object= "";

function player_update()
{
	fabric.Image.fromURL("player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);
	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	image_image_object = Img;

	image_image_object.scaleToWidth(image_image_width);
	image_image_object.scaleToHeight(image_image_height);
	image_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(image_image_object);

	});

}
window.addEventListener("keydown" , my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey==true && keyPressed == "80") {
        console.log("P and Shift keys are pressed together");
        image_image_width = image_image_width + 10;
        image_image_height = image_image_height + 10;
        document.getElementById("current_width").innerHTML = image_image_width;
        document.getElementById("current_height").innerHTML = image_image_height; 
    }
    if(e.shiftKey==true && keyPressed == "77") {
        console.log("M and Shift keys are pressed together");
        image_image_width = image_image_width - 10;
        image_image_height = image_image_height - 10;
        document.getElementById("current_width").innerHTML = image_image_width;
        document.getElementById("current_height").innerHTML = image_image_height; 
    }
    if(keyPressed=="66") {
        new_image ("Body.JPG");
        console.log("Spider man body");
    }
    if(e.shiftKey && keyPressed=="70") {
        new_image ("RA.JPG");
        console.log("Right arm");
    }
    if(e.shiftKey && keyPressed=="65") {
        new_image ("la.JPG");
        console.log("left arm spawned successfully");
    }
    if(keyPressed=="76") {
        new_image ("ll.JPG");
        console.log("left leg spawned successfully");
    }
	if(keyPressed=="82") {
        new_image ("RL.JPG");
        console.log("left arm spawned successfully");
    }
	if(keyPressed=="72") {
        new_image ("head.JPG");
        console.log("head spawned successfully");
    }
    if(keyPressed=="38") {
        up()
        console.log("Up");
    }
    if(keyPressed=="40") {
        down()
        console.log("Down");
    }
    if(keyPressed=="37") {
        left()
        console.log("left");
    }
    if(keyPressed=="39") {
        right()
        console.log("Right");
    }
}

function up() {
	if(player_y>=0) {
		player_y = player_y - image_image_height;
		console.log("Image Height =" + image_image_height);
		console.log("When up arrow key is pressed x=" + player_x + ", y=" + player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function down() {
	if(player_y<=500) {
		player_y = player_y + image_image_height;
		console.log("Image Height =" + image_image_height);
		console.log("When down arrow key is pressed x=" + player_x + ", y=" + player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function left(){
    if(player_x>=0) {
		player_x = player_x - image_image_width;
		console.log("Image Width =" + image_image_width);
		console.log("When left arrow key is pressed x=" + player_x + ", y=" + player_y);
		canvas.remove(player_object);
		player_update();
	}
}
function right(){
    if(player_x<=900) {
		player_x = player_x + image_image_width;
		console.log("Image Width =" + image_image_width);
		console.log("When right arrow key is pressed x=" + player_x + ", y=" + player_y);
		canvas.remove(player_object);
		player_update();
	}
}