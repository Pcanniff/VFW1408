
/*	Philip A. Canniff
 * 	VF 1408
 *  Chad Gibson
 * 	Project 1 
 */
//Globals
var i = 0;
var stringArray = ["1. Hydralisk", "2. Zergling", "3. Mutalisk", "4. Overlord", "5. Kerrigan"];
var pictureArray = ["hydra.png", "zergling.png", "muta.jpg", "overlord.png", "kerrigan.png"];
//Creates
var mainWindow = Ti.UI.createWindow({
	title: "Project 1",
	backgroundColor: "#ccc",
});
var nextView = Ti.UI.createButton({
	backgroundColor: "transparent",
	height: "80dp",
	width: "80dp",
	right: "30dp",
	bottom: "10dp",
	backgroundImage: "Red.png",
});
var previousView = Ti.UI.createButton({
	backgroundColor: "transparent",
	height: "80dp",
	width: "80dp",
	left: "30dp",
	bottom: "10dp",
	backgroundImage: "button.png",
});
var contentView = Ti.UI.createView({
	backgroundColor: "#fff",
	right: "30dp",
	top: "40dp",
	left: "30dp",
	bottom: "100dp",
	borderRadius: "5dp",
	borderColor: "#000000",
	borderWidth: "3dp",
});
var nextText = Ti.UI.createLabel({
	text: "Next",
	color: "#fff",
	font: {fontSize: "14dp", fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "italic"}
});
var previousText = Ti.UI.createLabel({
	text: "Previous",
	color: "#fff",
	font: {fontSize: "14dp", fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "italic"}
});
var contentText = Ti.UI.createLabel({
	text: stringArray[i],
	color: "#000000",
	top: "60dp",
	font: {fontSize: "14dp", fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "italic"}
});
var contentPhoto = Ti.UI.createLabel({
	backgroundImage:  pictureArray[i],
	height: "150dp",
	width: "150dp",
	bottom: "50dp",
	opacity: "0.85",
});
//File Load and Calls
var loadFile = require("Project2");
previousView.add(previousText);
nextView.add(nextText);
contentView.add(contentText);
contentView.add(contentPhoto);
mainWindow.add(previousView); 
mainWindow.add(nextView);
mainWindow.add(contentView);
mainWindow.open();