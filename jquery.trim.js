/*
 * super-fast javascript trim based on http://blog.stevenlevithan.com/archives/faster-trim-javascript
 */

// jQuery extension to get the value, trim and return it (often useful for forms)
(function($){
  $.fn.trimVal = function() {
    return this.val().trimFast();
  };
})(jQuery);

// prototype in our new trim method (named differently to not offend others relying on native version)
String.prototype.trimFast = function() {
	var	str = this.replace(/^\s\s*/, ''),
		ws = /\s/,
		i = this.length;
	while (ws.test(this.charAt(--i)));
	return str.slice(0, i + 1);
};