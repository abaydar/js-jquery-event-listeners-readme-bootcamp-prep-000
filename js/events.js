//define functions here
function getIt(){$('p').on("click", function(){alert("Hey!")})}
function frameIt(){$('img').on("load", function(){$('img').addClass("tasty")})}
function pressIt(){$('#typing').on('keydown', function(press){if (press.which === 71){alert('G was pressed')}})}
function submitIt(){$("form").on("submit", function(){alert('your form is going to be submitted now'); return;})}

$(document).ready(function(){

// call functions here

});
