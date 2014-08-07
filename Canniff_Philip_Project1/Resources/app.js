var stringArray = ["Hello", "Goodbye", "Hola", "Adios", "Peace"];

var mainWindow = Ti.UI.createWindow({
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
	borderColor: "#0000000",
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
	borderColor: "#0000000",
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
	borderColor: "#0000000",
	borderWidth: "3dp",
});

var next = Ti.UI.createLabel({
	text: "Next",
	color: "#000000",
	font: {fontSize: "14dp", fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "italic"}

});

var previous = Ti.UI.createLabel({
	text: "Previous",
	color: "#000000",
	font: {fontSize: "14dp", fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "italic"}

});
var contentText = Ti.UI.createLabel({
	text: stringArray[0],
	color: "#000000",
	font: {fontSize: "14dp", fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "italic"}

});


mainWindow.open();
previousView.add(previous);
mainWindow.add(previousView);
nextView.add(next);
mainWindow.add(nextView);
mainWindow.add(contentView);
contentView.add(contentText);
