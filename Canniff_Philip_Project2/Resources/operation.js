var loadFile = require("json");
var listArray = [];
var tableArray = [];

var getDetail = function(item) {
	var detailWindow = Ti.UI.createWindow({
		backgroundImage : item.detail,
		backgroundColor: "#fff",
		barColor: "#996633",
		title: item.country,
		titleAttributes: {
			color : "#fff",
			font : {
				fontSize : "20dp",
				fontFamily : "Helvetica",
				fontWeight : "bold",
				fontStyle : "italic"
			}
	},
		fullscreen : false,
		
	});
	var detailText = Ti.UI.createLabel({
		font : {
			fontSize : "24dp",
			fontFamily : "Helvetica",
		},
		color : item.colorDetail,
		text : item.country,
		
		
	});
	detailWindow.add(detailText);
	navWindow.openWindow(detailWindow);

	detailWindow.addEventListener("click", function() {
		this.close();
	});
};
for (n in loadFile.diplomacy) {
	var tableSection = Ti.UI.createTableViewSection({
		headerTitle : loadFile.diplomacy[n].header,

	});
	var listSection = Ti.UI.createListSection({
		headerTitle : loadFile.diplomacy[n].header,

	});
	listArray.push(listSection);
	tableArray.push(tableSection);
	for (var i = 0; i < loadFile.diplomacy[n].objs.length; i++) {
		var diplomatArray = [];
		var theRow = Ti.UI.createTableViewRow({
			title : loadFile.diplomacy[n].objs[i].leader,
			color : "#000",
			hasDetail : true,
			country : loadFile.diplomacy[n].objs[i].country,
			detail: loadFile.diplomacy[n].objs[i].detail,
		});
		var diplomats = {
			properties : {
				selectionStyle : Ti.UI.iPhone.ListViewCellSelectionStyle.BLUE,
				title : loadFile.diplomacy[n].objs[i].leader,
				country : loadFile.diplomacy[n].objs[i].country,
				image : loadFile.diplomacy[n].objs[i].photo,
				accessoryType : Ti.UI.LIST_ACCESSORY_TYPE_DETAIL,
				detail: loadFile.diplomacy[n].objs[i].detail,
				colorDetail: loadFile.diplomacy[n].objs[i].color,
			}
		};
		tableSection.add(theRow);
		diplomatArray.push(diplomats);
		listSection.appendItems(diplomatArray);

	};

};

var tableView = Ti.UI.createTableView({
	data : tableArray,
	style : Ti.UI.iPhone.TableViewStyle.PLAIN,
});

axisButton.addEventListener("click", function() {
	navWindow.openWindow(listWindow);
});
allyButton.addEventListener("click", function() {
	navWindow.openWindow(tableWindow);
});
listView.addEventListener("itemclick", function(evt) {
	var theItem = evt.section.getItemAt(evt.itemIndex);
	getDetail(theItem.properties);
});
tableView.addEventListener("click", function(evt) {
	getDetail(evt.source);
});

listView.sections = listArray;

axisButton.add(axisText);
allyButton.add(allyText);
mainWindow.add(allyButton, axisButton);
tableWindow.add(tableView);
listWindow.add(listView);
