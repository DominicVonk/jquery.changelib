(function($){
	$.fn.oldHtmlFunc = $.fn.html;
	$.fn.html = function(html) {
		var oldhtml = $(this).oldHtmlFunc();
		$(this).trigger("htmlchange", [oldhtml, html]);
		$(this).oldHtmlFunc(html);
		$(this).trigger("htmlchanged", [oldhtml, html]);
		return $(this);
	};
	

	$.fn.htmlChange = function(event) {
		$(this).on('htmlchange', event);
		return $(this);
	};
	$.fn.htmlChanged = function(event) {
		$(this).on('htmlchanged', event);
		return $(this);
	};

	$.fn.oldValueFunc = $.fn.value;
	$.fn.value = function(value) {
		var oldvalue = $(this).oldValueFunc();
		$(this).trigger("valuechange",  [oldvalue, value]);
		$(this).oldValueFunc(value);
		$(this).trigger("valuechanged",  [oldvalue, value]);
		return $(this);
	};
	$.fn.valueChange = function(event) {
		$(this).on('valuechange', event);
		return $(this);
	};
	$.fn.valueChanged = function(event) {
		$(this).on('valuechanged', event);
		return $(this);
	};

	$.fn.oldTextFunc = $.fn.text;
	$.fn.text = function(text) {
		var oldtext = $(this).oldTextFunc();
		$(this).trigger("textchange",  [oldtext, text]);
		$(this).oldTextFunc(text);
		$(this).trigger("textchanged",[oldtext, text]);
		return $(this);
	};
	$.fn.textChange = function(event) {
		$(this).on('textchange', event);
		return $(this);
	};
	$.fn.textChanged = function(event) {
		$(this).on('textchanged', event);
		return $(this);
	};

})(jQuery);
