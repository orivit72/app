$(function(){
	$('.menu-btn').click(function(){
		$('.menu-btn').toggleClass('active');
		$('.menu').toggleClass('show');
		$('.menu_nav').toggleClass('show');
		$('.menu_branding').toggleClass('show');
		$('.menu_nav-item').toggleClass('show');
	});

});	
	$("form").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "mail.php", //Change
		data: th.serialize()
	}).done(function() {
		$(th).find('.tnx').addClass('active').css('display', 'flex').hide().fadeIn();
		setTimeout(function() {
			// Done Functions
			$(th).find('.tnx').removeClass('active').fadeOut();
			th.trigger("reset");
			}, 3000);
		});
		return false;
	});
