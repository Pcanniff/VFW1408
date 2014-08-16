var loadFile = require("json");
var sectionArray = [];
var array = [];


var mainWindow = Ti.UI.createWindow({
	fullscreen : true,
	title : "Project 2",
	backgroundColor : "#fff",
});
var tableWindow = Ti.UI.createWindow({
	fullscreen : false,
	title : "Diplomacy",
	backgroundColor : "#fff",
});
var listWindow = Ti.UI.createWindow({
	fullscreen : false,
	title : "Diplomacy",
	backgroundColor : "#fff",
});
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window : mainWindow
});
var listView = Ti.UI.createListView({
	backgroundColor : "#fff"
});
var allyButton = Ti.UI.createButton({
	backgroundColor : "transparent",
	height : "75dp",
	width : "75dp",
	bottom : "50dp",
	backgroundImage : "Red.png",
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
	color : "#fff",
	font : {
		fontSize : "14dp",
		fontFamily : "Helvetica",
		fontWeight : "bold",
		fontStyle : "italic"
	}
});
var axisText = Ti.UI.createLabel({
	text : "List",
	color : "#fff",
	font : {
		fontSize : "14dp",
		fontFamily : "Helvetica",
		fontWeight : "bold",
		fontStyle : "italic"
	}
});

var getDetail = function(item) {
	var detailWindow = Ti.UI.createWindow({
		backgroundColor : "#ccc",
		title : item.title,
		fullscreen : false,
	});
	var detailText = Ti.UI.createLabel({
		font : {
			fontSize : "18dp",
			fontFamily : "Helvtica",
		},
		color : "#000",
		text : item.country,
	});
	detailWindow.add(detailText);
	navWindow.openWindow(detailWindow);

	detailWindow.addEventListener("click", function() {
		this.close();
	});
};
for (n in loadFile.diplomacy) {
	var section = Ti.UI.createTableViewSection({
		headerTitle : loadFile.diplomacy[n].header,

	});
	var listSection = Ti.UI.createListSection({
		headerTitle : loadFile.diplomacy[n].header,

	});
	sectionArray.push(listSection);
	array.push(section);
	for (var i = 0; i < loadFile.diplomacy[n].objs.length; i++) {
		var diplomatArray = [];
		var theRow = Ti.UI.createTableViewRow({
			title : loadFile.diplomacy[n].objs[i].leader,
			font : {
				fontSize : "14dp",
				fontFamily : "Helvtica"
			},
			color : "#000",
			height : "32dp",
			hasDetail : true,
			country : loadFile.diplomacy[n].objs[i].country,
		});
		var diplomats = {
			properties : {
				selectionStyle : Ti.UI.iPhone.ListViewCellSelectionStyle.BLUE,
				title : loadFile.diplomacy[n].objs[i].leader,
				country : loadFile.diplomacy[n].objs[i].country,
				image : loadFile.diplomacy[n].objs[i].photo,
				accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_DETAIL
			}
		};
		section.add(theRow);
		diplomatArray.push(diplomats);
		listSection.appendItems(diplomatArray);

	};

};

var tableView = Ti.UI.createTableView({
	data : array,
	style : Ti.UI.iPhone.TableViewStyle.PLAIN,
});

axisButton.addEventListener("click", function() {
	navWindow.openWindow(listWindow);
});
allyButton.addEventListener("click", function() {
	navWindow.openWindow(tableWindow);
});
listView.addEventListener("itemclick", function(evt) {
	var theItem = listSection.getItemAt(evt.itemIndex);
	getDetail(theItem.properties);
});
tableView.addEventListener("click", function(evt) {
	getDetail(evt.source);
});

listView.sections = sectionArray;

axisButton.add(axisText);
allyButton.add(allyText);
mainWindow.add(allyButton, axisButton);
tableWindow.add(tableView);
listWindow.add(listView);
navWindow.open(); 