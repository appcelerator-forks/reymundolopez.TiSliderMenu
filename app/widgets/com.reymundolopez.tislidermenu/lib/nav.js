var views = [];
var mainContainer = null;


exports.open = function(params){
	var params = params || {};
	var view = params.view;

	if(views.length > 0){
		var currentV = exports.currentView();
		mainContainer.remove(currentV);
		views = [];
	}
	mainContainer.add(view);
	views.push(view);
};

exports.openDetail = function(params){
	var params = params || {};
	var view = params.view;

	
	if(views.length > 0){
		var currentV = exports.currentView();
		mainContainer.remove(currentV);	
	}
	
	mainContainer.add(view);

	views.push(view);
};

exports.back = function(){
	exports.close();
};

exports.close = function(params){
	var params = params || {};
	
	var view = views.pop();
	
	mainContainer.remove(view);
	mainContainer.add(views[views.length - 1]);
};

exports.home = function(){
	// TODO: Implement HOME function
};

exports.currentView = function(){
	var length = views.length;

	var view = (length > 0) ? views[length - 1] : views[0];

	return view;
}

exports.setMainContainer = function(container){
	mainContainer = container;	
};

exports.isLastView = function(){
	return (views.length <= 1);
}