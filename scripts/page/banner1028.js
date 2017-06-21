$(function() {
	//banner动画
	(function(){
			
		//设置是否自动轮播 0是不轮播 1是轮播
		var autoShow = 1,
            banner = $(".banner"),
		    list = banner.find("li"),
            index = 0,
            len = list.length,
            num = $(".banner").find('.nums').find("a");

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
			$(".banner").hover(function() {
				clearInterval(x);
			}, function() {
				x = setInterval(s.next, 3000);
			});
		}
		
		$(".leftBtn").click(function(){
			if(!list.is(":animated")){
				s.pre();	
			}
			return false;
		});
		$(".rightBtn").click(function(){
			if(!list.is(":animated")){
				s.next();	
			}
			return false;
		});

		num.click(function(){
			if(!list.is(":animated")){
				index = $(this).index();
				s.turn();	
			}	
		})
	}());
	
	if ($(window).innerWidth() < 540) {
		$('.prodList').on('click', '.prodBox', function() {
			$(this).toggleClass('active');	
		})
	} else {
		$('.prodList').on('mouseover', '.prodBox', function() {
			$(this).addClass('active');	
		}).on('mouseout', '.prodBox', function() {
			$(this).removeClass('active');	
		})	
	}
});

