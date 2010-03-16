/*
 * super-fast javascript trim based on http://blog.stevenlevithan.com/archives/faster-trim-javascript
 */

// prototype in our new trim method (named differently to not offend others relying on native version)
String.prototype.trimfast = function() {
	var	str = this.replace(/^\s\s*/, ''),
		ws = /\s/,
		i = this.length;
	while (ws.test(this.charAt(--i)));
	return str.slice(0, i + 1);
};

// jQuery extension to get the value, trim and return it (often useful for forms)
(function($){
  $.fn.trimval = function() {
    return this.val().trimfast();
  };
})(jQuery);
