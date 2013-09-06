
$.table.addEventListener("click", function(e){
	var name = e.row.tag;
	var view = Alloy.createController(name).getView();

	Alloy.Globals.Slider.openView(view);
});