$(document).ready(function(){
   $('.curtains').curtain();
   
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
    
    scrollorama.animate('#intro h1',{
    	duration:200, property:'left', end:-860
    });
    scrollorama.animate('#dragon',{
		delay:600, duration:600, property:'top', start:100, end:-300
	});
    
});
