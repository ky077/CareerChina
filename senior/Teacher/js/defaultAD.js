	$(function(){
		//set adpic bg&link
		var $adLinks = ["default.html",
						"http://career.ntnu.edu.tw/",
						"http://career.ntnu.edu.tw/senior/Default.aspx"];
		$("ul.adpic li").each(function(){
			$_index = $(this).index()+1;
			$(this).css("background-image","url(images/temp_ad"+ $_index +".jpg)");
			$(this).find("a").attr("href",$adLinks[$_index-1]);
		});
		
		
		var $block = $('.defaultAD'), 
			timrt, speed = 3000;
			
		var $li = $('.ad ul li', $block).click(function(){
			var $this = $(this);
			$this.add($('.bd .info', $block).eq($this.index())).addClass('on').siblings('.on').removeClass('on');
		});
		
		$(".adpic .info a").hover(function(){
			clearTimeout(timer);
		}, function(){
			timer = setTimeout(move, speed);
		});
		
		function move(){
			var _index = $('.ad ul li.on', $block).index();
			_index = (_index + 1) % $li.length;
			$li.eq(_index).click();

			timer = setTimeout(move, speed);
		}
		timer = setTimeout(move, speed);
	});