$(document).on('click', '#submit-button', function () {
  var x = document.getElementById('inlineFormInputName').value;
  $("#form2").show();
  $('#input-name').text('Welcome ' + x + '...');
});

window.onscroll = function () {
  myFunction()
};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    navbar.classList.add("navbar2")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("navbar2");
  }
}