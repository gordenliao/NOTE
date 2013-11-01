$(function(){
	var $MU_PG=$('#page');
	$("#screen1").backstretch("images/s1.jpg");
	$("#screen3").backstretch("images/s2.jpg");
	$(window).stellar({
		horizontalScrolling: false,
		verticalOffset: 0,
		horizontalOffset: 0
	}).scroll(function(){
		var scrollVal = $(this).scrollTop();
		if(scrollVal<500){
			 $MU_PG.fadeOut(200);
		}else{
			 $MU_PG.fadeIn(200);	
		}
	});
	 $MU_PG.find('li').click(function(){
		var N=$(this).index()+1;
		$('html,body').animate({
			scrollTop:(0+N*1000)
		});
	});
});