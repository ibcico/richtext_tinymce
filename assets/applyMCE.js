/*
	Implements tinyMCE for available textareas. The tinyMCE.init call can be
	extended with further buttons/configuration options. For details, see:

	http://wiki.moxiecode.com/index.php/TinyMCE:Configuration
*/

tinyMCE.init({
	mode                           : "textareas",
	theme                          : "advanced",
	editor_selector                : "tinymce",
	theme_advanced_toolbar_location: "top",
	theme_advanced_toolbar_align   : "left",
	theme_advanced_buttons1 : 'bold,italic,underline,|,bullist,numlist,|,blockquote,link,unlink,image,|,copy,paste,pastetext,pasteword,|,undo,redo,|,cleanup,code',
	theme_advanced_buttons2        : "",
	theme_advanced_buttons3        : "",
	force_br_newlines : true,
	force_p_newlines : false,
	valid_elements : 'strong/b,p,br,ul,ol,li,a[href]',
	entities: 'ndash,mdash',
});

DOM.Event.addListener(window, "load", function() {
	DOM.select("div[class^=mceeditor]").forEach(function(div) {
		div.style.marginTop = "2px"; // Fix styles
	});
});
