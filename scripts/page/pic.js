$(function(){
	var elemObj = {};

    window.elemObj = elemObj;

	//图片
	function picShow(elem) {
		(function() {
			var k = elem.index();
			var index = elemObj['index' + k] || 0;
			var length = elem.find(".imgList").find("li").length;
			var i = elemObj['i' + k] || 1;
	
			//关键函数：通过控制i ，来显示图片
			function showImg(i){

                elemObj['index' + k] = i;
				
                console.log(elemObj)

				elem.find(".imgList li")
					.eq(i).addClass('cur').stop(true,true).fadeIn(800)
					.siblings("li").fadeOut(800).removeClass('cur');
				elem.find(".cbtn li")
					.eq(i).addClass("hov")
					.siblings().removeClass("hov");
			}
	
			function slideNext(){
				if(index >= 0 && index < length-1) {
					 ++index;
					 showImg(index);
				}
	
				if(i<0 || i>length-7) {return false;}
	
				elem.find(".cSlideUl ul").animate({ "left": "-=110px" },200)
				i++;
				
				elemObj['i' + k] = i;
			}
	
			function slideFront(){
			   if(index >= 1 ) {
					 --index;
					 showImg(index);
				}
				if(i<2 || i>length+7) {return false;}
					   elem.find(".cSlideUl ul").animate({ "left": "+=110px" },200)
					   i--;
					   
				elemObj['i' + k] = i;
			}
	
			elem.find(".picSildeRight,.next").off().click(function(){
				   slideNext();
			})
			elem.find(".picSildeLeft,.front").off().click(function(){
				   slideFront();
			})
	
			elem.find(".cbtn li").off().click(function(){
				index  =  $(this).index();
				showImg(index);
			});
	
			elem.find(".imgList li").off().on('click', function() {
				$(document.body).addClass('lightBox');
			})
	
			elem.find('.imgclose').on('click', function() {
				$(document.body).removeClass('lightBox');
			})
		}())
	};
	
	picShow($('.picBox').find('.picTabCon').eq(0));

	//选项卡
	(function() {
		$('.picTabTitle').on('click', 'a', function() {
			var self = $(this),
				elem = self.parents('.picContainer').find('.picTabCon').eq(self.index());

			self.addClass('cur').siblings('a').removeClass('cur');
			elem.show().siblings('.picTabCon').hide();
			
			if (self.parents('.picContainer').hasClass('picBox')) {
				picShow(elem);		
			}
		});
	}())
})
