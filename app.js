(function( window ) {
	'use strict';

$("#filters").click(function() { /*all function*/
	$('.active, .completed').show();
});

$('#filters .active').click(function() { /*active function*/
	$('.active').show();
	$('#todo-list .completed').hide();
	return false;
});

$('#filters .completed').click(function() { /*completed function */
	$('.completed').show();
	$('#todo-list .active').hide();
	return false;
});

})( window );
