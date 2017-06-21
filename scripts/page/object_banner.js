$(function() {
	//banner动画
	(function(){
			
		//设置是否自动轮播 0是不轮播 1是轮播
		var autoShow = 1,
            banner = $(".object_banner"),
		    list = banner.find("li"),
            index = 0,
            len = list.length,
            num = $(".object_banner").find('.nums').find("a");

		var s = {
			turn: function() {
				list.eq(index).fadeIn(1200).siblings().fadeOut(1200);
				num.eq(index).addClass("cur").siblings().removeClass();
		    },
			next: function() {
				index >= len-1 ? index = 0 : index++;
				s.turn();
			},
			pre: function() {
				index >0 ? index-- : index = len-1;
				s.turn();
			}
		};
		
		if(autoShow){
			var x = setInterval(s.next, 3000);
			$(".object_banner").hover(function() {
				clearInterval(x);
			}, function() {
				x = setInterval(s.next, 3000);
			});
		}

		num.click(function(){
			if(!list.is(":animated")){
				index = $(this).index();
				s.turn();	
			}	
		})
	}());
	
});

