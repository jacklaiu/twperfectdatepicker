;(function($) {
	
	'use strict';

	var template = {
	    getMainHtml: function(starttime, endtime) {
            var showDur = 1;
            var showDurName = '小时';
			return [
				'<div id="twperfectdatepicker" starttime="',moment(starttime).format('YYYY-MM-DD HH:mm:00'),'" endtime="',moment(endtime).format('YYYY-MM-DD HH:mm:00'),'" class="hide" style="display: none;">',
					'<div class="main-container">',
                        '<div class="part-container">',
                            '<div class="main-part part">',
                                '<div class="row time con">',
                                    (function () {
                                        var startdate = moment(starttime).format('YYYY-MM-DD');
                                        var enddate = moment(endtime).format('YYYY-MM-DD');
                                        return [
                                            '<div class="left start se lf',(startdate === enddate) ? ' hide':'','">',
                                                '<div class="title cell"><span class="word">开始</span></div>',
                                                '<div class="showtime ymd cell"><span class="word" >',moment(starttime).format('M月DD日'),'，',Util.get_weekday_name(starttime),'</span>,</div>',
                                                '<div class="tips cell"><span class="word">',moment(starttime).format('HH:mm'),'</span></div>',
                                            '</div>',
                                            '<div class="right end se lf',(startdate === enddate) ? ' hide':'','">',
                                                '<div class="title cell"><span class="word">结束</span></div>',
                                                '<div class="showtime ymd cell"><span class="word" >',moment(endtime).format('M月DD日'),'，',Util.get_weekday_name(endtime),'</span>,</div>',
                                                '<div class="tips cell"><span class="word">',moment(endtime).format('HH:mm'),'</span></div>',
                                            '</div>',
                                            '<div class="left date oneday lf',(startdate !== enddate) ? ' hide':'','">',
                                                '<div class="title cell"><span class="word">日期</span></div>',
                                                '<div class="showtime ymd cell"><span class="word" >',moment(starttime).format('M月DD日'),'，',Util.get_weekday_name(starttime),'</span>,</div>',
                                                '<div class="tips cell"><span class="word">今天</span></div>',
                                            '</div>',
                                            '<div class="right time oneday lf',(startdate !== enddate) ? ' hide':'','">',
                                                '<div class="title cell"><span class="word">时间</span></div>',
                                                '<div class="showtime hms cell">',
                                                    '<span class="word">',
                                                        '<span class="starthms">',moment(starttime).format('HH:mm'),'</span> - <span class="endhms">',moment(endtime).format('HH:mm'),'</span>',
                                                    '</span>',
                                                '</div>',
                                                '<div class="tips cell"><span class="word">持续时间：<span class="showdur">',showDur + showDurName,'</span></span></div>',
                                            '</div>'
                                        ].join('');
                                    }()),
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
                        '<div class="notice-advance-part part hide" onselectstart="return false">',
                            '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe76a;</i></div><div class="word-con con"><span class="word">无</span></div></div>',
                            '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe76a;</i></div><div class="word-con con"><span class="word">准时</span></div></div>',
                            '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe76a;</i></div><div class="word-con con"><span class="word">提前5分钟</span></div></div>',
                            '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe76a;</i></div><div class="word-con con"><span class="word">提前30分钟</span></div></div>',
                            '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe76a;</i></div><div class="word-con con"><span class="word">提前1小时</span></div></div>',
                            '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe76a;</i></div><div class="word-con con"><span class="word">提前1天</span></div></div>',
                            '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe76a;</i></div><div class="word-con con"><span class="word">提前2天</span></div></div>',
                            '<div class="row custom"><div class="checkbox-con con"><i class="iconfont">&#xe600;</i></div><div class="word-con con"><span class="word">自定义</span></div></div>',
                        '</div>',
                        '<div class="notice-advance-custom-part part hide">',
                            '<div class="header"><div class="word-con"><span class="word">自定义提醒</span></div></div>',
                            '<div class="body">',
                                '<div class="select-con">',
                                    '<div class="select-cell time"><div class="time-select-con"><span class="word time-val">15</span></div><div class="icon-con"><i class="iconfont">&#xe673;</i></div></div>',
                                    '<div class="select-cell unit"><div class="unit-select-con"><span class="word unit-val">分钟</span></div><div class="icon-con"><i class="iconfont">&#xe673;</i></div></div>',
                                '</div>',
                            '</div>',
                            '<div class="footer"><a href="javascript:;" class="cancel">取消</a><a href="javascript:;" class="confirm">确定</a></div>',
                        '</div>',
                        '<div class="repeat-part part hide">',
                            //fill on event
                        '</div>',
				    '</div>',
				'</div>'
			].join('');
        },
	    getTimepickerHtml_hours: function(starthms) {
	        debugger;
	        var s_h;
	        if(starthms && starthms.length === 19) {
	            s_h = moment(starthms).format('H')
            }else {
                s_h = starthms ? moment(moment().format('YYYY-MM-DD') + ' ' + starthms).format('H'): void(0);
            }
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
            var s_hhmm;
            if(starthms && starthms.length === 19) {
                s_hhmm = moment(starthms).format('H')
            }else {
                s_hhmm = starthms ? moment(moment().format('YYYY-MM-DD') + ' ' + starthms).format('HH:mm'): void(0);
            }

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

        getDatepicker_datesHtml: function(me, targetDate, chosenDate) {
            var startDayOfMonth = moment(targetDate).format('YYYY-MM-01');
            var endDayOfMonth = moment(targetDate).endOf('month').format('YYYY-MM-DD');
            var durMills = parseInt(moment(endDayOfMonth).format('x')) - parseInt(moment(startDayOfMonth).format('x'));
            var durDays = durMills/1000/60/60/24;
            var month = moment(targetDate).format('YYYY-MM');
            var htmls = [];
            var count = 0;
            htmls.push('<div class="month-dates-con" year-month="'+moment(startDayOfMonth).format('YYYY-MM')+'">');
            for(var i = 1, leni = durDays; i <= leni + 1; i++) {
                var date = month + '-' + (i < 10 ? '0' + i : i);
                var IDayCn = lunar_calendar.solar2lunar_yyyymmdd(date).IDayCn;
                var weekday = moment(date).weekday();
                //今日
                var todayClass = moment().format('YYYY-MM-DD') === date ? 'today':'';
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
                        '<div class="date-col date '+todayClass + ' ' + chosenDayClass + '" year-month="'+moment(date).format('YYYY-MM')+'" date="'+date+'" weekday="'+weekday+'" onselectstart="return false">'+
                        '<div class="date-con"><span class="word">'+i+'</span></div><div class="lunar-con"><span class="word">'+IDayCn+'</span></div>'
                        +'</div>');
                    ++count;
                    continue;
                }
                htmls.push(
                    '<div class="date-col date '+todayClass + ' ' + chosenDayClass + '" year-month="'+moment(date).format('YYYY-MM')+'" date="'+date+'" weekday="'+weekday+'" onselectstart="return false">'+
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
            htmls.push('</div>');
            return htmls.join('');
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
                            '<div class="next-pre-con" onselectstart="return false"><div class="icon-con pre pre-btn"><i class="iconfont">&#xe61b;</i></div><div class="icon-con next next-btn"><i class="iconfont">&#xe6a6;</i></div></div>',
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
                    return template.getDatepicker_datesHtml(me, targetDate, chosenDate);
                }()),
                '</div>',

                '<div class="footer"><a href="javascript:;" class="cancel">取消</a><a href="javascript:;" class="confirm">确定</a>',(function() {
                    debugger;
                    var starthide = me.settings.choosen_period_next_action.choose_starttime_onstartdate ? '' : 'hide';
                    var endhide = me.settings.choosen_period_next_action.choose_endtime_onenddate ? '' : 'hide';
                    return '<a href="javascript:;" mills="'+Util.currentMills()+'" class="choose_starttime_onstartdate '+starthide+'">继续选择开始时间</a>'+
                        '<a href="javascript:;" mills="'+Util.currentMills()+'" class="choose_endtime_onenddate '+endhide+'">继续选择结束时间</a>'
                }()),'</div>',
            ].join('');
        }
    };
	var func = {
	    /*refreshDatepickerByChosenDate: function(me, chosenDate) {

            return func._refreshDatepicker(me, null, null, chosenDate);

        },
        refreshDatepickerByYearMonth: function(me, year, month) {

            return func._refreshDatepicker(me, year, month);

        },*/
	    _refreshDatepicker: function(me, year, month, chosenDate, cb, isNextPre, timeMsg) {
            var isInit = !me.settings.$extra_container.find('.datepicker-part .month-dates-con').length;

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

            if(isInit){
                debugger;
                var datepickerHtml = template.getDatepickerHtml(me, targetDate, chosenDate);
                me.settings.$datepicker.attr('startdate', moment(targetDate).format('YYYY-MM-01')).append(datepickerHtml);
            }else {
                debugger;
                //var datesHtml = template.getDatepicker_datesHtml(me, targetDate, chosenDate);
                var $date_con = me.settings.$datepicker.find('.body.date-con');
                var ym_selector;
                if(year && month) {
                    ym_selector = year + '-' + (month < 10 ? '0'+month:month);
                }else {
                    ym_selector = moment(chosenDate).format('YYYY-MM');
                }
                var $mdc = $date_con.find('.month-dates-con[year-month="'+ym_selector+'"]');
                if($mdc.length !== 0 && !$mdc.hasClass('hide')) {
                    if(!isNextPre) {
                        me.settings.$datepicker.find('.date-col.date').each(function () {
                            if($(this).hasClass('s2e')||$(this).hasClass('startdate')||$(this).hasClass('enddate')) {
                                $(this).addClass('mark');
                            }
                            $(this).removeClass('chosen').removeClass('startdate').removeClass('s2e').removeClass('enddate');
                        });
                        me.settings.$datepicker.find('.date-col.date[date="'+chosenDate+'"]').addClass('chosen');
                    }
                    if(me.settings.choosen_period_next_action.choose_starttime_onstartdate) {
                        me.settings.$datepicker.find('.footer').find('.choose_starttime_onstartdate').removeClass('hide');
                    }
                    return;
                }
                $date_con.find('.month-dates-con').addClass('hide');
                if($mdc.length === 0) {
                    var datesHtml = template.getDatepicker_datesHtml(me, targetDate, chosenDate);
                    $date_con.append(datesHtml);
                }else {
                    $mdc.removeClass('hide');
                    if(!isNextPre) {
                        me.settings.$datepicker.find('.date-col.date').each(function () {
                            if($(this).hasClass('s2e')||$(this).hasClass('startdate')||$(this).hasClass('enddate')) {
                                $(this).addClass('mark');
                            }
                            $(this).removeClass('chosen').removeClass('startdate').removeClass('s2e').removeClass('enddate');
                        });
                        me.settings.$datepicker.find('.date-col.date[date="'+chosenDate+'"]').addClass('chosen');
                    }
                    if(me.settings.choosen_period_next_action.choose_starttime_onstartdate) {
                        me.settings.$datepicker.find('.footer').find('.choose_starttime_onstartdate').removeClass('hide');
                    }
                }
                me.settings.$datepicker.attr('startdate', moment(targetDate).format('YYYY-MM-01'));
                me.settings.$datepicker.find('.show-month-con span.year').html((year ? year : moment(targetDate).format('YYYY')) + '年');
                me.settings.$datepicker.find('.show-month-con span.month').html((month ? month : moment(targetDate).format('M')) + '月');
            }

            var startdate, starttime, enddate, endtime;
            if(timeMsg) {
                startdate = timeMsg['startdate'];
                starttime = timeMsg['starttime'];
                enddate = timeMsg['enddate'];
                endtime = timeMsg['endtime'];
            }
            me.settings.$datepicker.find('a.choose_starttime_onstartdate').off('click').on('click', function() {
                debugger;
                var $chosen_d = me.settings.$datepicker.find('.date-col.date.chosen');
                startdate = $chosen_d.addClass('startdate').attr('date');
                me.settings.choosen_period_next_action.choose_startdate = false;
                Process.getHms(me).then(function(hms) {
                    starttime = hms;
                    me.settings.choosen_period_next_action.choose_starttime_onstartdate = false;
                    me.settings.$datepicker.find('a.choose_starttime_onstartdate').addClass('hide');

                    me.settings.$datepicker.find('.footer').find('.choose_endtime_onenddate').removeClass('hide');

                    me.settings.$datepicker.find('.footer').find('.cancel').addClass('hide').parent().find('.confirm').addClass('hide');
                    me.settings.$datepicker.find('.tips-cell.choose_startdate').remove();

                    me.settings.$datepicker.find('.show-month-con .word-cell').append('<div class="tips-cell cell choose_enddate"><span class="word">选择结束日期</span></div>');

                    me.settings.$datepicker.removeClass('hide').fadeIn('fast', 'swing');
                    me.settings.choosen_period_next_action.choose_enddate = true;
                    me.settings.choosen_period_next_action.choose_endtime_onenddate = true;
                });
            });
            me.settings.$datepicker.find('a.choose_endtime_onenddate').off('click').on('click', function() {
                me.settings.choosen_period_next_action.choose_enddate = false;
                me.settings.$datepicker.find(".show-month-con .choose_enddate").remove();
                var $chosen_d = me.settings.$datepicker.find('.date-col.date.chosen');
                enddate = $chosen_d.addClass('enddate').attr('date');

                Process.getHms(me, startdate === enddate ? starttime : '').then(function(hms) {
                    endtime = hms;
                    me.settings.choosen_period_next_action.choose_endtime_onenddate = false;
                    //me.settings.$datepicker.removeClass('hide').fadeIn('fast', 'swing');
                    debugger;
                    var ret = {};
                    if(startdate) {
                        ret.starttime = startdate + ' ' + starttime+':00';
                    }
                    if(enddate) {
                        ret.endtime = enddate + ' ' + endtime+':00';
                    }
                    me.settings.$datepicker.find('.choose_endtime_onenddate').addClass('hide');
                    me.settings.$datepicker.find('.confirm').removeClass('hide');
                    me.settings.$datepicker.find('.cancel').removeClass('hide');
                    cb ? cb(ret) : void(0);
                });
            });
            me.settings.$datepicker.find('.date-col.date').off('click').on('click', function() {
                me.settings.$datepicker.find('.mark').each(function () {
                    $(this).removeClass('mark');
                });
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
            me.settings.$datepicker.find('.pre-btn').off('click').on('click', function() {
                debugger;
                var timeMsg = {};
                startdate ? timeMsg['startdate'] = startdate: void(0);
                starttime ? timeMsg['starttime'] = starttime: void(0);
                enddate ? timeMsg['enddate'] = enddate: void(0);
                endtime ? timeMsg['endtime'] = endtime: void(0);
                var pre_dp_startdate = moment(me.settings.$datepicker.attr('startdate')).subtract(1, 'month');
                func._refreshDatepicker(me, pre_dp_startdate.year(), pre_dp_startdate.month()+1, null, cb, true, timeMsg);
            });
            me.settings.$datepicker.find('.next-btn').off('click').on('click', function() {
                debugger;
                var timeMsg = {};
                startdate ? timeMsg['startdate'] = startdate: void(0);
                starttime ? timeMsg['starttime'] = starttime: void(0);
                enddate ? timeMsg['enddate'] = enddate: void(0);
                endtime ? timeMsg['endtime'] = endtime: void(0);
                var next_dp_startdate = moment(me.settings.$datepicker.attr('startdate')).add(1, 'month');
                func._refreshDatepicker(me, next_dp_startdate.year(), next_dp_startdate.month()+1, null, cb, true, timeMsg);
            });
            me.settings.$datepicker.find('.footer .confirm, .footer .cancel').off('click').on('click', function(e) {
                debugger;
                if($(e.target).hasClass('confirm')) {
                    debugger;
                    var ret = {};
                    //单独选一个日期的情况
                    if(!me.settings.choosen_period_next_action.choose_startdate) {
                        ret.date = me.settings.$datepicker.find('.date-col.date.chosen').attr('date');
                        cb ? cb(ret) : void(0);
                    }
                }else {
                    cb ? cb() : void(0);
                }
            });
        },

        refreshMeByDate: function(me, date) {

	        debugger;

	        var $el = $('#twperfectdatepicker');

	        me.settings.$main_part.find('.lf.se').addClass('hide');
	        me.settings.$main_part.find('.lf.oneday').removeClass('hide');

	        var starttime = $el.attr('starttime'), endtime = $el.attr('endtime');
	        var startHMS = moment(starttime).format('HH:mm:00');
	        var endHMS = moment(endtime).format('HH:mm:00');
	        starttime = date + ' ' + starttime.split(' ')[1];
	        endtime = date + ' ' + endtime.split(' ')[1];
	        $el.attr('starttime', starttime).attr('endtime', endtime);
            me.settings.$main_part.find('.lf.oneday .showtime.ymd span.word').html(moment(date).format('M月D日') + "，" + Util.get_weekday_name(date));
            me.settings.$main_part.find('.lf.left.oneday .tips span.word').html(Util.get_dur_name(date));
        },

        refreshMeByStarttimeAndEndtime: function(me, starttime, endtime) {
            var $el = $('#twperfectdatepicker');
            var startdate = moment(starttime).format('YYYY-MM-DD');
            var enddate = moment(endtime).format('YYYY-MM-DD');
            if(startdate !== enddate) {
                debugger;
                $el.attr('starttime', starttime).attr('endtime', endtime);

                me.settings.$main_part.find('.lf.oneday').addClass('hide');
                me.settings.$main_part.find('.lf.se').removeClass('hide');

                //不同年
                if(startdate.split('-')[0] !== enddate.split('-')[0]) {
                    me.settings.$main_part.find('.lf.se.start .showtime.ymd span.word')
                        .html(moment(starttime).format('YY年M月D日') + "，" + Util.get_weekday_name(moment(starttime).format('YYYY-MM-DD')));

                    me.settings.$main_part.find('.lf.se.start .tips span.word')
                        .html(moment(starttime).format('HH:mm'));

                    me.settings.$main_part.find('.lf.se.end .showtime.ymd span.word')
                        .html(moment(endtime).format('YY年M月D日') + "，" + Util.get_weekday_name(moment(endtime).format('YYYY-MM-DD')));

                    me.settings.$main_part.find('.lf.se.end .tips span.word')
                        .html(moment(endtime).format('HH:mm'));
                }else{
                    me.settings.$main_part.find('.lf.se.start .showtime.ymd span.word')
                        .html(moment(starttime).format('M月D日') + "，" + Util.get_weekday_name(moment(starttime).format('YYYY-MM-DD')));

                    me.settings.$main_part.find('.lf.se.start .tips span.word')
                        .html(moment(starttime).format('HH:mm'));

                    me.settings.$main_part.find('.lf.se.end .showtime.ymd span.word')
                        .html(moment(endtime).format('M月D日') + "，" + Util.get_weekday_name(moment(endtime).format('YYYY-MM-DD')));

                    me.settings.$main_part.find('.lf.se.end .tips span.word')
                        .html(moment(endtime).format('HH:mm'));
                }



                /*me.settings.$main_part.find('.showtime.ymd span.word').html(moment(date).format('M月D日') + "，" + Util.get_weekday_name(date));
                me.settings.$main_part.find('.lf.left .tips span.word').html(Util.get_dur_name(date));

                me.settings.$main_part.find('.showtime.hms span.starthms').html()*/

            }else {

                me.settings.$main_part.find('.lf.se').addClass('hide');
                me.settings.$main_part.find('.lf.oneday').removeClass('hide');
                var date = moment(starttime).format('YYYY-MM-DD');
                var _starttime = $el.attr('starttime'), _endtime = $el.attr('endtime');
                var startHMS = moment(_starttime).format('HH:mm:00');
                var endHMS = moment(_endtime).format('HH:mm:00');
                _starttime = date + ' ' + _starttime.split(' ')[1];
                _endtime = date + ' ' + _endtime.split(' ')[1];

                $el.attr('starttime', _starttime).attr('endtime', _endtime);

                me.settings.$main_part.find('.lf.oneday .showtime.ymd span.word').html(moment(date).format('M月D日') + "，" + Util.get_weekday_name(date));
                me.settings.$main_part.find('.lf.left.oneday .tips span.word').html(Util.get_dur_name(date));
                me.settings.$main_part.find('.showtime.hms span.word').html('<span class="starthms">'+moment(starttime).format('HH:mm')+'</span>' + ' - ' + '<span class="endhms">'+moment(endtime).format('HH:mm')+'</span>');
                var msg = Util.get_dur_msg(starttime, endtime), realDur = msg['realdur'], showDur = msg['showdur'], showDurName = msg['showdurname'];
                me.settings.$main_part.find('span.showdur').html((showDur !== realDur ? '约':'') + showDur + showDurName);
                /*$el.attr('date', date).attr('starttime', starttime).attr('endtime', endtime);
                me.settings.$main_part.find('.showtime.ymd span.word').html(moment(date).format('M月D日') + "，" + Util.get_weekday_name(date));
                if(starttime && endtime) {
                    me.settings.$main_part.find('.showtime.hms span.word').html('<span class="starthms">'+moment(starttime).format('HH:mm')+'</span>' + ' - ' + '<span class="endhms">'+moment(endtime).format('HH:mm')+'</span>');
                }else {
                    var name = Util.get_dur_name(date);
                    me.settings.$main_part.find('.lf.left .tips span.word').html(name);
                }*/
            }
	        debugger;
            $el.attr('starttime', starttime).attr('endtime', endtime);
	        /*me.settings.$main_part.find('.showtime.ymd span.word').html(moment(date).format('M月D日') + "，" + Util.get_weekday_name(date));
	        if(starttime && endtime) {
                me.settings.$main_part.find('.showtime.hms span.word').html('<span class="starthms">'+moment(starttime).format('HH:mm')+'</span>' + ' - ' + '<span class="endhms">'+moment(endtime).format('HH:mm')+'</span>');
            }else {
	            var name = Util.get_dur_name(date);
                me.settings.$main_part.find('.lf.left .tips span.word').html(name);
            }*/
        },

        showRepeat: function(me) {
            return new Promise(function (resolve) {
                me.settings.$repeat.removeClass('hide').fadeIn('fast', 'swing', function () {
                    resolve();
                });
            });
        },
        hideRepeat: function(me) {
            return new Promise(function (resolve) {
                me.settings.$repeat.fadeOut('fast', 'swing', function () {
                    me.settings.$repeat.addClass('hide');
                    resolve();
                });
            });
        },
        showNoticeAdvanceCustom: function(me) {
            return new Promise(function (resolve) {
                me.settings.$notice_advance_custom.removeClass('hide').fadeIn('fast', 'swing', function () {
                    resolve();
                });
            });
        },
        hideNoticeAdvanceCustom: function(me) {
            return new Promise(function (resolve) {
                me.settings.$notice_advance_custom.fadeOut('fast', 'swing', function () {
                    me.settings.$notice_advance_custom.addClass('hide');
                    resolve();
                });
            });
        },
        showNoticeAdvance: function(me) {
	        return new Promise(function (resolve) {
	            me.settings.$notice_advance.removeClass('hide').fadeIn('fast', 'swing', function () {
                    resolve();
                });
	        });
        },
        hideNoticeAdvance: function(me) {
            return new Promise(function (resolve) {
                me.settings.$notice_advance.fadeOut('fast', 'swing', function () {
                    me.settings.$notice_advance.addClass('hide');
                    resolve();
                });
            });
        },
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
			var starttime = moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss');
			var endtime = moment().add(1.5, 'hours').format('YYYY-MM-DD HH:mm:ss');
			var durMills = parseInt(moment(endtime).format('x')) - parseInt(moment(starttime).format('x'));
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
			//me.settings.$simple_datepicker = $html.find('.simple-datepicker-part');
			me.settings.$notice_advance = $html.find('.notice-advance-part');
			me.settings.$notice_advance_custom = $html.find('.notice-advance-custom-part');
            //func.initNoticeAdanceCustom(me);
			me.settings.$repeat = $html.find('.repeat-part');
			$('body').append($html);
		},

        refreshNoticeAdanceCustom: function(me, time, unit) {
            var $target_time = me.settings.$notice_advance_custom.find('.time-select-con');
            var $target_unit = me.settings.$notice_advance_custom.find('.unit-select-con');



        },

		/**
		 * 绑定	
		 * @param me
		 */
		bindEvent: function(me) {
			var func = this;
			
			me.settings.$notice_advance.on('click', '.row.custom', function () {
                func.hideNoticeAdvance(me).then(function () {
                    return func.showNoticeAdvanceCustom(me);
                }).then(function () {

                });
            });
			me.settings.$notice_advance.on('click', '.row.simple', function() {
			    var $this = $(this);
			    var $rows = $this.parent().find('.row.simple');
			    $rows.each(function() {
			        var $this = $(this);
			        $this.removeClass('checked').find('i.iconfont').html('&#xe76a;').removeAttr('style');
                });
			    if($this.hasClass('checked')) {
			        $this.removeClass('checked');
			        $this.find('i.iconfont').removeAttr('style').html('&#xe76a;');
                }else {
			        $this.addClass('checked');
                    $this.find('i.iconfont').removeAttr('style').html('&#xe671;').css('color', '#6683DF');
                }
            });

            me.settings.$main_container.on('click', '.row.repeat', function () {
                var $this = $(this);
                alert('repeat');
            });

			me.settings.$main_container.on('click', '.row.notice', function () {
                var $this = $(this);
                func.hideMainPart(me).then(function () {
                    return func.showNoticeAdvance(me);
                }).then(function () {

                });
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

			me.settings.$main_part.on('click', '.lf.se', function() {
                var ret = {};
                debugger;
                me.settings.choosen_period_next_action.choose_starttime_onstartdate = true;
                Process.selectDate(me, function(o) {
                    debugger;
                    ret = o;
                    func.hideDatePicker(me).then(function(o) {
                        debugger;
                        return func.hideDatePicker(me);
                    }).then(function () {
                        debugger;
                        return func.showMainPart(me);
                    }).then(function(){
                        debugger;
                        if(ret.date) {
                            func.refreshMeByDate(me, ret.date);
                            return;
                        }
                        func.refreshMeByStarttimeAndEndtime(me, ret.starttime, ret.endtime);
                    });;
                });
            });
            me.settings.$main_part.on('click', '.lf.oneday.date', function() {
                var ret = {};
                me.settings.choosen_period_next_action.choose_starttime_onstartdate = true;
                Process.selectDate(me, function(o) {
                    debugger;
                    ret = o;
                    func.hideDatePicker(me).then(function(o) {
                        debugger;
                        return func.hideDatePicker(me);
                    }).then(function () {
                        debugger;
                        return func.showMainPart(me);
                    }).then(function(){
                        debugger;
                        if(ret.date) {
                            func.refreshMeByDate(me, ret.date);
                            return;
                        }
                        func.refreshMeByStarttimeAndEndtime(me, ret.starttime, ret.endtime);
                    });
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
            me.settings.$main_part.on('click', '.lf.oneday.time', function() {
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
            });
            me.settings.$main_part.on('click', 'a.cancel', function() {
                func.beforeHide(me);
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

	    selectDate: function(me, cb) {
            func.hideMainPart(me).then(function() {
                return func.showDatePicker(me);
            }).then(function() {
                debugger;
                var date = moment($('#twperfectdatepicker').attr('starttime')).format('YYYY-MM-DD');
                func._refreshDatepicker(me, null, null, date, function(ret) {
                    debugger;
                    cb ? cb(ret): void(0);
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
                        func._refreshDatepicker(me, null, null, moment().format('YYYY-MM-DD'));
                    });
                });
            });
        },
        getHms: function(me, starttime) {
            var process_func = this;
            return new Promise(function(resolve, reject) {
                debugger;
                func.hideDatePicker(me).then(function() {
                    me.settings.$extra_container.show().fadeIn('fast', 'swing', function () {
                        debugger;
                        me.settings.$timepicker.empty().append(template.getTimepickerHtml_hours(starttime)).removeClass('hide').fadeIn('fast', 'swing');
                        me.settings.$timepicker.find('.time-hour-unit').on('click', function () {
                            debugger;
                            var $this = $(this);
                            if($this.hasClass('lt-starthms')) {
                                alert('结束时间应大于开始时间');
                                return;
                            }
                            me.settings.$timepicker.empty().append(template.getTimepickerHtml_mins($this.attr('hour'), starttime))
                                .find('.time-min-unit').off('click').on('click', function () {
                                    debugger;
                                    var $this = $(this);
                                    if($this.hasClass('lt-starthms')) {
                                        alert('结束时间应大于开始时间');
                                        return;
                                    }
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
        currentMills: function() {
            Util.currentMills_pre_ts = Util.currentMills_pre_ts ? Util.currentMills_pre_ts : 0;
            var ts = parseInt((new Date()).valueOf());
            var ret = 0;
            if(ts <= Util.currentMills_pre_ts) {
                ret = Util.currentMills_pre_ts + 1;
            }else {
                ret = ts;
            }
            Util.currentMills_pre_ts = ret;
            return ret;
        },
        dropdownMenu: function($target, btns, onshow, onhide, top_dvalue, left_dvalue) {
            return (function() {
                var $inner_target = $target;
                var inner_btns = btns;
                var inner_onshow = onshow;
                var inner_onhide = onhide;
                var params = {btns:inner_btns};
                inner_onshow ? params.onshow = inner_onshow : null;
                inner_onhide ? params.onhide = inner_onhide : null;
                var moduleid = 'util.dropdownmenu.layer.' + tww_currentMills();
                var dd = $inner_target.twlayer(
                    {
                        moduleid: moduleid,
                        modulename: 'util.dropdownmenu.layer',
                        params: params,
                        top_dvalue: top_dvalue ? top_dvalue : 0,
                        left_dvalue: left_dvalue ?  left_dvalue : 0
                    });

                $inner_target.attr('twlayer-moduleid', moduleid);

                return dd;
            }());
        },
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