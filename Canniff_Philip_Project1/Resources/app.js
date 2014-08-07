var stringArray = ["Hello", "Goodbye", "Hola", "Adios", "Peace"];
var mainWindow = Ti.UI.createWindow({
	title: "Project 1",
	backgroundColor: "#ccc",
});
var nextView = Ti.UI.createLabel({
	backgroundColor: "#990000",
	height: "50dp",
	width: "100dp",
	right: "30dp",
	bottom: "20dp",
	// bottom: "10dp",
	borderRadius: "5dp",
	borderColor: "#000000",
	borderWidth: "3dp",
});
var previousView = Ti.UI.createLabel({
	backgroundColor: "#990000",
	height: "50dp",
	width: "100dp",
	left: "30dp",
	bottom: "20dp",
	// bottom: "10dp",
	borderRadius: "5dp",
	borderColor: "#000000",
	borderWidth: "3dp",
});
var contentView = Ti.UI.createView({
	backgroundColor: "#fff",
	right: "30dp",
	top: "40dp",
	left: "30dp",
	bottom: "100dp",
	// bottom: "10dp",
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
	text: stringArray[0],
	color: "#000000",
	font: {fontSize: "14dp", fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "italic"}
});
previousView.add(previousText);
nextView.add(nextText);
contentView.add(contentText);
mainWindow.add(previousView);
mainWindow.add(nextView);
mainWindow.add(contentView);
mainWindow.open();
