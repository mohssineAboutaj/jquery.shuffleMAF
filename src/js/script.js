$(function () {

	// trigger jquery.shuffleMAF plugin
	$('#fade').shuffleMAF({
		effect: 'fade'
	});
	$('#opacity').shuffleMAF({
		effect: 'opacity'
	});

	// make element height == this.width
	$('.h-equal-w').each(function(){
		$(this).height($(this).width());
	});


	// show real year on footer
	$('#thisYear').html(new Date().getFullYear());
});