﻿$(function(){
	$('.Menu').smint();
	$('#nav li').children('a').hover(function(){
		$(this).siblings('a').slideDown(100);
		var changeColor = this;
		this.timer = setTimeout(function(){
		$(changeColor).css({'color':'white'});
	},100);}
    ,function(){
		if(this.timer) clearTimeout(this.timer);
		$(this).siblings('a').slideUp(100);
		$(this).css({'color':'#75878a'});
	});
  // 给 window 对象绑定 scroll 事件
  $(window).bind("scroll", function(){

      // 获取网页文档对象滚动条的垂直偏移
      var scrollTopNum = $(document).scrollTop(),
          // 获取浏览器当前窗口的高度
          winHeight = $(window).height(),
          returnTop = $("div.returnTop");

      // 滚动条的垂直偏移大于 0 时显示，反之隐藏
      (scrollTopNum > 0) ? returnTop.fadeIn("fast") : returnTop.fadeOut("fast");

      // 给 IE6 定位
      if (!-[1,]&&!window.XMLHttpRequest) {
          returnTop.css("top", scrollTopNum + winHeight - 200);
      }

  });

  // 点击按钮后，滚动条的垂直方向的值逐渐变为0，也就是滑动向上的效果
  $("div.returnTop").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 100);
  });
});
