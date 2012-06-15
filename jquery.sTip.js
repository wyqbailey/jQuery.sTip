/*
 * jQuery sTip v0.1
 * http://www.wybai.net
 * email me wyqbailey@gmail.com
 * Copyright 2011, wyqbailey
 * Free to use and abuse under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * April 2011
 */
jQuery.extend({
  sTip: function(m,s,x,y,t){
		if(!m) return false;
		var id = "i" + new Date().getTime();
		var tip = $("<div id='"+id+"'>"+m+"</div>").css({"position":"absolute"});
		tip.addClass(s || 'succ');
		tip.appendTo("body");
		var x = x || "center";
		var y = y || "top";
		var t = t || 3;
		switch (x){
			case 'left' : tip.css("left",0);break;
			case 'right' : tip.css("right",0);break;
			case 'center' : tip.css({"left": "50%","margin-left": -(tip.width()/2)});break;
			default : tip.css("left",x);
		}
		switch (y){
			case 'top' : tip.css("top",0);break;
			case 'bottom' : tip.css("bottom",0);break;
			case 'center' : tip.css({"top": "50%","margin-top":-(tip.height()/2)});break;
			default : tip.css("top",y);
		}
		window.setTimeout("$('#"+id+"').remove()",t*1000);
	}
});