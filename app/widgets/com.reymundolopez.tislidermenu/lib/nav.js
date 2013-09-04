var views = [];
var mainContainer = null;


exports.open = function(params){
	var params = params || {};
	var view = params.view;

	mainContainer.remove($.currentView());
	mainContainer.add(view);

	views.push(view);
};

exports.close = function(params){
	var params = params || {};
};

exports.home = function(){

};

exports.currentView = function(){
	return views[views.length - 1];
}

exports.setMainContainer = function(container){
	mainContainer = container
};