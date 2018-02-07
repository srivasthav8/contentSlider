$(document).ready(function(){


	
	 // set options

	 var speed= 500; // fade speed
	 var autoswitch=true; //auto slider option
	 var autoswitch_speed=4000; // auto slider option


	 //add initial class

	 $('.slide').first().addClass('active');

	 // hide the slides

	 $('.slide').hide();

	 //show the first slide

	 $('.active').show();

	 $('#next').on('click',nextSlide);

	 $('#prev').on('click',prevSlide);

	 if(autoswitch==true){
	 	setInterval(nextSlide,autoswitch_speed);
	 }

	 function nextSlide(){
	 	$('.active').removeClass('active').addClass('oldActive');
	 	if($('.oldActive').is(':last-child')){
	 		$('.slide').first().addClass('active');

	 	} else{
	 		$('.oldActive').next().addClass('active');
	 	}

	 	$('.oldActive').removeClass('oldActive');
	 	$('.slide').fadeOut(speed);
	 	$('.active').fadeIn(speed);
	 }

	 function prevSlide(){
	 	$('.active').removeClass('active').addClass('oldActive');
	 	if($('.oldActive').is(':first-child')){
	 		$('.slide').last().addClass('active');
	 	}else{
	 		$('.oldActive').prev().addClass('active');
	 	}

	 	$('.oldActive').removeClass('oldActive');
	 	$('.slide').fadeOut(speed);
	 	$('.active').fadeIn(speed);

	 }
});