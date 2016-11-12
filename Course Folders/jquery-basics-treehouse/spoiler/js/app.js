// prevent spoilerphobes from seeing spoilerphobes
// solution hide spoilers and reveal them through user interaction

//hide spoiler
$(".spoiler span").hide();
//show button
$(".spoiler").append("<button>Show Spoiler!</button>");
//when button clicked
$("button").click( function() {
  $(".spoiler span").show();
  $(this).remove();
}


)
  //show spoiler
  //hide button
