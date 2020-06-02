(function ($) {
	"use strict";

	$(window).on('load', function () {
		var $nav = $('#nav');

		if ( $nav.length ) {
			$nav.slicknav();
		}
	});
}(jQuery));