$(window).on('resize',function() {
	$("body").css("margin-bottom", $(".footer").outerHeight());
		
	if($(window).width() > 768){
		var $countHeight = $(window).height()-$(".header").outerHeight()-$(".footer").outerHeight();
		$(".index-main").outerHeight($countHeight);
	
		var $logoMargin= ($countHeight - $(".index-logo").outerHeight() ) / 2;
		$(".index-logo").css("margin-top", $logoMargin);
		
		var $loginMargin= ($countHeight - $(".index-login").outerHeight() ) / 2;
		$(".index-login").css("margin-top", $loginMargin);
	}else {
		
		$(".index-main").outerHeight("auto");
		
		$(".index-logo, .index-login").css("margin-top", "");
	}
});
$(document).ready(function() {
    $(window).trigger('resize');
});