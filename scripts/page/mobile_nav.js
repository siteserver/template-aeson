$(function() {
	$('.mobile_menu').on('click', function() {
		$('.mobile_nav').toggle();	
	})
	
	$('.mobile_nav').on('click', '.mobile_nav_t', function() {
		var li = $(this).parents('li');
		
		if (li.hasClass('cur')){
			li.removeClass('cur');
		} else {
			li.addClass('cur').siblings('li').removeClass('cur');
		}
	})
	
	$('#nav').find('td').on('mouseover', function() {
		$(this).find('ul').stop().slideDown(400).siblings('ul').stop().slideUp(400);	
	}).on('mouseout', function() {
		$(this).find('ul').stop().slideUp(400);
	})
})