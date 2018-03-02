function setDefault() {
	$('.input').slideToggle();
};
setDefault();

var startbutton = document.createElement("Button");
startbutton.innerHTML = "Start Notebook"
startbutton.style = "font-size:20px;top:0;right:0;margin-top:10px;margin-right:180px;position:absolute;z-index: 9999;"

startbutton.onclick = function() {
	Jupyter.notebook.execute_all_cells();
}.bind(startbutton);
document.body.appendChild(startbutton);

var codebutton = document.createElement("Button");
codebutton.innerHTML = " Toggle code  "
codebutton.style = "font-size:20px;top:0;right:0;margin-top:10px;margin-right:10px;position:absolute;z-index: 9999;"

codebutton.onclick = function() {
	$('.input').slideToggle();
}.bind(codebutton);
document.body.appendChild(codebutton);

//$("#notebook-container").prepend("<div style='text-align:center'><button id='runNotebookButton' class='button' style='font-size:20px'>Start Notebook</button><button id='toggleInputCells' class='button' style='font-size:20px'>Toggle Code Display</button></div>");

//$("#runNotebookButton").click(function() {
//	Jupyter.notebook.execute_all_cells();
//});

//$("#toggleInputCells").click(function() {
//	$('.input').slideToggle();
//});
