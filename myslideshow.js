;(function($, window, document, undefined){
	var Myslideshow = function(ele, options){
		var self = this;
		this.$imgList = ele.find('#imgList');
		this.defaults = {

		};
		this.options = $.extend({}, this.defaults , this.options);
	};

	Myslideshow.prototype = {
		show: function(){
			console.log(this.$imgList);
		}
	};
	
	$.fn.myslideshow = function(options){
		var mySlideShow = new Myslideshow(this,options);
			mySlideShow.show();
	};
})(jQuery, window, document);