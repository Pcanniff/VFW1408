var loadFile = require("json");
var tableArray = [];

var getDetail = function(item) {
	var detailWindow = Ti.UI.createWindow({
		backgroundImage : item.detail,
		backgroundColor: "#fff",
		barColor: "#FF9900",
		title: item.title,
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
	var detailView = Ti.UI.createView({
		height: 140,
		width: 140,
		top: 30,
		right: 20,
		backgroundImage: "/images/label.png"
		
	});
	var detailText = Ti.UI.createLabel({
		left: item.left,
		font : {
			fontSize : "13dp",
			fontFamily : "American Typewriter",
			fontStyle : "Bold",
		},
		color : "#fff",
		text : item.style,
		
		
	});
	detailWindow.add(detailView);
	detailView.add(detailText);
	nav.openWindow(detailWindow);

	detailWindow.addEventListener("click", function() {
		this.close();
	});
};
for (n in loadFile.data) {
	var tableSection = Ti.UI.createTableViewSection({
		headerTitle : loadFile.data[n].header,
		footerTitle : loadFile.data[n].footer

	});
	tableArray.push(tableSection);
	for (var i = 0; i < loadFile.data[n].objs.length; i++) {
		var theRow = Ti.UI.createTableViewRow({
			title : loadFile.data[n].objs[i].recipe,
			color : loadFile.data[n].objs[i].color,
			hasDetail : true,
			style : loadFile.data[n].objs[i].style,
			detail: loadFile.data[n].objs[i].detail,
			left: loadFile.data[n].objs[i].left
		});
		
		tableSection.add(theRow);
		
	};

};

var tableView = Ti.UI.createTableView({
	backgroundColor: "#fcbd35",
	data : tableArray,
	style : Ti.UI.iPhone.TableViewStyle.PLAIN,
});

var randomize = function(){
	
	n = Math.floor(Math.random() * 10);
	if ( n !== prev){
		
	 	viewImage.image = images[n];
	 	
	} else {
		
		randomize();
	}
	prev = n;
	
	
};
viewImage.addEventListener("click", function(){
	randomize();
	//n = Math.floor(Math.random() * 10);
});
tableView.addEventListener("click", function(evt) {
	getDetail(evt.source);
});
tableWindow.add(tableView);

buttonOne.addEventListener("click", function() {
	nav.openWindow(tableWindow);
});
buttonTwo.addEventListener("click", function() {
	var j = Math.floor(Math.random() * 10);
	nav.openWindow(randomWindow);
});
buttonThree.addEventListener("click", function(){
	customContainer.add(customImage);
	customWindow.add(customContainer);
	customWindow.add(slider);
	nav.openWindow(customWindow);
	
});

randomWindow.add(viewContainer);
randomWindow.add(randomLabel);
viewContainer.add(viewImage);
win.add(logoImage);
win.add(buttonOne);
win.add(buttonTwo);
win.add(buttonThree);
win.add(footer);