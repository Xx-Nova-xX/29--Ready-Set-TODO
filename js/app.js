(function( window ) {
	'use strict';

$("#filters").click(function() {
	$('.active, .completed').show();
	console.log("1st");
});

$('#filters .active').click(function(e) {
	$('.active').show();
	$('.completed').hide();
	console.log("2nd");
	return false;
});

$('#filters .completed').click(function(e) {
	$('.completed').show();
	$('.active').hide();
	console.log("3rd");
	return false;
});

})( window );
