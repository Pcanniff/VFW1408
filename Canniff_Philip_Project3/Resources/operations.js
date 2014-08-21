var makeViews = function(num) {
	for (var i = 0, j = num; i < num; i++) {
		var newView = Ti.UI.createView({
			top : spacing,
			left : spacing,
			backgroundColor : "#fff",

			width : size,
			height : size,
			borderRadius : 20

		});

		var newImage = Ti.UI.createImageView({
			width : size + 30,
			image : "/images/" + galleryList[i],
			borderRadius : 0

		});
		newView.add(newImage);
		viewContainer.add(newView);
	}
};

makeViews(numberOfViews);
win.open();
win.add(viewContainer);