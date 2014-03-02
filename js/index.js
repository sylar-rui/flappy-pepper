$(function(){
	$('.Menu').smint();
	$('#nav li').children('a').hover(function(){
		$(this).siblings('span').slideDown(100);
		var changeColor = this;
		this.timer = setTimeout(function(){
		$(changeColor).css({'color':'#fff'});
	},100);},function(){
		if(this.timer) clearTimeout(this.timer);
		$(this).siblings('span').slideUp(100);
		$(this).css({'color':'#202020'});
	});
})
