//Change selection of colors according to click
var $color_picker = $("div.controls");
var color = $color_picker.find("ul li.selected").css("background-color");
var ctx = $("canvas")[0].getContext("2d");
var $canvas = $("canvas");
var lastEvent;
var isMouseDown = false;

// Updates the currently selected button
function update_selected_button(){
  var $color_buttons = $color_picker.find("ul li");
  $(this).siblings().removeClass("selected")
  $(this).addClass("selected");
  color = $(this).css("background-color");
};

// Binds click to selection
function bindColorPicker() {
  $color_picker.find("ul li").click(function() {
    update_selected_button.call(this);
    color = $(this).css("background-color");
  });
};
bindColorPicker();

// When New Color is pressed, show/hide color select
$("#revealColorSelect").click(function(){
  $("#colorSelect").toggle("slow");
});

// Display current color in #revealColorSelect
var $colorSliders = $(".sliders");
var $addButton = $("#addNewColor");
var newColorsCnt = 0;
var $revealColor = $("#newColor");

function revealColor() {
  var red = $colorSliders.find('#red').val();
  var green = $colorSliders.find('#green').val();
  var blue = $colorSliders.find('#blue').val();
  var rgb = "rgb(" + red + "," + green + "," + blue + ")"
  $revealColor.css( "background-color",  rgb );
};
revealColor();

$colorSliders.find("input").change(revealColor);

// When Add color is pressed, add selected color if it doesn't exist

function pick_color(){
  newColorsCnt += 1
  var $newColor = $("<li></li>");
  // Get new color value
  var red = $colorSliders.find('#red').val();
  var green = $colorSliders.find('#green').val();
  var blue = $colorSliders.find('#blue').val();
  var rgb = "rgb(" + red + "," + green + "," + blue + ")"
  $newColor.addClass("color-" + newColorsCnt);
  $newColor.css( "background-color",  rgb );
  // Add color to list
  $color_picker.children("ul").append($newColor);
  bindColorPicker();
  // Select new color
  $newColor.click();
};

$addButton.click(pick_color);

$canvas.mousedown(function(e){
  lastEvent = e;
  isMouseDown = true;
}).mousemove(function(e){
  if (isMouseDown) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.moveTo(lastEvent.offsetX ,lastEvent.offsetY);
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    lastEvent = e;
  }
}).mouseup(function(){
  isMouseDown=false;
}).mouseleave(function(){
  isMouseDown=false;
})
;
