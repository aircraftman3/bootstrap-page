$(document).on('click', '#submit-button', function(){
  var x = document.getElementById('inlineFormInputName').value;
  $("#form2").show();
  $('#input-name').text('Welcome ' + x + '...');
});
