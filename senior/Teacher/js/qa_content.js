$(function(){
	$(".qaContent > ul li .qa_title").click(function(){
		$(".qa_title").removeClass("qa_title_on");
		$(this).addClass("qa_title_on");
		
		var $qa_content = $(this).next(".qa_content");
		if(!$qa_content.is(":visible")){
			$(".qaContent > ul li .qa_content:visible").slideUp();
		}
		$qa_content.slideToggle();
	}).siblings().addClass("qa_content").hide().parent;;
});