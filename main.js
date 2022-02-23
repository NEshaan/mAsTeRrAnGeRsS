// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
rt = false;
gt = false;
bt = false;
yt = false;
pt = false;

block_y=1;
block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top: block_y,
			left: block_x
		});
		canvas.add(block_image_object);
	});
}
function old_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(Img) {
		block_image_object = Img;
		block_image_object.set({
			top: 1,
			left: 260
		});
		canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		block_x=1;
		console.log("r");
		new_image("rr1.png");
		rt = true;
		// upload red ranger
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		console.log("g");
		new_image("gr.png");
		gt = true;
		// upload green ranger
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		console.log("y");
		new_image("yr.png");
		yt = true;
		// upload yellow ranger
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		console.log("p");
		new_image("pr.png");
		pt = true;
		// upload pink ranger
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		console.log("b");
		new_image("br.png");
		bt = true;
	// upload blue ranger
	}
	if (rt == true && bt == true && yt == true && gt == true && pt == true) {
		old_image("omgwow2.png");
	}
	
}

