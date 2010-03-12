/*
 * super-fast javascript trim based on http://blog.stevenlevithan.com/archives/faster-trim-javascript
 */

(function($){
    
    $.fn.trimVal = function() {
	    var	str = this.val().replace(/^\s\s*/, ''),
		ws = /\s/,
		i = str.length;
	    while (ws.test(str.charAt(--i)));
	    return str.slice(0, i + 1);
    };
    
})(jQuery);
