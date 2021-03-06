width = Ti.Platform.displayCaps.platformWidth;
height = Ti.Platform.displayCaps.platformHeight;
var j = Math.floor(Math.random() * 10);
images = ["/images/food/1.jpg", "/images/food/2.jpg", "/images/food/3.jpg", "/images/food/4.jpg", "/images/food/5.jpg", 
"/images/food/6.jpg", "/images/food/7.jpg", "/images/food/8.jpg", "/images/food/9.jpg", "/images/food/10.jpg"];
prev = 0;
win = Ti.UI.createWindow({
	title: "VF 1408 Final",
	titleAttributes: {
		font: "Roboto",
		size: 16,
	},
	backgroundColor: "#FF9900",
	barColor: "#FF9900"
});
nav = Ti.UI.iOS.createNavigationWindow({
	window: win
});
buttonOne = Ti.UI.createButton({
	title: "Food Table",
	color: "#000",
	top: 150,
	height: 75,
	width: 320,
	backgroundImage: "/icons/yellowTab.png",
	
});
buttonTwo = Ti.UI.createButton({
	title: "Food Gallery",
	color: "#000",
	top: 225,
	height: 75,
	width: 320,
	backgroundImage: "/icons/orangeTab.png",
	
});
buttonThree = Ti.UI.createButton({
	title: "Custom Page",
	color: "#000",
	top: 300,
	height: 75,
	width: 320,
	backgroundImage: "/icons/redTab.png",
	
});
footer = Ti.UI.createLabel({
	text: "Philip A. Canniff \n #0004622989",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: "#000",
	bottom: 0,
	height: 60,
	width: width,
	backgroundColor: "#FFFF99",
	borderRadius: 0
});
randomLabel = Ti.UI.createLabel({
	text: "Tap photo for a random image!",
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	color: "#fff",
	bottom: 0,
	height: 60,
	width: width,
	backgroundColor: "#FF9900",
	borderRadius: 0
});
var tableWindow = Ti.UI.createWindow({
	fullscreen : false,
	barColor: "#FF9900",
	title : "Recipes",
	titleAttributes: {
	color : "#fff",
	font : {
		fontSize : "20dp",
		fontFamily : "Roboto",
		fontWeight : "bold",
		fontStyle : "italic"
		}
	},
	backgroundColor : "#fff",
});
var randomWindow = Ti.UI.createWindow({
	fullscreen : false,
	barColor: "#FF9900",
	title : "Random Photo",
	titleAttributes: {
	color : "#fff",
	font : {
		fontSize : "20dp",
		fontFamily : "Roboto",
		fontWeight : "bold",
		fontStyle : "italic"
		}
	},
	backgroundColor : "#fff",
});
var customWindow = Ti.UI.createWindow({
	fullscreen : false,
	barColor: "#FF9900",
	title : "Slider",
	titleAttributes: {
	color : "#ccc",
	font : {
		fontSize : "20dp",
		fontFamily : "Roboto",
		fontWeight : "bold",
		fontStyle : "italic"
		}
	},
	backgroundColor : "#FF9900",
});
var viewContainer = Ti.UI.createView({
	height: 444,
	width: width,
	bottom: 60
});
var viewImage = Ti.UI.createImageView({
	height: 500,
	width: "100%",
	image: images[j],
	
});
var logoImage = Ti.UI.createImageView({
	top: 5,
	height: 125,
	width: 125,
	image: "/images/logo.png",
	
});
var customContainer = Ti.UI.createView({
	height: 444,
	width: width,
	bottom: 60
});
var customImage = Ti.UI.createImageView({
	height: 500,
	width: "100%",
	image: "/images/calm.png",
	opacity: 100
});
var slider = Ti.UI.createSlider({
	top: 250,
    min: 0.0,
    max: 1.0,
    width: '80%',
    value: 1.0
});
slider.addEventListener("change", function(evt){
	
	customImage.opacity = (evt.value);
	console.log(evt.value);
});
var loadFile = require("process");

win.add(buttonOne);
win.add(buttonTwo);
win.add(buttonThree);
nav.open();