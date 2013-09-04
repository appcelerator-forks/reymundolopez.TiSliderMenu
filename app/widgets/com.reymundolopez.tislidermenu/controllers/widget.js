var params = arguments[0] || {};
var nav = require(WPATH("nav"));

var win = params.win;

// Check if the widget was created using Alloy.createWidget
if(win){
	win.add($.Wrapper);
}

var duration = 150;
var isOpen = false;

var animation = Ti.UI.createAnimation({
	left : 250,
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : duration
});

var resetAnimation = Ti.UI.createAnimation({
	left : 0,
	curve : Ti.UI.ANIMATION_CURVE_EASE_OUT,
	duration : duration
});

nav.setMainContainer($.ContentView);


$.LeftButton.addEventListener("click", function(e){
	$.toggle();
});

exports.toggle = function(e){
	if(!isOpen){
		$.MovableView.animate(animation);
	}else{
		$.MovableView.animate(resetAnimation);
	}

	isOpen = !isOpen;
};

exports.setTitle = function(title){
	var title = title || "";
	$.Title.text = title;
};

exports.addMenu = function(view){
	var view = view || Ti.UI.createView();
	$.MenuView.add(view);
};

exports.addContent = function(view){
	var view = view || Ti.UI.createView();
	$.ContentView.add(view);
};

exports.openView = function(view){
	var view = view || Ti.UI.createView();
	nav.open({view : view});
}
