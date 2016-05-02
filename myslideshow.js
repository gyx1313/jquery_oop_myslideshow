/*

*/



;(function($, window, document, undefined){
	var Myslideshow = function(ele, options){
		var self = this;
		self.defaults = {
			autoplay: false,
			delay: 3000,
			speed: 750
		};
		self.settings = $.extend({}, this.defaults , this.options);

		self.$slideshowWrapper = ele;
		self.$imgList = ele.find('#imgList');
		self.$prevArrow = ele.find('#prev');
		self.$nextArrow = ele.find('#next');
		self.$buttons = ele.find('#buttons');

		self.$prevArrow.click(function(){
			self.$imgList.eq(0).css('left', '-400px');
		});
	};

	function donotthing (){
		console.log(this);
	}

	Myslideshow.prototype.show = function(){
		console.log(this.$imgList);
	};

	Myslideshow.prototype.animate = function(){
		console.log('300');
	};

	Myslideshow.prototype.initArrows = function(){

		this.$prevArrow.click(function(){
			// donotthing();
		});

		this.$nextArrow.click(function(){
			
		});
	};

	Myslideshow.prototype.init = function(){
		this.initArrows();
	};

	
	// Myslideshow.prototype = {
	// 	show: function(){
	// 		console.log(this.$imgList);
	// 	},

	// 	animate: function(){
	// 		console.log('300');
	// 	},

	// 	initArrows: function(){
	// 		this.$prevArrow.click(function(){
	// 			console.log(this);
	// 		});

	// 		this.$nextArrow.click(function(){
	// 			console.log('next');
	// 		});
	// 		return this;
	// 	},

	// 	init: function(){
	// 		this.initArrows();
	// 		return this;
	// 	}
	// };


	$.fn.myslideshow = function(options){
		var mySlideShow = new Myslideshow(this,options);
			mySlideShow.init();
	};
})(jQuery, window, document);