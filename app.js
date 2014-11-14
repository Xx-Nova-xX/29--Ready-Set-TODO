(function( window ) {
	'use strict';

$("#filters").click(function() {
	$('.active, .completed').show();
});

$('#filters .active').click(function() {
	$('.active').show();
	$('#todo-list .completed').hide();
	return false;
});

$('#filters .completed').click(function() {
	$('.completed').show();
	$('#todo-list .active').hide();
	return false;
});

})( window );
