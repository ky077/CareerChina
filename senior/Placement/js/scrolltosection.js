$(function(){
	$(".btnToSection").click(function(event){
		event.preventDefault();
		$goSection = $(this).attr("href").slice(1);
		$('html,body').animate({scrollTop:$('a[name='+$goSection+']').offset().top}, 800);
	});
});