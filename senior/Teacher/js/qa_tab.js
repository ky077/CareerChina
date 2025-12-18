  $(function(){
	var _showTab = 0;

	$(".QAtab > ul.tabs li").click(function() {
		var _clickTab = $(this).find("a").attr("href");
		$(this).addClass("active").siblings(".active").removeClass("active");
		$(_clickTab).stop(false, true).fadeIn().siblings().hide();
		return false;
	}).find("a").focus(function(){
		this.blur();
	});
});