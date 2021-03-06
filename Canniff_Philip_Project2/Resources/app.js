
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#fff",
	fullscreen : false,
	backgroundImage: "map.png",
	barColor: "#996633",
	title : "Project 2",
	titleAttributes: {
	color : "#fff",
	font : {
		fontSize : "20dp",
		fontFamily : "Helvetica",
		fontWeight : "bold",
		fontStyle : "italic"
		}
	}
});
var tableWindow = Ti.UI.createWindow({
	fullscreen : false,
	barColor: "#996633",
	title : "Diplomacy",
	titleAttributes: {
	color : "#fff",
	font : {
		fontSize : "20dp",
		fontFamily : "Helvetica",
		fontWeight : "bold",
		fontStyle : "italic"
		}
	},
	backgroundColor : "#fff",
});
var listWindow = Ti.UI.createWindow({
	fullscreen : false,
	barColor: "#996633",
	title : "Diplomacy",
	titleAttributes: {
	color : "#fff",
	font : {
		fontSize : "20dp",
		fontFamily : "Helvetica",
		fontWeight : "bold",
		fontStyle : "italic"
		}
	},
	backgroundColor : "#fff",
});
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window : mainWindow,
	backgroundColor: "#fff"
});
var listView = Ti.UI.createListView({
	backgroundColor : "#fff"
});
var allyButton = Ti.UI.createButton({
	backgroundColor : "transparent",
	height : "75dp",
	width : "75",
	bottom : "50dp",
	backgroundImage : "Blue.png",
});
var axisButton = Ti.UI.createButton({
	backgroundColor : "transparent",
	height : "75dp",
	width : "75dp",
	Top : "50dp",
	backgroundImage : "Red.png",
});
var allyText = Ti.UI.createLabel({
	text : "Table",
	color : "#000",
	font : {
		fontSize : "14dp",
		fontFamily : "Helvetica",
		fontWeight : "bold",
		fontStyle : "italic"
	}
});
var barText = Ti.UI.createLabel({
	text : "Table",
	color : "#000",
	font : {
		fontSize : "14dp",
		fontFamily : "Helvetica",
		fontWeight : "bold",
		fontStyle : "italic"
	}
});
var axisText = Ti.UI.createLabel({
	text : "List",
	color : "#000",
	font : {
		fontSize : "14dp",
		fontFamily : "Helvetica",
		fontWeight : "bold",
		fontStyle : "italic"
	}
});
var loadFile = require("operation");
 


navWindow.open(); 