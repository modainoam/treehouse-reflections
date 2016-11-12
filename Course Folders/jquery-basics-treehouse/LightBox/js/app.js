//Problem: User when clicking gets to a img page
//Show a lightbox using an overlay of the large image
//2.Add overlay

var $overlay = $('<div class="overlay"></div>');
var $image = $('<img>');
var $caption = $("<p></p")
$overlay.append($image);
$("body").append($overlay);
$overlay.append($caption);
$overlay.hide();

  //2.1 An image
  //2.2 A caption

//1.Capture the click event on a link to an image
$("#image-gallery a").click( function(event){
  event.preventDefault();
  var imgLocation = $(this).attr("href");
  var imgText = $(this).children("img").attr("alt");
  $('.overlay img').attr("src",imgLocation);
  $caption.text(imgText);
  $overlay.show("slow");
});
  //1.1 Show overlay
  //1.2 Update overlay with the image linked in the link
  //1.3Get child's alt attribute and set caption

//3 When overlay clicked hide overlay
$overlay.click(function(){
  $(this).hide();
});
