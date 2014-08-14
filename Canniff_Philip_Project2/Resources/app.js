var mainWindow = Ti.UI.createWindow({fullscreen:true, title: "Allies & Axis", backgroundColor: "#fff",});
var tableWindow = Ti.UI.createWindow({fullscreen:true, title: "Diplomacy", backgroundColor: "#fff",}); 
var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});
var diplomacy = {
	"alliedData": {
		"objs": [
			{
				"leader": "Elizabeth",
				"country": "Great Britain"
			},
			
		
			{
				"leader": "Kennedy",
				"country": "U.S. America"
			}
		]
	},
	"axisData": {
		"objs": [
			{
				"leader": "Stalin",
				"country": "U.S.S.R."
			},
			{
				"leader": "Castro",
				"country": "Cuba"
			}
		]
	}
};

// var loadFile = require("json");
// console.log(loadFile);

var allyButton = Ti.UI.createButton({
	backgroundColor: "transparent",
	height: "75dp",
	width: "75dp",
	bottom: "50dp",
	backgroundImage: "Red.png",
});
var axisButton = Ti.UI.createButton({
	backgroundColor: "transparent",
	height: "75dp",
	width: "75dp",
	Top: "50dp",
	backgroundImage: "Red.png",
});
var allyText = Ti.UI.createLabel({
	text: "Allies",
	color: "#fff",
	font: {fontSize: "14dp", fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "italic"}
});
var axisText = Ti.UI.createLabel({
	text: "Axis",
	color: "#fff",
	font: {fontSize: "14dp", fontFamily: "Helvetica", fontWeight: "bold", fontStyle: "italic"}
});

var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor:"#ccc",
		title: this.title,
		fullscreen: true,
	});
	var detailText = Ti.UI.createLabel({
		font: {fontSize: "18dp", fontFamily: "Helvtica",},
		color: "#000" ,
		text: this.country,
	});
	detailWindow.add(detailText);
	detailWindow.open();
	
	detailWindow.addEventListener("click", function(){
		this.close();
	});
};

allyButton.addEventListener("click", function(){
	navWindow.openWindow(tableWindow);
});

var axis = Ti.UI.createTableViewSection({
	headerTitle: "Axis",
	footerTitle: "Opponents"
	
});
for(var i = 0, j=diplomacy.axisData.objs.length;i<j; i++){
	
	var theRow = Ti.UI.createTableViewRow({
		title: diplomacy.axisData.objs[i].leader,
		font: {fontSize: "14dp", fontFamily: "Helvtica"},
		color: "#000",
		height: "32dp",
		hasDetail: true,
		country: diplomacy.axisData.objs[i].country
	});
	axis.add(theRow);
	theRow.addEventListener("click", getDetail);
};

var allied = Ti.UI.createTableViewSection({
	headerTitle: "Allies",
	footerTitle: "Friendlies"
	
});
for(var i = 0, j=diplomacy.alliedData.objs.length;i<j; i++){
	
	var theRow = Ti.UI.createTableViewRow({
		title: diplomacy.alliedData.objs[i].leader,
		font: {fontSize: "14dp", fontFamily: "Helvtica"},
		color: "#000",
		height: "32dp",
		hasDetail: true,
		country: diplomacy.alliedData.objs[i].country
	});
	allied.add(theRow);
	theRow.addEventListener("click", getDetail);
};

var tableView = Ti.UI.createTableView({
	data: [allied, axis],
	style: Ti.UI.iPhone.TableViewStyle.PLAIN,
});

if(Ti.Platform.osname === "iphone"){
	tableView.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
};

axisButton.add(axisText);
allyButton.add(allyText);
mainWindow.add(allyButton, axisButton);
tableWindow.add(tableView);
navWindow.open();
