(function( window ) {
	'use strict';

$("#filters").click(function() {  /*All function*/
	$('.active, .completed').show();
});

$('#filters .active').click(function() { /*Active function*/
	$('.active').show();
	$('#todo-list .completed').hide();
	return false;
});

$('#filters .completed').click(function() { /*Completed function*/
	$('.completed').show();
	$('#todo-list .active').hide();
	return false;
});

})( window );
