
Alloy.Globals.Slider = Alloy.createWidget("com.reymundolopez.tislidermenu", { win : $.Win });

var menu = Alloy.createController("menu").getView();
var content = Alloy.createController("main").getView();

Alloy.Globals.Slider.addMenu(menu);
Alloy.Globals.Slider.addContent(content);

$.Win.open();