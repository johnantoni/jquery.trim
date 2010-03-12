/*
 * super-fast javascript trim based on http://blog.stevenlevithan.com/archives/faster-trim-javascript
 */

(function($){
    
  $.fn.trim = function(str) {

	  var	str = str.replace(/^\s\s*/, ''),
		  ws = /\s/,
		  i = str.length;
	  while (ws.test(str.charAt(--i)))
	  return str.slice(0, i + 1);
  };

  $.fn.trimVal = function() {

    return this.val().trim();

  };
    
})(jQuery);
