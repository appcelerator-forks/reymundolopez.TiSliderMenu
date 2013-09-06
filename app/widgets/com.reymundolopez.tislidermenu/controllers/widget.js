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
	if(nav.isLastView()){
		$.toggle();
	}else{
		nav.back();
	}
		
});

$.toggle = function(e){
	if(!isOpen){
		$.MovableView.animate(animation);
	}else{
		$.MovableView.animate(resetAnimation);
	}

	isOpen = !isOpen;
};

$.setTitle = function(title){
	var title = title || "";
	$.Title.text = title;
};

$.addMenu = function(view){
	var view = view || Ti.UI.createView();
	$.MenuView.add(view);
};

$.addContent = function(view){
	var view = view || Ti.UI.createView();
	nav.open({view : view});
};

$.openView = function(view){
	var view = view || Ti.UI.createView();
	nav.open({view : view});
}

$.backView = function(){
	nav.back();
}
