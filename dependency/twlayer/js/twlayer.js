;(function($) {
	
	/**
	 * How 2 use ?
	 * mObj.$('.setting-icon').twlayer({moduleid: 'address.layer.xxx', modulename: 'address.layer', params: {nickname: 'EMS速运', address: 'auto@ems.com'}});
	 */
	
	'use strict';
	
	var func = {
		/**
		 * 初始化
		 * @param me
		 */
		initBase: function(me) {
			var key = me.settings.moduleid.replace(/\./g,'_');
			var $html = $('.twlayer.'+key).length == 0 ? $(['<div class="twlayer ',key,' hide"></div>'].join('')) : $('.'+key);
			me.$layer = $html;
			me.$ele.parents('body').append($html);
			!me.settings.moduleid ? alert('请输入moduleid') : void(0);
		},
		/**
		 * 绑定	
		 * @param me
		 */
		bindEvent: function(me) {
			var func = this, loop2Hide_timeout, to_timeout;
			var loop2Hide = function() {
				clearTimeout(loop2Hide_timeout);
				loop2Hide_timeout = setTimeout(function() {
					if(!me.isHover) {
						if(!me.isHover) {
						    func.hideLayer(me);
						    clearTimeout(loop2Hide_timeout);
						}else {
							loop2Hide();
						}
					}else {
						loop2Hide();
					}
				}, 300);
			}
			me.$ele.on('mouseenter', function(e) {
				clearTimeout(to_timeout);
				to_timeout = setTimeout(function() {
					me.isMouseenteringEle ? (function() {
						func.showLayer(me);
						loop2Hide();
					}()) : clearTimeout(to_timeout);
				}, 300);
			});
			me.$layer.on('click', function() {
				me.settings.hideOnClick && func.hideLayer(me);
			});
			me.$layer.on('mouseenter mouseleave', function(e) {
				me.isHover = e.type == 'mouseenter' ? true:false;
			});
			me.$ele.on('mouseenter mouseleave', function(e) {
				me.isHover = e.type == 'mouseenter' ? true:false;
				me.isMouseenteringEle = e.type == 'mouseenter' ? true:false;
			});
		},
		/**	
		 * 显示
		 * @param me
		 */
		showLayer: function(me) {
			
			if(!me.$layer.hasClass('hide')) return;
			tw_load(me.$layer, me.settings.moduleid, me.settings.modulename, me.settings.params || {}, null, function(mObj) {
				var h = tw_getModuleHandler(me.settings.moduleid);
				if(!h || !h.onShow) {
					return;
				}
				//计算底部是否触碰到窗口底部
				var height = me.$layer.height();
				var wh = $(window).height()-20;
				//计算top和left
				var offset = me.$ele.offset();
				me.$ele.parents('body').find('.twlayer').addClass('hide');
				var layer_w = me.$layer.width(), window_w = $(window).width(), window_h = $(window).height();
				
				var left = layer_w + offset.left > window_w ? offset.left - layer_w + 40: offset.left - 20 + me.settings.left_dvalue;
				if (me.settings.left_dvalue == true) {
					left = offset.left - 20 + -layer_w - 3;
				}
				if(left <= 0) {
					return;
				}
				
				var layerH = me.$layer.height();
				var top = offset.top + layerH > window_h ? offset.top: offset.top + 5 + me.settings.top_dvalue;
				if(top <= 0) {
					return;
				}
				var bottom = offset.top + height;
				
				//如果是，则上移
				if(bottom > wh && !me.settings.isDropUp) {
//					var top = me.$layer.offset().top;
					top = top - height - tww_realHeight(me.$ele) - 10;
//					me.$layer.css('top', update_top - 30);
				}
				if(me.settings.isDropUp) {
					top = top - layerH - tww_realHeight(me.$ele) - 15;
				}
				me.$layer.addClass('hide').removeAttr('style')
					.css('position', 'absolute').css('top', top).css('left', left)
					.css('margin', tww_realHeight(me.$ele) + 'px 0 0 20px').removeClass('hide').addClass('hidden');
				
				h.onShow(me);
				me.$layer.removeClass('hidden');
			});
		},
		/**
		 * 隐藏
		 * @param me
		 */
		hideLayer: function(me) {
			me.$layer.fadeOut('fast',function() {
				me.$layer.addClass('hide').removeAttr('style');
				var h = tw_getModuleHandler(me.settings.moduleid);
				if(!h || !h.onHide) {
					return;
				}
				h.onHide(me);
//				setTimeout(function() {
//					if(!me.$layer.hasClass('hide')) {
//						func.hideLayer(me);
//					}
//				}, 2000);
			});
			
		}
	};
	
	var Twlayer = function(ele, opt) {
		var defaults = {
				hideOnClick: true,
				top_dvalue: 0,
				left_dvalue: 0,
				isDropUp: false
		};
		this.$ele = ele;
		this.settings = $.extend({}, defaults, opt);
		func.initBase(this);
		func.bindEvent(this);
	};

    Twlayer.prototype = {
	};
	
	$.fn.twlayer = function (options) {
		return new Twlayer(this, options);
	};
	
})(jQuery);