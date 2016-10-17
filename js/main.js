	
$(document).ready(function() {
	
	$(".fancybox").fancybox({
		'transitionIn'	:	'elastic',
		
	});
});

$(document).ready(function(){
	$('.progress-bar').each(function(){
		$(this).find('.bar').animate({
			width:$(this).attr('data-percent')
		},900);
	});

	$('.progress-bar').each(function(){
		$(this).find('.text').animate({
			left:$(this).attr('data-percent')
		},900);
	});
});

$(document).ready(function(){

		$('header span').addClass('fadeInUp boxVisible');
	


		$('.text').waypoint(function() {
		$(this).addClass('animated fadeInLeft boxVisible');
	}, {
		offset:'100%'
	}); 

		$('.bar').waypoint(function() {
		$(this).addClass('animated fadeInLeft boxVisible');
	}, {
		offset:'90%'
	}); 


	$('.goto-bio').waypoint(function() {
		$(this).addClass('animated zoomInRight boxVisible');
	}, {
		offset:'80%'
	});

	$('.box1').waypoint(function(dir) {
		if( dir === 'down')
		$(this)
	.removeClass('fadeOutLeft')
	.addClass('fadeInRight');
	else
		$(this)
	.removeClass('fadeInRight')
	.addClass('fadeOutLeft');
	}, {
		offset:'80%'
	})
	.waypoint( function(dir) {
		if ( dir === 'down')
			$(this)
				.removeClass('fadeInRight')
				.addClass('fadeOutLeft');
		else
			$(this)
				.removeClass('fadeOutLeft')
				.addClass('fadeInRight');
	},{
		offset: -450
	});
	
$('.box2').waypoint(function(dir) {
		if( dir === 'down')
		$(this)
	.removeClass('fadeOutRight')
	.addClass('fadeInLeft');
	else
		$(this)
	.removeClass('fadeInLeft')
	.addClass('fadeOutRight');
	}, {
		offset: '90%'
	})
	.waypoint( function(dir) {
		if ( dir === 'down')
			$(this)
				.removeClass('fadeInLeft')
				.addClass('fadeOutRight');
		else
			$(this)
				.removeClass('fadeOutRight')
				.addClass('fadeInLeft');
	},{
		offset: -20
	});

	$('.box').waypoint(function(dir) {
		if( dir === 'down')
		$(this)
	.removeClass('fadeOutDown')
	.addClass('fadeInUp');
	else
		$(this)
	.removeClass('fadeInUp')
	.addClass('fadeOutDown');
	}, {
		offset:'70%'
	})
	.waypoint( function(dir) {
		if ( dir === 'down')
			$(this)
				.removeClass('fadeInUp')
				.addClass('fadeOutDown');
		else
			$(this)
				.removeClass('fadeOutDown')
				.addClass('fadeInUp');
	},{
		offset: -20
	});

	$('.box3').waypoint(function(dir) {
		if( dir === 'down')
		$(this)
	.removeClass('fadeOutDown')
	.addClass('fadeInUp');
	else
		$(this)
	.removeClass('fadeInUp')
	.addClass('fadeOutDown');
	}, {
		offset:'80%'
	})
	.waypoint( function(dir) {
		if ( dir === 'down')
			$(this)
				.removeClass('fadeInUp')
				.addClass('fadeOutDown');
		else
			$(this)
				.removeClass('fadeOutDown')
				.addClass('fadeInUp');
	},{
		offset: -380
	});
});

$('#toggle').click(function() {
   $(this).toggleClass('active');
   $('#overlay').toggleClass('open');
   $("overlay").fadeToggle();
   // $("#overlay").removeClass("open");
  });

$("li").click(function(){
	// $(this).toggleClass("active");
	$("#overlay").removeClass("open");
	$(".button_container").removeClass("active");
});
