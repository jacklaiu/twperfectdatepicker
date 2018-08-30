;(function($) {
	
	'use strict';

	var template = {
	    getMainHtml: function(starttime, endtime) {
            var showDur = 1;
            var showDurName = '小时';
			return [
				'<div id="twperfectdatepicker" date="',moment().format('YYYY-MM-DD'),'" starttime="',moment(starttime).format('HH:mm:00'),'" endtime="',moment(endtime).format('HH:mm:00'),'" class="hide" style="display: none;">',
					'<div class="main-container">',
                        '<div class="part-container">',
                            '<div class="main-part part">',
                                '<div class="row time con">',
                                    '<div class="left date lf">',
                                        '<div class="title cell"><span class="word">日期</span></div>',
                                        '<div class="showtime ymd cell"><span class="word" >',moment(starttime).format('M月DD日'),'，',Util.get_weekday_name(starttime),'</span>,</div>',
                                        '<div class="tips cell"><span class="word">今天</span></div>',
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
                            /*'<div class="datepicker-part part hide">',
                                //fill on event
                            '</div>',*/
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
                            '<div class="con year-con">',(function() {
                                return '';
                            }()),'</div>',
                            '<div class="con month-con"></div>',
                            '<div class="con date-con"></div>',
                        '</div>',
                        '<div class="timepicker-part part hide">',
                            //fill on event
                        '</div>',
                        '<div class="datepicker-part part hide">',
                            //fill on event
                        '</div>',
				    '</div>',
				'</div>'
			].join('');
        },
	    getTimepickerHtml_hours: function(starthms) {
	        debugger;
	        var s_h = starthms ? moment(moment().format('YYYY-MM-DD') + ' ' + starthms).format('H'): void(0);
	        var $html = $([
	            '<div><div class="row">',
                    '<div class="time-hour-unit time-unit" hour="00" onselectstart="return false">00:00</div>',
                    '<div class="time-hour-unit time-unit" hour="01" onselectstart="return false">01:00</div>',
                    '<div class="time-hour-unit time-unit" hour="02" onselectstart="return false">02:00</div>',
                    '<div class="time-hour-unit time-unit" hour="03" onselectstart="return false">03:00</div>',
                '</div>',
                '<div class="row">',
                    '<div class="time-hour-unit time-unit" hour="04" onselectstart="return false">04:00</div>',
                    '<div class="time-hour-unit time-unit" hour="05" onselectstart="return false">05:00</div>',
                    '<div class="time-hour-unit time-unit" hour="06" onselectstart="return false">06:00</div>',
                    '<div class="time-hour-unit time-unit" hour="07" onselectstart="return false">07:00</div>',
                '</div>',
                '<div class="row">',
                    '<div class="time-hour-unit time-unit" hour="08" onselectstart="return false">08:00</div>',
                    '<div class="time-hour-unit time-unit" hour="09" onselectstart="return false">09:00</div>',
                    '<div class="time-hour-unit time-unit" hour="10" onselectstart="return false">10:00</div>',
                    '<div class="time-hour-unit time-unit" hour="11" onselectstart="return false">11:00</div>',
                '</div>',
                '<div class="row">',
                    '<div class="time-hour-unit time-unit" hour="12" onselectstart="return false">12:00</div>',
                    '<div class="time-hour-unit time-unit" hour="13" onselectstart="return false">13:00</div>',
                    '<div class="time-hour-unit time-unit" hour="14" onselectstart="return false">14:00</div>',
                    '<div class="time-hour-unit time-unit" hour="15" onselectstart="return false">15:00</div>',
                '</div>',
                '<div class="row">',
                    '<div class="time-hour-unit time-unit" hour="16" onselectstart="return false">16:00</div>',
                    '<div class="time-hour-unit time-unit" hour="17" onselectstart="return false">17:00</div>',
                    '<div class="time-hour-unit time-unit" hour="18" onselectstart="return false">18:00</div>',
                    '<div class="time-hour-unit time-unit" hour="19" onselectstart="return false">19:00</div>',
                '</div>',
                '<div class="row">',
                    '<div class="time-hour-unit time-unit" hour="20" onselectstart="return false">20:00</div>',
                    '<div class="time-hour-unit time-unit" hour="21" onselectstart="return false">21:00</div>',
                    '<div class="time-hour-unit time-unit" hour="22" onselectstart="return false">22:00</div>',
                    '<div class="time-hour-unit time-unit" hour="23" onselectstart="return false">23:00</div>',
                '</div></div>'].join(''));
	        if(s_h) {
                var $tus = $html.find('.time-unit');
                s_h = parseInt(s_h);
                for(var i = 0, leni = $tus.length; i < leni; i++) {
                    var $tu = $tus.eq(i);
                    var h = parseInt(moment(moment().format('YYYY-MM-DD') + ' ' + $tu.html()).format('H'));
                    if(h > s_h) {
                        continue;
                    }else if(h === s_h){
                        $tu.html(starthms).css('color', '#6683DF');
                        continue;
                    }
                    $tu.addClass('lt-starthms');
                }
            }
	        return $html[0].outerHTML;
        },
        getTimepickerHtml_mins: function(hour, starthms) {
	        debugger;
            var s_hhmm = starthms ? moment(moment().format('YYYY-MM-DD') + ' ' + starthms).format('HH:mm'): void(0);
            var $html = $([
                '<div><div class="row">',
                '<div class="time-min-unit time-unit" hms="',hour,':00" onselectstart="return false">',hour,':00</div>',
                '<div class="time-min-unit time-unit" hms="',hour,':05" onselectstart="return false">',hour,':05</div>',
                '<div class="time-min-unit time-unit" hms="',hour,':10" onselectstart="return false">',hour,':10</div>',
                '<div class="time-min-unit time-unit" hms="',hour,':15" onselectstart="return false">',hour,':15</div>',
                '</div>',
                '<div class="row">',
                '<div class="time-min-unit time-unit" hms="',hour,':20" onselectstart="return false">',hour,':20</div>',
                '<div class="time-min-unit time-unit" hms="',hour,':25" onselectstart="return false">',hour,':25</div>',
                '<div class="time-min-unit time-unit" hms="',hour,':30" onselectstart="return false">',hour,':30</div>',
                '<div class="time-min-unit time-unit" hms="',hour,':35" onselectstart="return false">',hour,':35</div>',
                '</div>',
                '<div class="row">',
                '<div class="time-min-unit time-unit" hms="',hour,':40" onselectstart="return false">',hour,':40</div>',
                '<div class="time-min-unit time-unit" hms="',hour,':45" onselectstart="return false">',hour,':45</div>',
                '<div class="time-min-unit time-unit" hms="',hour,':50" onselectstart="return false">',hour,':50</div>',
                '<div class="time-min-unit time-unit" hms="',hour,':55" onselectstart="return false">',hour,':55</div>',
                '</div></div>'
            ].join(''));
            if(s_hhmm) {
                var $tus = $html.find('.time-unit');
                for(var i = 0, leni = $tus.length; i < leni; i++) {
                    var $tu = $tus.eq(i);
                    var hhmm = moment(moment().format('YYYY-MM-DD') + ' ' + $tu.html()).format('HH:mm');
                    if(hhmm > s_hhmm) {
                        continue;
                    }
                    $tu.addClass('lt-starthms');
                }
            }
            return $html[0].outerHTML;
        },
	    getDatepickerHtml: function(me, targetDate, chosenDate) {
            debugger;
            var today = moment().format('YYYY-MM-DD');
            return [
                '<div class="header weekday-head">',
                '<div class="date-msg-head">',
                '<div class="month-con">',
                '<div class="show-month-con">',
                '<div class="word-cell">',
                '<div class="year-cell cell select-el"><span class="year">',moment(targetDate).format('YYYY年'),'</span></div>&nbsp;',
                '<div class="month-cell cell select-el"><span class="month">',moment(targetDate).format('M月'),'</span></div>&nbsp;',
                (function() {
                    if(me.settings.choosen_period_next_action.choose_startdate) {
                        return '<div class="tips-cell cell choose_startdate"><span class="word">选择开始日期</span></div>';
                    }else if(me.settings.choosen_period_next_action.choose_enddate){
                        return '<div class="tips-cell cell choose_enddate"><span class="word">选择结束日期</span></div>';
                    }else {
                        return '';
                    }
                }()),
                '</div>',
                '</div>',
                '<div class="next-pre-con" onselectstart="return false"><div class="icon-con pre"><i class="iconfont">&#xe61b;</i></div><div class="icon-con next"><i class="iconfont">&#xe6a6;</i></div></div>',
                '</div>',
                '</div>',
                '<div class="weekday-head">',
                '<div class="col" weekday="0">日</div>',
                '<div class="col" weekday="1">一</div>',
                '<div class="col" weekday="2">二</div>',
                '<div class="col" weekday="3">三</div>',
                '<div class="col" weekday="4">四</div>',
                '<div class="col" weekday="5">五</div>',
                '<div class="col" weekday="6">六</div>',
                '</div>',
                '</div>',
                '<div class="body date-con">',
                (function() {
                    var startDayOfMonth = moment(targetDate).format('YYYY-MM-01');
                    var endDayOfMonth = moment(targetDate).endOf('month').format('YYYY-MM-DD');
                    var durMills = parseInt(moment(endDayOfMonth).format('x')) - parseInt(moment(startDayOfMonth).format('x'));
                    var durDays = durMills/1000/60/60/24;
                    var month = moment(targetDate).format('YYYY-MM');
                    var htmls = [];
                    var count = 0;
                    for(var i = 1, leni = durDays; i <= leni + 1; i++) {
                        var date = month + '-' + (i < 10 ? '0' + i : i);
                        var IDayCn = lunar_calendar.solar2lunar_yyyymmdd(date).IDayCn;
                        var weekday = moment(date).weekday();
                        //今日
                        var todayClass = today === date ? 'today':'';
                        //被选中日
                        var chosenDayClass = chosenDate && chosenDate === date ? 'chosen':'';
                        if(weekday === 0 || count === 0) {
                            htmls.push('<div class="row" onselectstart="return false">');
                            if(count === 0) {
                                for(var j = 0, lenj = weekday; j < lenj; j++) {
                                    htmls.push(
                                        '<div class="date-col" onselectstart="return false">'+
                                        '<div class="date-con"><span class="word"></span></div><div class="lunar-con"><span class="word"></span></div>'
                                        +'</div>');
                                }
                            }
                            htmls.push(
                                '<div class="date-col date '+todayClass + ' ' + chosenDayClass + '" date="'+date+'" weekday="'+weekday+'" onselectstart="return false">'+
                                '<div class="date-con"><span class="word">'+i+'</span></div><div class="lunar-con"><span class="word">'+IDayCn+'</span></div>'
                                +'</div>');
                            ++count;
                            continue;
                        }
                        htmls.push(
                            '<div class="date-col date '+todayClass + ' ' + chosenDayClass + '" date="'+date+'" weekday="'+weekday+'" onselectstart="return false">'+
                            '<div class="date-con"><span class="word">'+i+'</span></div><div class="lunar-con"><span class="word">'+IDayCn+'</span></div>'
                            +'</div>');
                        if(weekday === 6) {
                            htmls.push('</div>');
                        }
                        if(count === durDays) {
                            for(var k = weekday + 1; k <= 6; k++) {
                                htmls.push(
                                    '<div class="date-col" onselectstart="return false">'+
                                    '<div class="date-con"><span class="word"></span></div><div class="lunar-con"><span class="word"></span></div>'
                                    +'</div>');
                                if(k === 6) {
                                    htmls.push('</div>');
                                }
                            }
                        }
                        ++count;
                    }
                    return htmls.join('');
                }()),
                '</div>',

                '<div class="footer"><a href="javascript:;" class="cancel">取消</a><a href="javascript:;" class="confirm">确定</a>',(function() {
                    debugger;
                    if(me.settings.choosen_period_next_action.choose_starttime_onstartdate) {

                        return '<a href="javascript:;" class="choose_starttime_onstartdate">继续选择开始时间</a>';

                    }else if(me.settings.choosen_period_next_action.choose_endtime_onenddate) {

                        return '<a href="javascript:;" class="choose_endtime_onenddate">继续选择结束时间</a>';

                    }

                }()),'</div>',
            ].join('');
        }
    };
	var func = {
	    refreshDatepickerByChosenDate: function(me, chosenDate) {

            return func._refreshDatepicker(me, null, null, chosenDate);

        },
        refreshDatepickerByYearMonth: function(me, year, month) {

            return func._refreshDatepicker(me, year, month);

        },
	    _refreshDatepicker: function(me, year, month, chosenDate) {
	        return new Promise(function(resolve) {
                var today = moment().format('YYYY-MM-DD');
                var targetDate = chosenDate ? chosenDate : today;
                if(year && month) {
                    year = parseInt(year);
                    month = parseInt(month);
                    targetDate = year + '-' + (month < 10 ? '0' + month : month) + '-01'
                    if(targetDate === moment().format('YYYY-MM-01')) {
                        chosenDate = today
                    }
                }else if(chosenDate) {
                    targetDate = chosenDate;
                }else {
                    targetDate = chosenDate ? chosenDate : today;
                }
                var datepickerHtml = template.getDatepickerHtml(me, targetDate, chosenDate);
                var startdate, starttime, enddate, endtime;
                var $inner_datepicker = $(datepickerHtml);
                debugger;
                me.settings.$datepicker.attr('startdate', targetDate).empty().append($inner_datepicker);
                me.settings.$datepicker.on('click', 'a.choose_starttime_onstartdate', function() {
                    debugger;
                    var $chosen_d = me.settings.$datepicker.find('.date-col.date.chosen');
                    startdate = $chosen_d.addClass('startdate').attr('date');
                    me.settings.choosen_period_next_action.choose_startdate = false;
                    Process.getHms(me).then(function(hms) {
                        starttime = hms;
                        me.settings.choosen_period_next_action.choose_starttime_onstartdate = false;

                        me.settings.$datepicker.find('a.choose_starttime_onstartdate').remove();
                        me.settings.$datepicker.find('.footer').append('<a href="javascript:;" class="choose_endtime_onenddate">继续选择结束时间</a>');
                        me.settings.$datepicker.find('.tips-cell.choose_startdate').remove();
                        me.settings.$datepicker.find('.show-month-con .word-cell').append('<div class="tips-cell cell choose_enddate"><span class="word">选择结束日期</span></div>');

                        me.settings.$datepicker.removeClass('hide').fadeIn('fast', 'swing');
                        me.settings.choosen_period_next_action.choose_enddate = true;
                        me.settings.choosen_period_next_action.choose_endtime_onenddate = true;
                    });
                });
                me.settings.$datepicker.on('click', 'a.choose_endtime_onenddate', function() {
                    me.settings.choosen_period_next_action.choose_enddate = false;
                    debugger;
                    var $chosen_d = me.settings.$datepicker.find('.date-col.date.chosen');
                    enddate = $chosen_d.addClass('enddate').attr('date');
                    Process.getHms(me).then(function(hms) {
                        endtime = hms;
                        me.settings.choosen_period_next_action.choose_endtime_onenddate = false;
                        me.settings.$datepicker.removeClass('hide').fadeIn('fast', 'swing');
                    });
                });
                me.settings.$datepicker.on('click', '.date-col.date', function() {

                    me.settings.$datepicker.find('.date-col').removeClass('chosen');
                    if(me.settings.choosen_period_next_action.choose_startdate) {
                        debugger;
                        me.settings.$datepicker.find('.date-col').removeClass('startdate');
                        $(this).addClass('startdate');
                    }
                    if(me.settings.choosen_period_next_action.choose_enddate) {
                        var _startdate = me.settings.$datepicker.find('.date-col.date.startdate').addClass('s2e').attr('date');
                        var _endate = $(this).attr('date');
                        debugger;
                        if(_startdate > _endate) {
                            alert('结束时间应在开始时间之后');
                            return;
                        }
                        me.settings.$datepicker.find('.date-col.s2e').removeClass('s2e');
                        me.settings.$datepicker.find('.date-col').removeClass('enddate');
                        $(this).addClass('enddate');
                        while(true) {
                            _startdate = moment(_startdate).add(1, 'day').format('YYYY-MM-DD');
                            if(_startdate <= _endate) {
                                var $d = me.settings.$datepicker.find('.date-col[date="'+_startdate+'"]');
                                $d.addClass('s2e');
                            }else {
                                break;
                            }
                        }
                        debugger;
                    }
                    $(this).addClass('chosen');
                });
                me.settings.$datepicker.on('click', '.next-pre-con .pre', function() {
                    var startdate = me.settings.$datepicker.attr('startdate');
                    var pre_startdate = moment(startdate).subtract(1, 'month');
                    func.refreshDatepickerByYearMonth(me, pre_startdate.year(), pre_startdate.month()+1);
                });
                me.settings.$datepicker.on('click', '.next-pre-con .next', function() {
                    var startdate = me.settings.$datepicker.attr('startdate');
                    var next_startdate = moment(startdate).add(1, 'month');
                    func.refreshDatepickerByYearMonth(me, next_startdate.year(), next_startdate.month()+1);
                });
                me.settings.$datepicker.on('click', '.footer .confirm, .footer .cancel', function(e) {
                    debugger;
                    if($(e.target).hasClass('confirm')) {

                        var ret = {};
                        //单独选一个日期的情况
                        if(!me.settings.choosen_period_next_action.choose_startdate) {
                            ret.date = me.settings.$datepicker.find('.date-col.date.chosen').attr('date');
                            resolve(ret);
                            return;
                        }

                        startdate ? ret.startdate = startdate : me.settings.$datepicker.find('.date-col.date.chosen.startdate').attr('date');
                        starttime ? ret.starttime = starttime : void(0);
                        enddate ? ret.enddate = enddate : void(0);
                        endtime ? ret.endtime = endtime : void(0);
                        resolve(ret);
                    }else {
                        resolve(false);
                    }
                });
            });
        },

        refreshMe_InOneDay: function(me, date, starttime, endtime) {
	        debugger;
            $('#twperfectdatepicker').attr('date', date).attr('starttime', starttime).attr('endtime', endtime);
	        me.settings.$main_part.find('.showtime.ymd span.word').html(moment(date).format('M月D日') + "，" + Util.get_weekday_name(date));
	        if(starttime && endtime) {
                me.settings.$main_part.find('.showtime.hms span.word').html('<span class="starthms">'+moment(starttime).format('HH:mm')+'</span>' + ' - ' + '<span class="endhms">'+moment(endtime).format('HH:mm')+'</span>');
            }else {
	            var name = Util.get_dur_name(date);
                me.settings.$main_part.find('.lf.left .tips span.word').html(name);
            }
        },


        refreshMe_PeriodOfTime: function(me, startdate, starttime, enddate, endtime) {},


        showMainPart: function(me) {
            return new Promise(function(resolve) {
                me.settings.$main_container.removeClass('hide').fadeIn('fast', 'swing', function() {
                    resolve(true);
                });
            });
        },
        hideMainPart: function(me) {
            return new Promise(function(resolve) {
                me.settings.$main_container.fadeOut('fast', 'swing', function() {
                    me.settings.$main_container.addClass('hide');
                    resolve(true);
                });
            });
        },
        showDatePicker: function(me) {
	        return new Promise(function(resolve) {
                me.settings.$datepicker.removeClass('hide').fadeIn('fast', 'swing', function() {
                    resolve(true);
                });
            });
        },
        hideDatePicker: function(me) {
	        return new Promise(function(resolve) {
                me.settings.$datepicker.fadeOut('fast', 'swing', function() {
                    me.settings.$datepicker.addClass('hide');
                    //needEmpty ? me.settings.$datepicker.empty():void(0);
                    resolve(true);
                });
            });
        },
		/**
		 * 初始化
		 * @param me
		 */
		init: function(me) {
			var $el = $('#twperfectdatepicker');
			if($el.length) return;
			var starttime = moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'), endtime = moment().add(1.5, 'hours').format('YYYY-MM-DD HH:mm:ss');var durMills = parseInt(moment(endtime).format('x')) - parseInt(moment(starttime).format('x'));
            var sec = durMills/1000, min = sec/60, hour = min/60, day = hour/24;


            var $html = $(template.getMainHtml(starttime, endtime));

            me.settings.$el = $('#twperfectdatepicker');
			me.settings.$picker = $html;

			me.settings.$main_container = $html.find('.main-container');
			me.settings.$part_container = $html.find('.part-container');
			me.settings.$main_part = $html.find('.main-part');
			// me.settings.$datepicker_part = $html.find('.datepicker-part');

			me.settings.$extra_container = $html.find('.extra-container');
			me.settings.$datepicker = $html.find('.datepicker-part');
			me.settings.$timepicker = $html.find('.timepicker-part');
			me.settings.$simple_datepicker = $html.find('.simple-datepicker-part');

			$('body').append($html);



		},

		/**
		 * 绑定	
		 * @param me
		 */
		bindEvent: function(me) {
			var func = this;

            me.settings.$main_container.on('click', '.row.repeat', function () {
                var $this = $(this);
                alert('repeat');
            });

			me.settings.$main_container.on('click', '.row.notice', function () {
                var $this = $(this);
                alert('notice');
            });
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
                        //me.settings.$datepicker_part.empty().hide().addClass('hide');
                        me.settings.$timepicker.empty().hide().addClass('hide');
                    });
				}
			});

            me.settings.$main_part.on('click', '.lf.date', function() {
                var ret = {};
                Process.selectDate(me).then(function(o) {
                    ret = o;
                    return func.hideDatePicker(me);
                }).then(function () {
                    return func.showMainPart(me);
                }).then(function(){
                    func.refreshMe_InOneDay(me, ret.date, ret.starttime, ret.endtime);
                });

                /*// me.settings.choosen_period_next_action.choose_starttime_onstartdate = true;
                // me.settings.choosen_period_next_action.choose_endtime_onstartdate = true;
                me.settings.choosen_period_next_action.choose_startdate = true;
                me.settings.choosen_period_next_action.choose_starttime_onstartdate = true;
                // me.settings.choosen_period_next_action.choose_enddate = true;
                Process.getDateByTimePicker(me).then(function(ret) {
                    debugger;
                });*/
            });

            me.settings.$main_part.on('click', '.lf.time', function() {
				Process.getStartHmsAndEndHms(me).then(function(ret) {
				    debugger;
					var starthms = ret['starthms'], endhms = ret['endhms'];
					var date = $('#twperfectdatepicker').attr('date');
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

	    selectDate: function(me) {
	        return new Promise(function(resolve) {

                func.hideMainPart(me).then(function() {
                    return func.showDatePicker(me);
                }).then(function() {
                    var date = $('#twperfectdatepicker').attr('date') ? $('#twperfectdatepicker').attr('date') : moment().format('YYYY-MM-DD');
                    debugger;
                    return func.refreshDatepickerByChosenDate(me, date);
                }).then(function (ret) {
                    debugger;
                    resolve(ret);
                });

            });
        },








	    getDateByTimePicker: function(me) {
	        var process_func = this;
	        return new Promise(function () {
	            me.settings.$main_container.fadeOut('fast', 'swing', function() {
                    me.settings.$main_container.addClass('hide');
                    me.settings.$extra_container.show().fadeIn('fast', 'swing', function () {
                        me.settings.$datepicker.removeClass('hide');
                        func.refreshDatepickerByChosenDate(me, moment().format('YYYY-MM-DD'));
                    });
                });
            });
        },
        getHms: function(me) {
            var process_func = this;
            return new Promise(function(resolve, reject) {
                debugger;
                func.hideDatePicker(me).then(function() {
                    me.settings.$extra_container.show().fadeIn('fast', 'swing', function () {
                        debugger;
                        me.settings.$timepicker.empty().append(template.getTimepickerHtml_hours()).removeClass('hide').fadeIn('fast', 'swing');
                        me.settings.$timepicker.find('.time-hour-unit').on('click', function () {
                            debugger;
                            var $this = $(this);
                            me.settings.$timepicker.empty().append(template.getTimepickerHtml_mins($this.attr('hour')))
                                .find('.time-min-unit').off('click').on('click', function () {
                                    debugger;
                                    var $this = $(this);
                                    var hms = $this.attr('hms');
                                    me.settings.$timepicker.fadeOut('fast', 'swing', function() {
                                        debugger;
                                        me.settings.$timepicker.addClass('hide').empty();
                                        resolve(hms);
                                    });
                                });
                        });
                    });
                });
            });
        },
		getStartHmsAndEndHms: function(me) {
			var func = this;
			return new Promise(function(resolve, reject) {
				debugger;
                me.settings.$main_container.fadeOut('fast', 'swing', function() {
                    $(this).addClass('hide');
                    var starthms, endhms;
                    me.settings.$extra_container.show().fadeIn('fast', 'swing', function () {
                        me.settings.$timepicker.empty().append(template.getTimepickerHtml_hours()).removeClass('hide').fadeIn('fast', 'swing');
                        me.settings.$timepicker.find('.time-hour-unit').on('click', function() {
                            debugger;
                            var $this = $(this);
                            var hour = $this.attr('hour');
                            me.settings.$timepicker.empty().append(template.getTimepickerHtml_mins(hour));
                            me.settings.$timepicker.find('.time-min-unit').off('click').on('click', function() {
                                debugger;
                                var $this = $(this);
                                starthms = $this.attr('hms');
                                me.settings.$timepicker.empty().append(template.getTimepickerHtml_hours(starthms)).removeClass('hide').fadeIn('fast', 'swing');
                                me.settings.$timepicker.find('.time-hour-unit').on('click', function() {
                                    debugger;
                                    var $this = $(this);
                                    if($this.hasClass('lt-starthms')) {
                                        alert('结束时间应大于开始时间');
                                        return;
                                    }
                                    var hour = $this.attr('hour');
                                    me.settings.$timepicker.empty().append(template.getTimepickerHtml_mins(hour, starthms));
                                    me.settings.$timepicker.find('.time-min-unit').off('click').on('click', function() {
                                        debugger;
                                        var $this = $(this);
                                        if($this.hasClass('lt-starthms')) {
                                            alert('结束时间应大于开始时间');
                                            return;
                                        }
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
        'get_dur_name': function(chosenDate) {
		    var today = moment().format('YYYY-MM-DD');
            var starttime = moment(today).format('YYYY-MM-DD'), endtime = moment(chosenDate).format('YYYY-MM-DD');
            var durMills = parseInt(moment(chosenDate).format('x')) - parseInt(moment(today).format('x'));
            var sec = durMills/1000, min = sec/60, hour = min/60, day = hour/24;
            if(day > 2) {
                return day + '天后';
            }
            if(day < -2) {
                return -day + '天前'
            }
            var rel = {'-2': '前天', '-1': '昨天', '0': '今天', '1': '明天', '2': '后天'};
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
            choosen_period_next_action: {
                choose_startdate: false,//需要打开datepicker，选择开始日
                choose_starttime_onstartdate: false,//需要打开timepicker，选择开始日的开始时间
                choose_enddate: false,//需要打开datepicker，选择结束日
                choose_endtime_onenddate: false//需要打开timepicker，选择结束日的结束时间
            }//用户开始时间结束时间选择，指定下一组动作
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