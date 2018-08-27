;(function($) {
	
	'use strict';
	
	var func = {
		/**
		 * 初始化
		 * @param me
		 */
		init: function(me) {
			var $el = $('#twperfectdatepicker');
			if($el.length) return;
			var starttime = moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'), endtime = moment().add(1.5, 'hours').format('YYYY-MM-DD HH:mm:ss');var durMills = parseInt(moment(endtime).format('x')) - parseInt(moment(starttime).format('x'));
            var sec = durMills/1000, min = sec/60, hour = min/60, day = hour/24;
            var showDur = 1;
            var showDurName = '小时';
			var $html = $([
				'<div id="twperfectdatepicker" class="hide" style="display: none;">',
					'<div class="main-container">',
                        '<div class="part-container">',
                            '<div class="main-part part">',
                                '<div class="row time con">',
                                    '<div class="left date lf">',
                                        '<div class="title cell"><span class="word">日期</span></div>',
                                        '<div class="showtime ymd cell" date="',moment(starttime).format('YYYY-MM-DD'),'"><span class="word" >',moment(starttime).format('M月DD日'),'，',Util.get_weekday_name(starttime),'</span>,</div>',
                                        '<div class="tips cell"><span class="word">',Util.get_dur_name(starttime, endtime),'</span></div>',
                                    '</div>',
                                    '<div class="right time lf">',
                                        '<div class="title cell"><span class="word">时间</span></div>',
                                        '<div class="showtime hms cell">',
                                            '<span class="word">',
                                                '<span class="starthms">',moment(starttime).format('HH:mm'),'</span> - <span class="endhms">',moment(endtime).format('HH:mm'),'</span>',
                                            '</span>',
                                        '</div>',
                                        '<div class="tips cell"><span class="word">持续时间：<span class="showdur">',showDur + showDurName,'</span></span></div>',
                                    '</div>',
                                '</div>',
                            '</div>',
                            '<div class="datepicker-part part hide">',
                                //fill on event
                            '</div>',
                        '</div>',
                        '<div>',
                            '<div class="row notice con" style="border-bottom: 0">',
                                '<div class="cell icon-cell"><i class="iconfont">&#xe62e;</i></div>',
                                '<div class="cell word-cell"><span class="word">设置提醒</span></div>',
                            '</div>',
                            '<div class="row repeat con" style="border-bottom: 0">',
                                '<div class="cell icon-cell"><i class="iconfont">&#xe7b1;</i></div>',
                                '<div class="cell word-cell"><span class="word">设置重复</span></div>',
                            '</div>',
                            '<div class="footer"><a href="javascript:;" class="cancel">取消</a><a href="javascript:;" class="confirm">确定</a></div>',
                        '</div>',
					'</div>',
					'<div class="extra-container">',
                        '<div class="simple-datepicker-part part hide">',

                        '</div>',
                        '<div class="timepicker-part part hide">',
                            //fill on event
                        '</div>',
				    '</div>',
				'</div>'
			].join(''));

			me.settings.$picker = $html;

			me.settings.$main_container = $html.find('.main-container');
			me.settings.$part_container = $html.find('.part-container');
			me.settings.$main_part = $html.find('.main-part');
			me.settings.$datepicker_part = $html.find('.datepicker-part');

			me.settings.$extra_container = $html.find('.extra-container');
			me.settings.$timepicker = $html.find('.timepicker-part');
			me.settings.$simple_datepicker = $html.find('.simple-datepicker-part');

			$('body').append($html);
		},

        refreshDatepicker: function(me) {
		    var $picker = me.setings.$datepicker;

        },

		/**
		 * 绑定	
		 * @param me
		 */
		bindEvent: function(me) {
			var func = this;

			//timepicker $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

            // me.settings.$timepicker.on('click', '.time-min-unit', function () {
            //     var $this = $(this);
            //     me.settings.$timepicker.empty().hide().addClass('hide');
            //     me.settings.$main_part.show().removeClass('hide');
            //     me.settings.$picker.removeClass('hide').fadeIn('fast', 'swing');
            // });
			//End timepicker $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

			//main $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
			me.$ele.on('click', function(e) {
				if(me.settings.$picker.hasClass('hide')) {
					func.beforeShow(me);
                    me.settings.$main_part.show().removeClass('hide');
					me.settings.$picker.removeClass('hide').fadeIn('fast', 'swing');
				}else {
                    func.beforeHide(me);
                    me.settings.$picker.fadeOut('fast', 'swing', function() {
                        $(this).addClass('hide');
                        me.settings.$main_part.hide().addClass('hide');
                        me.settings.$datepicker_part.empty().hide().addClass('hide');
                        me.settings.$timepicker.empty().hide().addClass('hide');
                    });
				}
			});
			me.settings.$main_part.on('click', '.lf.date', function() {
                me.settings.$extra_container.hide().addClass('hide');
                me.settings.$main_part.fadeOut('fast', 'swing', function() {
                    $(this).addClass('hide');
                    me.settings.$extra_container.fadeIn('fast', 'swing', function() {
                        $(this).removeClass('hide');
                        me.settings.$datepicker_part.removeClass('hide').show();
                    });
                });
			});
            me.settings.$main_part.on('click', '.lf.time', function() {
				Process.getStartHmsAndEndHms(me).then(function(ret) {
					var starthms = ret['starthms'], endhms = ret['endhms'];
					var date = me.settings.$main_part.find('.showtime.ymd').attr('date');
					var starttime = date + " " + starthms, endtime = date + " " + endhms;
                    var msg = Util.get_dur_msg(starttime, endtime), realDur = msg['realdur'], _showDur = msg['showdur'], showDurName = msg['showdurname'];
					if(msg['durmills'] <= 0) {
					    debugger;
					    me.settings.$extra_container.hide().fadeOut('fast', 'swing', function() {
					        debugger;
					        $(this).addClass('hide');
                            me.settings.$timepicker.empty().hide().addClass('hide');
                            me.settings.$main_part.show().removeClass('hide');
                            me.settings.$main_container.show().removeClass('hide');
                            me.settings.$picker.removeClass('hide').fadeIn('fast', 'swing');
                        });
					    alert('结束时间应大于开始时间');
					    return;
                    }
                    me.settings.$main_part.find('span.showdur').html((_showDur !== realDur ? '约':'') + _showDur + showDurName);
                    me.settings.$timepicker.empty().hide().addClass('hide');
                    me.settings.$main_part.show().removeClass('hide');
                    me.settings.$main_container.show().removeClass('hide');
                    me.settings.$picker.removeClass('hide').fadeIn('fast', 'swing');

					var $showtime = me.settings.$main_part.find('.showtime.cell.hms'), $st = me.settings.$main_part.find('span.starthms'), $et = me.settings.$main_part.find('span.endhms');
					$showtime.attr('starttime', starttime).attr('endtime', endtime);
                    $st.html(starthms);
                    $et.html(endhms);
				});
            });
            me.settings.$main_part.on('click', '.row.notice', function() {
                alert('notice');
            });
            me.settings.$main_part.on('click', '.row.repeat', function() {
                alert('repeat');
            });
            me.settings.$main_part.on('click', 'a.confirm', function() {
                func.beforeHide(me);
                me.settings.$picker.fadeOut('fast', 'swing', function() {
                    $(this).addClass('hide');
                });
            });
            me.settings.$main_part.on('click', 'a.cancel', function() {
                func.beforeHide(me);
                me.settings.$picker.fadeOut('fast', 'swing', function() {
                	$(this).addClass('hide');
				});
            });
            //End main $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
		},
		beforeShow: function(me) {
			var offset = me.$ele.offset();
			me.settings.$picker.css('top', offset.top + Util.realHeight(me.$ele) + 10).css('left', 'offset'.left);
		},
		beforeHide: function(me) {

		}
	};

	var Process = {

		getStartHmsAndEndHms: function(me) {
			var func = this;
			return new Promise(function(resolve, reject) {
				debugger;
                me.settings.$main_container.fadeOut('fast', 'swing', function() {
                    $(this).addClass('hide');
                    var hours_html = (function() {
                    	return ['<div class="row">',
                            '<div class="time-hour-unit time-unit" hour="00">00:00</div>',
                            '<div class="time-hour-unit time-unit" hour="01">01:00</div>',
                            '<div class="time-hour-unit time-unit" hour="02">02:00</div>',
                            '<div class="time-hour-unit time-unit" hour="03">03:00</div>',
                            '</div>',
                            '<div class="row">',
                            '<div class="time-hour-unit time-unit" hour="04">04:00</div>',
                            '<div class="time-hour-unit time-unit" hour="05">05:00</div>',
                            '<div class="time-hour-unit time-unit" hour="06">06:00</div>',
                            '<div class="time-hour-unit time-unit" hour="07">07:00</div>',
                            '</div>',
                            '<div class="row">',
                            '<div class="time-hour-unit time-unit" hour="08">08:00</div>',
                            '<div class="time-hour-unit time-unit" hour="09">09:00</div>',
                            '<div class="time-hour-unit time-unit" hour="10">10:00</div>',
                            '<div class="time-hour-unit time-unit" hour="11">11:00</div>',
                            '</div>',
                            '<div class="row">',
                            '<div class="time-hour-unit time-unit" hour="12">12:00</div>',
                            '<div class="time-hour-unit time-unit" hour="13">13:00</div>',
                            '<div class="time-hour-unit time-unit" hour="14">14:00</div>',
                            '<div class="time-hour-unit time-unit" hour="15">15:00</div>',
                            '</div>',
                            '<div class="row">',
                            '<div class="time-hour-unit time-unit" hour="16">16:00</div>',
                            '<div class="time-hour-unit time-unit" hour="17">17:00</div>',
                            '<div class="time-hour-unit time-unit" hour="18">18:00</div>',
                            '<div class="time-hour-unit time-unit" hour="19">19:00</div>',
                            '</div>',
                            '<div class="row">',
                            '<div class="time-hour-unit time-unit" hour="20">20:00</div>',
                            '<div class="time-hour-unit time-unit" hour="21">21:00</div>',
                            '<div class="time-hour-unit time-unit" hour="22">22:00</div>',
                            '<div class="time-hour-unit time-unit" hour="23">23:00</div>',
                            '</div>'].join('');
					}());
                    var get_min_html = function(hour) {
                        return [
                            '<div class="row">',
                            '<div class="time-min-unit time-unit" hms="',hour,':00">',hour,':00</div>',
                            '<div class="time-min-unit time-unit" hms="',hour,':05">',hour,':05</div>',
                            '<div class="time-min-unit time-unit" hms="',hour,':10">',hour,':10</div>',
                            '<div class="time-min-unit time-unit" hms="',hour,':15">',hour,':15</div>',
                            '</div>',
                            '<div class="row">',
                            '<div class="time-min-unit time-unit" hms="',hour,':20">',hour,':20</div>',
                            '<div class="time-min-unit time-unit" hms="',hour,':25">',hour,':25</div>',
                            '<div class="time-min-unit time-unit" hms="',hour,':30">',hour,':30</div>',
                            '<div class="time-min-unit time-unit" hms="',hour,':35">',hour,':35</div>',
                            '</div>',
                            '<div class="row">',
                            '<div class="time-min-unit time-unit" hms="',hour,':40">',hour,':40</div>',
                            '<div class="time-min-unit time-unit" hms="',hour,':45">',hour,':45</div>',
                            '<div class="time-min-unit time-unit" hms="',hour,':50">',hour,':50</div>',
                            '<div class="time-min-unit time-unit" hms="',hour,':55">',hour,':55</div>',
                            '</div>'
                        ].join('')
					};
                    var starthms, endhms;
                    me.settings.$extra_container.show().fadeIn('fast', 'swing', function () {
                        me.settings.$timepicker.empty().append(hours_html).removeClass('hide').fadeIn('fast', 'swing');
                        me.settings.$timepicker.find('.time-hour-unit').on('click', function() {
                            debugger;
                            var $this = $(this);
                            var hour = $this.attr('hour');
                            me.settings.$timepicker.empty().append(get_min_html(hour));
                            me.settings.$timepicker.find('.time-min-unit').off('click').on('click', function() {
                                debugger;
                                var $this = $(this);
                                starthms = $this.attr('hms');
                                me.settings.$timepicker.empty().append(hours_html).removeClass('hide').fadeIn('fast', 'swing');
                                me.settings.$timepicker.find('.time-hour-unit').on('click', function() {
                                    debugger;
                                    var $this = $(this);
                                    var hour = $this.attr('hour');
                                    me.settings.$timepicker.empty().append(get_min_html(hour));
                                    me.settings.$timepicker.find('.time-min-unit').off('click').on('click', function() {
                                        debugger;
                                        var $this = $(this);
                                        endhms = $this.attr('hms');
                                        resolve({'starthms': starthms, 'endhms': endhms})
                                    });
                                });
                            });
                        });
                    });
                });
			});
		}
	};
	var Util = {
		'realHeight': function ($sel) {
            return parseInt($sel.css('padding-top')) +
                parseInt($sel.css('padding-bottom')) +
                parseInt($sel.css('margin-top')) +
                parseInt($sel.css('margin-bottom')) +
                parseInt($sel.css('height'));
        },
		'realWidth': function ($sel) {
            return parseInt($sel.css('padding-left')) +
                parseInt($sel.css('padding-right')) +
                parseInt($sel.css('margin-left')) +
                parseInt($sel.css('margin-right')) +
                parseInt($sel.css('width'));
        },
        'get_dur_name': function(startYmd, endYmd) {
            var starttime = moment(startYmd).format('YYYY-MM-DD'), endtime = moment(endYmd).format('YYYY-MM-DD');
            var durMills = parseInt(moment(endtime).format('x')) - parseInt(moment(starttime).format('x'));
            var sec = durMills/1000, min = sec/60, hour = min/60, day = hour/24;
            if(day > 2) {
                return day + '天后';
            }
            if(day < -1) {
                return -day + '天前'
            }
            var rel = {'-1': '昨天', '0': '今天', '1': '明天', '2': '后天'};
            return rel[day];
        },
        'get_weekday_name': function(ymd) {
		    var _ymd = moment(ymd).format('YYYY-MM-DD');
		    var weekday_name_rel = {
                1: '周一',2: '周二', 3: '周三', 4: '周四', 5: '周五', 6: '周六', 0: '周日'
            };
            return weekday_name_rel[moment(_ymd).weekday()];
        },
        'get_dur_msg': function(starttime, endtime) {
		    debugger;
            var durMills = parseInt(moment(endtime).format('x')) - parseInt(moment(starttime).format('x'));
            var sec = durMills/1000, min = sec/60, hour = min/60, day = hour/24;
            var showDur = sec > 1 && sec <= 60 ? sec : (min > 1 && min <= 60 ? min : (hour > 1 && hour <= 24 ? hour : (day > 1 ? day : day)));
            var _showDur = Math.floor(showDur);
            var showDurName = sec > 1 && sec <= 60 ? '秒' : (min > 1 && min <= 60 ? '分钟' : (hour > 1 && hour <= 24 ? '小时' : (day > 1 ? '天' : '天')));
            return {'realdur':showDur, 'showdur': _showDur, 'showdurname': showDurName, 'durmills': durMills}
        }
	};
	
	var TwPerfectDatepicker = function(ele, opt) {
		var defaults = {

		};
		this.$ele = ele;
		this.settings = $.extend({}, defaults, opt);
		func.init(this);
		func.bindEvent(this);
	};

    TwPerfectDatepicker.prototype = {

	};
	
	$.fn.twperfectdatepicker = function (options) {
		debugger;
		return new TwPerfectDatepicker(this, options);
	};
	
})(jQuery);