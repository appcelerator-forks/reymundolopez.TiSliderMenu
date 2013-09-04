
var widget = Alloy.createWidget("com.reymundolopez.tislidermenu", { win : $.Win });

var menu = Alloy.createController("menu").getView();
var content = Alloy.createController("main").getView();

widget.addMenu(menu);
widget.addContent(content);

$.Win.open();