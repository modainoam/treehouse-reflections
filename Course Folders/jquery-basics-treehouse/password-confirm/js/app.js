//Messages pop up constantly instead of when there is a problem

// 2.If the passwords match -> hide bubble
var $password = $("#password");
var $confirm_password = $("#confirm_password");
var $length_validation = $password.siblings("span");
var $similarity_validation = $confirm_password.siblings("span");

function confirm_length(){
  console.log("confiriming length");
  if ($password.val().length <= 8) {
    $length_validation.show('slow');
  } else {
    // 1.1 If the password is short again -> show bubble
    $length_validation.hide('slow');
  }
};

function confirm_similarity(){
  if ($password.val().length <= 8 || $password.val() !== $confirm_password.val() ) {
    $similarity_validation.show('slow');
  } else {
    $similarity_validation.hide("slow");
  }
};

function confirm_password(){
    confirm_length();
    confirm_similarity();
};

// 1.If the password is more than 8 chars -> hide bubble 1
$password.on("click",confirm_password).keyup(confirm_password)   ;
// If the passwords don't match, show bubble
$confirm_password.change(confirm_password).keyup(confirm_password);
