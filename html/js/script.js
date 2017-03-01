$(function(){
	if (window.console) {
		console.info(">>Join us? Email：psd2html@qq.com");
	}		
	
	$('.way').waypoint(function(){  
			$(this).addClass('animated');
		}, { triggerOnce: true, offset: "95%" });  
})