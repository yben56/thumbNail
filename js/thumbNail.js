/*
The MIT License (MIT)

 * Copyright (c) 2018 Benjamin Wong benjamin-w@hotmail.com
 * https://github.com/yben56/thumbNail

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, 
DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
(function($){
	$.fn.thumbNail = function(options){	
		//Settings
		var settings = $.extend({
			column: 5
		}, options);

		var id = $(this),
			pos = 0,
			thumbWidth = $(this).width() / settings.column
			click = 0;
				
		//button
		$(id).append('<span class="chevron glyphicon glyphicon-chevron-left"></span>');
		$(id).prepend('<span class="chevron glyphicon glyphicon-chevron-right"></span>');
		
		//add class & wrap
		$(id).children('a').addClass('thumbnails').wrapAll('<div class="thumb-imgs"><div>');
		
		//thumbnail size
		$(this).find('.thumbnails').width(thumbWidth);

		//count
		var num = $(id).find('.thumbnails').length;
		
		//hide left button at start
		$(id).children('.glyphicon-chevron-left').hide();
		
		//hide right button when column > thumbnails
		if ( num <= settings.column ) { $(id).children('.glyphicon-chevron-right').hide(); }
		
		//click
		$(id).children('.chevron').click(function(){
			if ( $(this).hasClass('glyphicon-chevron-left') ) { pos += thumbWidth; $(id).find('.thumb-imgs > div').animate({left: pos}); click --; }
			else { pos -= thumbWidth; $(id).find('.thumb-imgs > div').animate({left: pos}); click ++; }
			
			if ( click == 0 ) { $(id).children('.glyphicon-chevron-left').hide(); } else { $(id).children('.glyphicon-chevron-left').show(); }
				
			if ( click == num - settings.column ) { $(id).children('.glyphicon-chevron-right').hide(); } else { $(id).children('.glyphicon-chevron-right').show(); }	
		});
	};
}(jQuery));