var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "images");
var galleryList = gallery.getDirectoryListing();
var numberOfViews = galleryList.length;
var platWidth = Ti.Platform.displayCaps.platformWidth;
var spacing = 2;
var rowCount = 4;
var size = (platWidth - (spacing * (rowCount + 1))) / rowCount;

Ti.UI.setBackgroundColor("#fff");

var win = Ti.UI.createWindow({
	backgroundColor : "#333",
	//layout: "horizontal",
	top : 20,
});
var viewContainer = Ti.UI.createScrollView({
	width : platWidth,
	contentWidth : platWidth,
	layout : "horizontal",
	scrollVerticalIndicator : true
});

var loadFile = require("operations");