//problem - navbar doesn't look good on small devices

//create a select dropdown menu
  //create an option by cycling through the links
  var $select_nav = $("<select id='nav-select'></select>");
  $("#menu").append($select_nav);

  $("#menu ul li").each(function() {
    //Retrieve info from li
    optionStr = $(this).text();
    optionLink = $(this).children("a").attr("href");
    $option = $("<option/>");
    $option.attr({'value':optionLink}).text(optionStr);
    console.log($(this).attr("class"));
    if ($(this).hasClass("selected")) {
      console.log($(this).text());
      $option.prop('selected', true);
    };
    //Make button point to link
    $select_nav.append($option);
  });

$select_nav.change(function(){
  window.location.replace($select_nav.val());
});
