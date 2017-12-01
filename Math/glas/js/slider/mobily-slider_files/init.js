var o = {
	init: function(){
		this.blank();
		this.social.hover();
		this.syntax();
		this.sticky.init();
		this.counter();
	},
	helper: function(element){
		$(element).append($('<span />').addClass('helper'));
	},
	blank: function(){
		var element = '.blank, .social a';
		$(element).attr('target', '_blank');
	},
	social: {
		hover: function(){
			$('.social').find('a').bind('mouseover mouseleave', function(e){
				var t = $(this), span = t.next('span'), all = $('.social').find('span');
				if ($.browser.msie && parseInt($.browser.version) < 9) {
					if (e.type == 'mouseover') {
						span.show();
					} else {
						all.hide();
					}
				} else {
					if (e.type == 'mouseover') {
						span.stop().fadeIn();
					} else {
						all.fadeOut();
					}
				}
			});
		}
	},
	syntax: function(){
		$('pre').addClass('linenums');
		prettyPrint();
	},
	sticky: {
		data: {
			topPadding: 0
		},
		init: function(){
			$('.side').stickyPanel(o.sticky.data);
		}
	},
	counter: function(){
		$('.counter').click(function(){
			var $t = $(this),
				rel = $t.attr('rel');
				$.ajax({
					type: 'post',
					url: '/counter.html',
					data: 'page='+rel
				});
		});
	}
}

$(function(){ o.init() });
