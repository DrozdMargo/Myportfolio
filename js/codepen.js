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


