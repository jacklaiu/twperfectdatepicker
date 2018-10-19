;(function($) {
	
	'use strict';

	var template = {
	    getMainHtml: function(me, starttime, endtime) {
            var showDur = 1;
            var showDurName = '小时';
			return [
				'<div id="',me.settings.id,'" class="twperfectdatepicker hide" starttime="',moment(starttime).format('YYYY-MM-DD HH:mm:00'),'" endtime="',moment(endtime).format('YYYY-MM-DD HH:mm:00'),'" class="hide" style="display: none;">',
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
                                                '<div class="showtime ymd cell"><span class="word" >',moment(starttime).format('M月D日'),'，',Util.get_weekday_name(starttime),'</span>,</div>',
                                                '<div class="tips cell"><span class="word">',moment(starttime).format('HH:mm'),'</span></div>',
                                            '</div>',
                                            '<div class="right end se lf',(startdate === enddate) ? ' hide':'','">',
                                                '<div class="title cell"><span class="word">结束</span></div>',
                                                '<div class="showtime ymd cell"><span class="word" >',moment(endtime).format('M月D日'),'，',Util.get_weekday_name(endtime),'</span>,</div>',
                                                '<div class="tips cell"><span class="word">',moment(endtime).format('HH:mm'),'</span></div>',
                                            '</div>',
                                            '<div class="left date oneday lf',(startdate !== enddate) ? ' hide':'','">',
                                                '<div class="title cell"><span class="word">日期</span></div>',
                                                '<div class="showtime ymd cell"><span class="word" >',moment(starttime).format('M月D日'),'，',Util.get_weekday_name(starttime),'</span>,</div>',
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
                        '<div class="extra-btn-con">',
                            '<div class="row notice con ',(me.settings.enableNoticeAdvance ? '':'hide'),'" style="border-bottom: 0">',
                                '<div class="cell icon-cell"><i class="iconfont">&#xe79b;</i></div>',
                                '<div class="cell word-cell"><span class="word">设置提醒</span></div>',
                            '</div>',
                /*'<div class="row repeat con" style="border-bottom: 0">',
                    '<div class="cell icon-cell"><i class="iconfont">&#xe7b1;</i></div>',
                    '<div class="cell word-cell"><span class="word">设置重复</span></div>',
                '</div>',*/
	                        '<div class="row timezone con ',(me.settings.enableTimezone ? '':'hide'),'" style="border-bottom: 0" onselectstart="return false">',
		                        '<div class="cell icon-cell"><i class="iconfont" style="font-size: 19px;">&#xe767;</i></div>',
		                        '<div class="cell word-cell"><span class="word"><span class="title">设置时区</span><span class="showtimezone"></span></div>',
		                    '</div>',
                        '</div>',
                        '<div class="footer"><a href="javascript:;" class="me_cancel">取消</a><a href="javascript:;" class="me_confirm">确定</a></div>',
					'</div>',
					'<div class="extra-container">',
                        '<div class="simple-datepicker-part part hide">',
                            '<div class="con year-con">',(function() {
                                return '';
                            }()),'</div>',
                            '<div class="con month-con"></div>',
                            '<div class="con date-con"></div>',
                        '</div>',

                //*****************************************************************************************************************************************************************
'<div class="datetime-con hide">',

    '<div class="datetime-result-con">',
        '<div class="starttime-con se-con">',
            '<div class="title-con con">',
                '<div class="word-cell cell"><span class="word">开始时间</span></div>',
            '</div>',
            '<div class="date-con con">',
                '<div class="word-cell cell"><span class="word">2018-10-01</span></div>',
            '</div>',
            '<div class="time-con con">',
                '<div class="word-cell cell"><span class="word">10:50:00</span></div>',
            '</div>',
        '</div>',
        '<div class="endtime-con se-con">',
            '<div class="title-con con">',
                '<div class="word-cell cell"><span class="word">结束时间</span></div>',
            '</div>',
            '<div class="date-con con">',
                '<div class="word-cell cell"><span class="word">2018-10-01</span></div>',
            '</div>',
            '<div class="time-con con">',
                '<div class="word-cell cell"><span class="word">10:50:00</span></div>',
            '</div>',
        '</div>',
        /*'<div class="footer">',
        	'<a href="javascript:;" class="word-cell"><span class="word">取消</span></a>',
        	'<a href="javascript:;" class="word-cell"><span class="word">确定</span></a>',
        '</div>',*/
    '</div>',
        '<div class="timepicker-part part hide">',
        //fill on event
        '</div>',
        '<div class="datepicker-part part hide">',
        //fill on event
        '</div>',
    '</div>',
                //*****************************************************************************************************************************************************************
                        '<div class="timezone-part part hide">',
                            '<div class="timezone-item remove-timezone"><div class="word-con"><span class="word">取消</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT+1200"><div class="word-con"><span class="word">GMT+12:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT+1100"><div class="word-con"><span class="word">GMT+11:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT+1000"><div class="word-con"><span class="word">GMT+10:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT+0900"><div class="word-con"><span class="word">GMT+09:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT+0800"><div class="word-con"><span class="word">GMT+08:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT+0700"><div class="word-con"><span class="word">GMT+07:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT+0600"><div class="word-con"><span class="word">GMT+06:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT+0500"><div class="word-con"><span class="word">GMT+05:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT+0400"><div class="word-con"><span class="word">GMT+04:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT+0300"><div class="word-con"><span class="word">GMT+03:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT+0200"><div class="word-con"><span class="word">GMT+02:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT+0100"><div class="word-con"><span class="word">GMT+01:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT+0000"><div class="word-con"><span class="word">GMT+00:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT-0100"><div class="word-con"><span class="word">GMT-01:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT-0200"><div class="word-con"><span class="word">GMT-02:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT-0300"><div class="word-con"><span class="word">GMT-03:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT-0400"><div class="word-con"><span class="word">GMT-04:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT-0500"><div class="word-con"><span class="word">GMT-05:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT-0600"><div class="word-con"><span class="word">GMT-06:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT-0700"><div class="word-con"><span class="word">GMT-07:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT-0800"><div class="word-con"><span class="word">GMT-08:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT-0900"><div class="word-con"><span class="word">GMT-09:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT-1000"><div class="word-con"><span class="word">GMT-10:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT-1100"><div class="word-con"><span class="word">GMT-11:00</span></div></div>',
                        	'<div class="timezone-item" timezone="GMT-1200"><div class="word-con"><span class="word">GMT-12:00</span></div></div>',
                        '</div>',
                        '<div class="notice-advance-part part hide" onselectstart="return false">',
                            '<div class="notice-advance-item remove-notice-advance"><div class="word-con"><span class="word">取消</span></div></div>',
                            '<div class="notice-advance-item" advance="0"><div class="word-con"><span class="word">准时</span></div></div>',
                            '<div class="notice-advance-item" advance="300000"><div class="word-con"><span class="word">提前5分钟</span></div></div>',
                            '<div class="notice-advance-item" advance="1800000"><div class="word-con"><span class="word">提前30分钟</span></div></div>',
                            '<div class="notice-advance-item" advance="3600000"><div class="word-con"><span class="word">提前1小时</span></div></div>',
                            '<div class="notice-advance-item" advance="86400000"><div class="word-con"><span class="word">提前1天</span></div></div>',
                            // '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe7ae;</i></div><div class="word-con con"><span class="word">无</span></div></div>',
                            // '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe7ae;</i></div><div class="word-con con"><span class="word">准时</span></div></div>',
                            // '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe7ae;</i></div><div class="word-con con"><span class="word">提前5分钟</span></div></div>',
                            // '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe7ae;</i></div><div class="word-con con"><span class="word">提前30分钟</span></div></div>',
                            // '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe7ae;</i></div><div class="word-con con"><span class="word">提前1小时</span></div></div>',
                            // '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe7ae;</i></div><div class="word-con con"><span class="word">提前1天</span></div></div>',
                            // '<div class="row simple"><div class="checkbox-con con"><i class="iconfont">&#xe7ae;</i></div><div class="word-con con"><span class="word">提前2天</span></div></div>',
                            // '<div class="row custom"><div class="checkbox-con con"><i class="iconfont">&#xe600;</i></div><div class="word-con con"><span class="word">自定义</span></div></div>',
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
                        $tu.html(starthms.length >= 19 ? moment(starthms).format('HH:mm'): starthms).css('color', '#6683DF');
                        continue;
                    }
                    $tu.addClass('lt-starthms');
                }
            }
	        return $html[0].outerHTML;
        },
        getTimepickerHtml_mins: function(me, hour, starthms) {
	        debugger;
            var s_hhmm;
            if(starthms && starthms.length === 19) {
                s_hhmm = moment(starthms).format('HH:mm')
            }else {
                s_hhmm = starthms ? moment(moment().format('YYYY-MM-DD') + ' ' + starthms).format('HH:mm'): void(0);
            }
            var isMinuteDuration_30 = me.settings.minuteDuration === 30;

            var $html = !isMinuteDuration_30 ? $([
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
            ].join('')) :
                $([
                    '<div><div class="row">',
                        '<div class="time-min-unit time-unit" hms="',hour,':00" onselectstart="return false">',hour,':00</div>',
                        '<div class="time-min-unit time-unit" hms="',hour,':30" onselectstart="return false">',hour,':30</div>',
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
                var weekday = parseInt(moment(date).format('d'));
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
                        '<div class="date-col date '+todayClass + ' ' + chosenDayClass + '" year-month="'+moment(date).format('YYYY-MM')+'" date="'+date+'" weekday="'+weekday+'" title="双击可确定日期" onselectstart="return false">'+
                        '<div class="date-con"><span class="word">'+i+'</span></div><div class="lunar-con"><span class="word">'+IDayCn+'</span></div>'
                        +'</div>');
                    if(weekday === 6) {
                        htmls.push('</div>');
                    }
                    ++count;
                    continue;
                }
                htmls.push(
                    '<div class="date-col date '+todayClass + ' ' + chosenDayClass + '" year-month="'+moment(date).format('YYYY-MM')+'" date="'+date+'" weekday="'+weekday+'" title="双击可确定日期" onselectstart="return false">'+
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
            var today = moment().format('YYYY-MM-DD');
            return [
                '<div class="header weekday-head">',
                    '<div class="date-msg-head">',
                        '<div class="month-con">',
                            '<div class="show-month-con">',
                                '<div class="word-cell">',
                                    '<div class="year-cell cell select-el"><span class="year">',moment(targetDate).format('YYYY年'),'</span></div>&nbsp;',
                                    '<div class="month-cell cell select-el"><span class="month">',moment(targetDate).format('M月'),'</span></div>&nbsp;',
                                '</div>',
                            '</div>',
                            '<div class="next-pre-con" onselectstart="return false"><div class="icon-con pre pre-btn"><i class="iconfont">&#xe625;</i></div><div class="icon-con next next-btn"><i class="iconfont">&#xe7b1;</i></div></div>',
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

                '<div class="footer">',(function() {
                    debugger;
                    var starthide = Status.isChoosing_starttime_date(me) ? '' : 'hide';
                    var endhide = Status.isChoosing_endttime_date(me) ? '' : 'hide';

                    var isSingleDateChooseMode = me.settings.$datepicker.find('.show-month-con .choose_enddate:not(".hide"), .show-month-con .choose_startdate:not(".hide")').length > 0;

                    var isStartDateActive = me.settings.$datetime_con.find('.starttime-con .date-con').hasClass('active');
                    var isEndDateActive = me.settings.$datetime_con.find('.endtime-con .date-con').hasClass('active');

                    var has_choose_starttime_onstartdate = me.settings.$datepicker.find('.choose_starttime_onstartdate').length > 0;
                    var has_choose_endtime_onenddate = me.settings.$datepicker.find('.choose_endtime_onenddate').length > 0;

                    var s1 = !isSingleDateChooseMode && isStartDateActive ?
                        '<a href="javascript:;" mills="'+Util.currentMills()+'" class="choose_starttime_onstartdate '+starthide+'">继续选择开始时间</a>':
                        isSingleDateChooseMode && isStartDateActive ?
                            '<a href="javascript:;" mills="'+Util.currentMills()+'" class="choose_starttime_onstartdate hide ">继续选择开始时间</a>' :
                            '<a href="javascript:;" mills="'+Util.currentMills()+'" class="choose_starttime_onstartdate hide ">继续选择开始时间</a>';

                    var s2 = !isSingleDateChooseMode && isEndDateActive ?
                        '<a href="javascript:;" mills="'+Util.currentMills()+'" class="choose_endtime_onenddate '+endhide+'">继续选择结束时间</a>':
                        isSingleDateChooseMode && isEndDateActive ?
                            '<a href="javascript:;" mills="'+Util.currentMills()+'" class="choose_endtime_onenddate hide ">继续选择结束时间</a>' :
                            '<a href="javascript:;" mills="'+Util.currentMills()+'" class="choose_endtime_onenddate hide ">继续选择结束时间</a>';

                    has_choose_starttime_onstartdate && me.settings.$datepicker.find('.choose_starttime_onstartdate').addClass('hide');
                    has_choose_endtime_onenddate && me.settings.$datetime_con.find('.endtime-con .date-con').addClass('hide');

                    return (!has_choose_starttime_onstartdate ? s1:'')+(!has_choose_endtime_onenddate ? s2 : '');

                }()),'<a href="javascript:;" class="cancel">取消</a><a href="javascript:;" class="confirm">确定</a><a href="javascript:;" class="choose hide">选择</a></div>',
            ].join('');
        },
        
        getTimezoneHtml: function() {
        	
        }
    };

	var datetime_con_func = {

	    refresh: function(me, starttime, endtime) {
	        debugger;
	        var $me = me.settings.$me, _starttime = starttime ? starttime : $me.attr('starttime'), _endtime = endtime ? endtime : $me.attr('endtime');
	        datetime_con_func.blurAll(me);
	        datetime_con_func.setStarttime_date(me, moment(_starttime).format('YYYY-MM-DD'));
	        datetime_con_func.setStarttime_time(me, moment(_starttime).format('HH:mm'));
            datetime_con_func.setEndtime_date(me, moment(_endtime).format('YYYY-MM-DD'));
            datetime_con_func.setEndtime_time(me, moment(_endtime).format('HH:mm'));
            me.settings.$datetime_con.find('.starttime-con .date-con').addClass('active');
        },
        refresh_Time: function(me) {
            var $me = me.settings.$me, _starttime = $me.attr('starttime'), _endtime = $me.attr('endtime');
            datetime_con_func.blurAll(me);
            datetime_con_func.setStarttime_date(me, moment(_starttime).format('YYYY-MM-DD'));
            datetime_con_func.setStarttime_time(me, moment(_starttime).format('HH:mm'));
            datetime_con_func.setEndtime_date(me, moment(_endtime).format('YYYY-MM-DD'));
            datetime_con_func.setEndtime_time(me, moment(_endtime).format('HH:mm'));
            me.settings.$datetime_con.find('.starttime-con .time-con').addClass('active');
        },
        getStarttime_date: function(me) {
	        return me.settings.$datetime_con.find('.se-con.starttime-con > .date-con span.word').html();
        },
        getStarttime_time: function(me) {
	        return me.settings.$datetime_con.find('.se-con.starttime-con > .time-con span.word').html() + ":00";
        },
        getEndtime_date: function(me) {
            return me.settings.$datetime_con.find('.se-con.endtime-con > .date-con span.word').html();
        },
        getEndtime_time: function(me) {
            return me.settings.$datetime_con.find('.se-con.endtime-con > .time-con span.word').html() + ":00";
        },
        getStarttime: function(me) {
	        return datetime_con_func.getStarttime_date(me) + ' ' + datetime_con_func.getStarttime_time(me);
        },
        getEndtime: function(me) {
	        return datetime_con_func.getEndtime_date(me) + ' ' + datetime_con_func.getEndtime_time(me);
        },
        setStarttime_date: function(me, date) {
            if(!date) return;
            me.settings.$datetime_con.find('.se-con.starttime-con > .date-con span.word').html(date);
        },
        setStarttime_time: function(me, time) {
            if(!time) return;
            me.settings.$datetime_con.find('.se-con.starttime-con > .time-con span.word').html(time.length >= 19 ? moment(time).format('HH:ss') : time);
        },
        setEndtime_date: function(me, date) {
            if(!date) return;
            me.settings.$datetime_con.find('.se-con.endtime-con > .date-con span.word').html(date);
        },
        setEndtime_time: function(me, time) {
            if(!time) return;
            me.settings.$datetime_con.find('.se-con.endtime-con > .time-con span.word').html(time.length >= 19 ? moment(time).format('HH:ss') : time);
        },
        blurAll: function(me) {
            var $dt_con = me.settings.$datetime_con;
            $dt_con.find('.se-con > .date-con').removeClass('active');
            $dt_con.find('.se-con > .time-con').removeClass('active');
        },
        activeAndSetStarttime_date: function(me, date) {
            datetime_con_func.blurAll(me);
            var $dt_con = me.settings.$datetime_con;
            $dt_con.find('.se-con.starttime-con > .date-con').addClass('active');
            date && datetime_con_func.setStarttime_date(me, date);
        },
        activeAndSetStarttime_time: function(me, time) {
            datetime_con_func.blurAll(me);
            var $dt_con = me.settings.$datetime_con;
            $dt_con.find('.se-con.starttime-con > .time-con').addClass('active');
            time && datetime_con_func.setStarttime_time(me, time);
        },
        activeAndSetEndtime_date: function(me, date) {
            datetime_con_func.blurAll(me);
            var $dt_con = me.settings.$datetime_con;
            $dt_con.find('.se-con.endtime-con > .date-con').addClass('active');
            date && datetime_con_func.setEndtime_date(me, date);
        },
        activeAndSetEndtime_time: function(me, time) {
            datetime_con_func.blurAll(me);
            var $dt_con = me.settings.$datetime_con;
            $dt_con.find('.se-con.endtime-con > .time-con').addClass('active');
            time && datetime_con_func.setEndtime_time(me, time);
        }
    };

	var func = {

	    __refreshDatepicker_getTargetDate: function(year, month, chosenDate) {
            var today = moment().format('YYYY-MM-DD');
            var targetDate = chosenDate ? chosenDate : today;
            if(year && month) {
                targetDate = year + '-' + (month < 10 ? '0' + month : month) + '-01';
                if(targetDate === moment().format('YYYY-MM-01')) {
                    chosenDate = today
                }
            }else if(chosenDate) {
                targetDate = chosenDate;
            }else {
                targetDate = chosenDate ? chosenDate : today;
            }
            return {chosenDate: chosenDate, targetDate: targetDate};
        },
        __refreshDatepicker_refreshPicker: function(me, year, month, chosenDate, targetDate, isAfterClickingBtnNextPre) {
            var isInit = !me.settings.$extra_container.find('.datepicker-part .month-dates-con').length;
            if(isInit){
                var datepickerHtml = template.getDatepickerHtml(me, targetDate, chosenDate);
                me.settings.$datepicker.attr('startdate', moment(targetDate).format('YYYY-MM-01')).append(datepickerHtml);
                debugger;
                LifeCycle.afterDatepickerFinishRendering(me);
            }else {
                var $date_con = me.settings.$datepicker.find('.body.date-con');
                var ym_selector;
                if(year && month) {
                    ym_selector = year + '-' + (month < 10 ? '0'+month:month);
                }else {
                    ym_selector = moment(chosenDate).format('YYYY-MM');
                }
                var $mdc = $date_con.find('.month-dates-con[year-month="'+ym_selector+'"]');
                if($mdc.length !== 0 && !$mdc.hasClass('hide')) {
                    if(!isAfterClickingBtnNextPre) {
                        me.settings.$datepicker.find('.date-col.date').each(function () {
                            // if($(this).hasClass('s2e')||$(this).hasClass('startdate')||$(this).hasClass('enddate')) {
                            // }
                            $(this).removeClass('chosen').removeClass('startdate').removeClass('s2e').removeClass('enddate');
                        });
                        me.settings.$datepicker.find('.date-col.date[date="'+chosenDate+'"]').addClass('chosen');
                    }
                    if(Status.isChoosing_starttime_date(me)) {
                        var isSingleDateChooseMode = me.settings.$datepicker.find('.show-month-con .choose_enddate:not(".hide"), .show-month-con .choose_startdate:not(".hide")').length > 0;
                        !isSingleDateChooseMode && me.settings.$datepicker.find('.footer').find('.choose_starttime_onstartdate').removeClass('hide');
                    }
                    return;
                }
                $date_con.find('.month-dates-con').addClass('hide');
                if($mdc.length === 0) {
                    var datesHtml = template.getDatepicker_datesHtml(me, targetDate, chosenDate);
                    $date_con.prepend(datesHtml);
                }else {
                    $mdc.removeClass('hide');
                    if(!isAfterClickingBtnNextPre) {
                        me.settings.$datepicker.find('.date-col.date').each(function () {
                            if($(this).hasClass('s2e')||$(this).hasClass('startdate')||$(this).hasClass('enddate')) {
                                //$(this).addClass('mark');
                            }
                            $(this).removeClass('chosen').removeClass('startdate').removeClass('s2e').removeClass('enddate');
                        });
                        me.settings.$datepicker.find('.date-col.date[date="'+chosenDate+'"]').addClass('chosen');
                    }
                    if(Status.isChoosing_starttime_date(me)) {
                        var isSingleDateChooseMode = me.settings.$datepicker.find('.show-month-con .choose_enddate:not(".hide"), .show-month-con .choose_startdate:not(".hide")').length > 0;
                        !isSingleDateChooseMode && me.settings.$datepicker.find('.footer').find('.choose_starttime_onstartdate').removeClass('hide');
                    }
                }
                me.settings.$datepicker.attr('startdate', moment(targetDate).format('YYYY-MM-01'));
                me.settings.$datepicker.find('.show-month-con span.year').html((year ? year : moment(targetDate).format('YYYY')) + '年');
                me.settings.$datepicker.find('.show-month-con span.month').html((month ? month : moment(targetDate).format('M')) + '月');
                debugger;
                LifeCycle.afterDatepickerFinishRendering(me);

            }
        },
	    _refreshDatepicker: function(me, params/*year, month, chosenDate, cb, isAfterClickingBtnNextPre, timeMsg*/) {

	        var year = params.year, month = params.month, chosenDate = params.chosenDate, cb = params.cb, isAfterClickingBtnNextPre = params.isAfterClickingBtnNextPre, timeMsg = timeMsg;

            year ? year = parseInt(year) : void(0);
            month ? month = parseInt(month) : void(0);

	        var ret = func.__refreshDatepicker_getTargetDate(year, month, chosenDate);
            var targetDate = ret.targetDate;
            chosenDate = ret.chosenDate;

            func.__refreshDatepicker_refreshPicker(me, year, month, chosenDate, targetDate, isAfterClickingBtnNextPre);

            var startdate, starttime, enddate, endtime;
            if(timeMsg) {
                startdate = timeMsg['startdate'];
                starttime = timeMsg['starttime'];
                enddate = timeMsg['enddate'];
                endtime = timeMsg['endtime'];
            }
            me.settings.$datepicker.find('a.choose_starttime_onstartdate').off('click').on('click', function() {
                debugger;
                var isSingleDateChooseMode = me.settings.$datepicker.find('.show-month-con .choose_enddate:not(".hide"), .show-month-con .choose_startdate:not(".hide")').length > 0;
                var $chosen_d = me.settings.$datepicker.find('.date-col.date.chosen');
                startdate = $chosen_d.addClass('startdate').attr('date');
                datetime_con_func.activeAndSetStarttime_time(me);
                Process.getHms(me).then(function(hms) {
                    starttime = hms;
                    datetime_con_func.activeAndSetStarttime_time(me, hms);
                    me.settings.$datepicker.find('a.choose_starttime_onstartdate').addClass('hide');

                    !isSingleDateChooseMode && me.settings.$datepicker.find('.footer').find('.choose_endtime_onenddate').removeClass('hide');

                    me.settings.$datepicker.find('.footer').find('.cancel').addClass('hide').parent().find('.confirm').addClass('hide');
                    me.settings.$datepicker.find('.tips-cell.choose_startdate').remove();

                    me.settings.$datepicker.removeClass('hide').fadeIn(50, 'swing');

                    setTimeout(function() {
                        datetime_con_func.activeAndSetEndtime_date(me);
                    }, 500);

                });
            });
            me.settings.$datepicker.find('a.choose_endtime_onenddate').off('click').on('click', function() {
                me.settings.$datepicker.find(".show-month-con .choose_enddate").remove();
                var $chosen_d = me.settings.$datepicker.find('.date-col.date.chosen');
                enddate = $chosen_d.addClass('enddate').attr('date');
                datetime_con_func.activeAndSetEndtime_time(me);
                Process.getHms(me, startdate === enddate ? starttime : '').then(function(hms) {
                    endtime = hms;
                    datetime_con_func.activeAndSetEndtime_time(me, hms);
                    var ret = {};
                    ret.starttime = datetime_con_func.getStarttime(me);
                    ret.endtime = datetime_con_func.getEndtime(me);
                    LifeCycle.beforeDatepickerReturn(me);
                    cb ? cb(ret) : void(0);
                    setTimeout(function() {
                        datetime_con_func.activeAndSetEndtime_date(me);
                    }, 500);
                });
            });
            me.settings.$datepicker.find('.pre-btn').off('click').on('click', function() {
                var timeMsg = {};
                startdate ? timeMsg['startdate'] = startdate: void(0);
                starttime ? timeMsg['starttime'] = starttime: void(0);
                enddate ? timeMsg['enddate'] = enddate: void(0);
                endtime ? timeMsg['endtime'] = endtime: void(0);

                var pre_dp_startdate = moment(me.settings.$datepicker.attr('startdate')).subtract(1, 'month');
                debugger;
                func._refreshDatepicker(me, {year: pre_dp_startdate.year(), month: pre_dp_startdate.month()+1, cb: cb, isAfterClickingBtnNextPre: true, timeMsg: timeMsg}/*pre_dp_startdate.year(), pre_dp_startdate.month()+1, null, cb, true, timeMsg*/);
            });
            me.settings.$datepicker.find('.next-btn').off('click').on('click', function() {

                var timeMsg = {};
                startdate ? timeMsg['startdate'] = startdate: void(0);
                starttime ? timeMsg['starttime'] = starttime: void(0);
                enddate ? timeMsg['enddate'] = enddate: void(0);
                endtime ? timeMsg['endtime'] = endtime: void(0);
                var next_dp_startdate = moment(me.settings.$datepicker.attr('startdate')).add(1, 'month');
                func._refreshDatepicker(me, {year: next_dp_startdate.year(), month: next_dp_startdate.month()+1, cb: cb, isAfterClickingBtnNextPre: true, timeMsg: timeMsg}/*next_dp_startdate.year(), next_dp_startdate.month()+1, null, cb, true, timeMsg*/);
            });


            me.settings.$datepicker.find('.date-col.date').off('click').on('click', function() {

                var $this = $(this);

                me.settings.$datepicker.find('.mark').each(function () {
                    $this.removeClass('mark');
                });

                var date = $this.attr('date');
                var $active_con = me.settings.$datetime_con.find('.active.con'), isStarttime = $active_con.parents('.starttime-con').length > 0, isDate = $active_con.hasClass('date-con');

                var isSingleDateChooseMode = me.settings.$datepicker.find('.show-month-con .choose_enddate:not(".hide"), .show-month-con .choose_startdate:not(".hide")').length > 0;
                var isSingleDateChooseModeAndChooseStartDate = me.settings.$datepicker.find('.show-month-con .choose_startdate:not(".hide")').length > 0;
                var isSingleDateChooseModeAndChooseEndDate = me.settings.$datepicker.find('.show-month-con .choose_enddate:not(".hide")').length > 0;
                debugger;
                if(isSingleDateChooseMode) {
                    if(isSingleDateChooseModeAndChooseStartDate) {
                        var sd = $this.attr('date');
                        var ed = me.settings.$datetime_con.find('.datetime-result-con .endtime-con .date-con span.word').html();
                        if(sd > ed) {
                            alert('结束日应在开始日之后，或开始日和结束日是同一日');
                            return;
                        }
                    }
                    if(isSingleDateChooseModeAndChooseEndDate) {
                        var sd1 = me.settings.$datetime_con.find('.datetime-result-con .starttime-con .date-con span.word').html();
                        var ed1 = $this.attr('date');
                        if(sd1 > ed1) {
                            alert('开始日应在结束日之前，或开始日和结束日是同一日');
                            return;
                        }
                    }
                }else {
                    if(Status.isChoosing_endttime_date(me)) {
                        var stad = me.settings.$datepicker.find('.date-col.date.startdate').addClass('s2e').attr('date');
                        var endd = $this.attr('date');
                        if(stad > endd) {
                            alert('结束时间应在开始时间之后');
                            return;
                        }
                    }
                }
                datetime_con_func.blurAll(me);
                if(isStarttime && isDate) {
                    datetime_con_func.activeAndSetStarttime_date(me, date);
                    !isSingleDateChooseMode && datetime_con_func.setEndtime_date(me, date);
                }else if(!isStarttime && isDate) {
                    datetime_con_func.activeAndSetEndtime_date(me, date);
                }


                me.settings.$datepicker.find('.date-col').removeClass('chosen');

                if(!isSingleDateChooseMode && Status.isChoosing_starttime_date(me)) {
                    me.settings.$datepicker.find('.date-col').removeClass('startdate');
                    $this.addClass('startdate');
                }
                debugger;
                if(!isSingleDateChooseMode && Status.isChoosing_endttime_date(me)) {
                    var _startdate = me.settings.$datepicker.find('.date-col.date.startdate').addClass('s2e').attr('date');
                    var _endate = $(this).attr('date');
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
                }
                $this.addClass('chosen');


            });
            //结束流程***************************************************************************************************************************************
            cb && me.settings.$datepicker.find('.date-col.date').off('dblclick').on('dblclick', function() {
                var ret = {};
                //单独选一个日期的情况
                //ret.date = me.settings.$datepicker.find('.date-col.date.chosen').attr('date');
                ret.starttime = datetime_con_func.getStarttime(me);
                ret.endtime = datetime_con_func.getEndtime(me);
                LifeCycle.beforeDatepickerReturn(me);
                cb ? cb(ret) : void(0);
            });
            cb && me.settings.$datepicker.find('.footer .confirm, .footer .cancel').off('click').on('click', function(e) {
                if($(e.target).hasClass('confirm')) {
                    debugger;
                    var ret = {};
                    //单独选一个日期的情况
                    //ret.date = me.settings.$datepicker.find('.date-col.date.chosen').attr('date');
                    ret.starttime = datetime_con_func.getStarttime(me);
                    ret.endtime = datetime_con_func.getEndtime(me);
                    LifeCycle.beforeDatepickerReturn(me);
                    cb ? cb(ret) : void(0);
                }else {
                    LifeCycle.beforeDatepickerReturn(me);
                    cb ? cb() : void(0);
                }
            });
            cb && me.settings.$datetime_con.on('click', '.datetime-result-con a.confirm', function () {
                LifeCycle.beforeDatepickerReturn(me);
                cb ? cb() : void(0);
            });
        },

        refreshTimezone: function(me, timezone, timezonename) {
            var $el = me.settings.$me;
            timezone ? $el.attr('timezone', timezone) : $el.removeAttr('timezone');
            if(timezone) {
                if(!timezonename) {
                    timezonename = timezone.substring(0, timezone.length - 2) + ':00';
                }
                me.settings.$main_container.find('.row.timezone span.showtimezone').html("时区：" + timezonename);
                me.settings.$main_container.find('.row.timezone span.title').hide();
            }else {
                me.settings.$main_container.find('.row.timezone span.showtimezone').html('');
                me.settings.$main_container.find('.row.timezone span.title').show();
            }
        },
        refreshMeByDate: function(me, date) {
	        var $el = me.settings.$me;

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
        	
        	if(!starttime) starttime = moment().startOf('hour').add(1.5, 'hours').format('YYYY-MM-DD HH:mm:ss');
        	if(!endtime) endtime = moment().startOf('hour').add(2, 'hours').format('YYYY-MM-DD HH:mm:ss');
        	
            var $el = me.settings.$me;
            var startdate = moment(starttime).format('YYYY-MM-DD');
            var enddate = moment(endtime).format('YYYY-MM-DD');
            if(startdate !== enddate) {
                
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
	        
            $el.attr('starttime', starttime).attr('endtime', endtime);
	        /*me.settings.$main_part.find('.showtime.ymd span.word').html(moment(date).format('M月D日') + "，" + Util.get_weekday_name(date));
	        if(starttime && endtime) {
                me.settings.$main_part.find('.showtime.hms span.word').html('<span class="starthms">'+moment(starttime).format('HH:mm')+'</span>' + ' - ' + '<span class="endhms">'+moment(endtime).format('HH:mm')+'</span>');
            }else {
	            var name = Util.get_dur_name(date);
                me.settings.$main_part.find('.lf.left .tips span.word').html(name);
            }*/
        },

        hide: function(me) {
	        return new Promise(function(resolve) {
	            var $el = me.settings.$me;
	            $el.fadeOut(50, 'swing', function() {
                    $el.addClass('hide');
                    resolve();
                });
            });
        },
        show: function(me) {
            return new Promise(function(resolve) {
                var $el = me.settings.$me;
                $el.removeClass('hide').fadeIn(50, 'swing', function() {
                    resolve(true);
                });
            });
        },
        showRepeat: function(me) {
            return new Promise(function (resolve) {
                me.settings.$repeat.removeClass('hide').fadeIn(50, 'swing', function () {
                    resolve();
                });
            });
        },
        hideRepeat: function(me) {
            return new Promise(function (resolve) {
                me.settings.$repeat.fadeOut(50, 'swing', function () {
                    me.settings.$repeat.addClass('hide');
                    resolve();
                });
            });
        },
        showNoticeAdvanceCustom: function(me) {
            return new Promise(function (resolve) {
                me.settings.$notice_advance_custom.removeClass('hide').fadeIn(50, 'swing', function () {
                    resolve();
                });
            });
        },
        hideNoticeAdvanceCustom: function(me) {
            return new Promise(function (resolve) {
                me.settings.$notice_advance_custom.fadeOut(50, 'swing', function () {
                    me.settings.$notice_advance_custom.addClass('hide');
                    resolve();
                });
            });
        },
        showNoticeAdvance: function(me) {
	        return new Promise(function (resolve) {
	            me.settings.$notice_advance.removeClass('hide').fadeIn(50, 'swing', function () {
                    resolve();
                });
	        });
        },
        hideNoticeAdvance: function(me) {
            return new Promise(function (resolve) {
                me.settings.$notice_advance.fadeOut(50, 'swing', function () {
                    me.settings.$notice_advance.addClass('hide');
                    resolve();
                });
            });
        },
        showMainPart: function(me) {
            return new Promise(function(resolve) {
                me.settings.$main_container.removeClass('hide').fadeIn(50, 'swing', function() {
                    resolve(true);
                });
            });
        },
        hideMainPart: function(me) {
            return new Promise(function(resolve) {
                me.settings.$main_container.fadeOut(50, 'swing', function() {
                    me.settings.$main_container.addClass('hide');
                    resolve(true);
                });
            });
        },
        showDatePicker: function(me) {
	        return new Promise(function(resolve) {

	            me.settings.$datetime_con.removeClass('hide');

                me.settings.$datepicker.removeClass('hide').fadeIn(50, 'swing', function() {
                    resolve(true);
                });
            });
        },
        hideDatePicker: function(me) {
	        return new Promise(function(resolve) {

                me.settings.$datetime_con.addClass('hide');

                me.settings.$datepicker.fadeOut(50, 'swing', function() {
                    me.settings.$datepicker.addClass('hide');
                    resolve(true);
                });
            });
        },
        showTimezone:function(me) {
            return new Promise(function(resolve) {
                me.settings.$timezone.removeClass('hide').fadeIn(50, 'swing', function () {
                    resolve(true);
                })
            });
        },
        hideTimezone: function(me) {
            return new Promise(function(resolve) {
                me.settings.$timezone.fadeOut(50, 'swing', function() {
                    me.settings.$timezone.addClass('hide');
                    resolve(true);
                });
            });
        },
        hideTimePicker: function(me) {
	        debugger;
            return new Promise(function(resolve) {

                me.settings.$datetime_con.addClass('hide');

                me.settings.$timepicker.fadeOut(50, 'swing', function() {
                    me.settings.$timepicker.empty().addClass('hide');
                    resolve(true);
                });
            });
        },
        reset: function(me) {
	        // var $marks = me.settings.$datepicker.find('.mark');
	        // for(var i = 0, leni = $marks.length; i < leni; i++) {
	        //     var $m = $marks.eq(i);
	        //     $m.removeClass('mark');
            // }
            debugger;
            func.hideTimezone(me);
            func.hideNoticeAdvance(me);
            func.hideNoticeAdvanceCustom(me);

            me.settings.$datepicker.find('.mark').each(function () {
                $(this).removeClass('mark');
            });
            me.settings.$datepicker.find('.s2e').each(function () {
                $(this).removeClass('s2e');
            });
            me.settings.$datepicker.find('.date-col.chosen').removeClass('chosen');
            me.settings.$datepicker.find('.date-col.startdate').removeClass('startdate');
            me.settings.$datepicker.find('.date-col.enddate').removeClass('enddate');

	        me.settings.$datepicker.find('.tips-cell').addClass('hide');
            me.settings.$datepicker.find('.choose_starttime_onenddate').removeClass('hide');
            me.settings.$datepicker.find('.choose_endtime_onenddate').addClass('hide');
            me.settings.$datepicker.find('.confirm').removeClass('hide');
            me.settings.$datepicker.find('.cancel').removeClass('hide');

            me.settings.enable_datepicker_showUnselectableStyle = false;
            me.settings.$datepicker.find('.month-dates-con .date-col.date.unselectable').removeClass('unselectable');
            me.settings.$datetime_con.addClass('hide');

	        var starttime = me.$ele.attr('starttime');
	        var endtime = me.$ele.attr('endtime');
	        var calls = [];
	        calls.push(func.hideTimePicker(me));
	        calls.push(func.hideDatePicker(me));
	        Promise.all(calls);
        },

		/**
		 * 初始化
		 * @param me
		 */
		init: function(me) {

			var starttime = me.settings.starttime;
			var endtime = me.settings.endtime;
			var durMills = parseInt(moment(endtime).format('x')) - parseInt(moment(starttime).format('x'));
            var sec = durMills/1000, min = sec/60, hour = min/60, day = hour/24;
            
            var $html = $(template.getMainHtml(me, starttime, endtime));
            debugger;
			me.settings.$me = $html;

			me.settings.$main_container = $html.find('.main-container');
			me.settings.$part_container = $html.find('.part-container');
			me.settings.$main_part = $html.find('.main-part');
			// me.settings.$datepicker_part = $html.find('.datepicker-part');

			me.settings.$extra_container = $html.find('.extra-container');

			me.settings.$datetime_con = $html.find('.datetime-con');
			me.settings.$datepicker = $html.find('.datepicker-part');
			me.settings.$timepicker = $html.find('.timepicker-part');
			//me.settings.$simple_datepicker = $html.find('.simple-datepicker-part');
			me.settings.$notice_advance = $html.find('.notice-advance-part');
			me.settings.$notice_advance_custom = $html.find('.notice-advance-custom-part');
			
			me.settings.$timezone = $html.find('.timezone-part');
			
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
			me.settings.$datetime_con.on('click', '.datetime-result-con .date-con, .datetime-result-con .time-con:not(".active")', function() {
			    debugger;
			    var $this = $(this), isStarttime = $this.parents('.starttime-con').length > 0, isDateCon = $this.hasClass('date-con'), isTimeCon = $this.hasClass('time-con');
                var dateOrtime = $this.find('span.word').html();
                me.settings.$datepicker.find('.startdate').removeClass('startdate');
                me.settings.$datepicker.find('.enddate').removeClass('enddate');
                me.settings.$datepicker.find('.chosen').removeClass('chosen');
                me.settings.$datepicker.find('.s2e').removeClass('s2e');
                me.settings.enable_datepicker_showUnselectableStyle = false;
                me.settings.$datepicker.find('.month-dates-con .date-col.date.unselectable').removeClass('unselectable');
                if(isStarttime && isDateCon) {
                    Process.chooseStarttime_date(me, dateOrtime);
                }
                if(isStarttime && isTimeCon) {
                    Process.chooseStarttime_time(me, dateOrtime);
                }
                if(!isStarttime && isDateCon) {
                    Process.chooseEndtime_date(me, dateOrtime);
                }
                if(!isStarttime && isTimeCon) {
                    Process.chooseEndtime_time(me, dateOrtime);
                }
            });
			//datetime-con**************************************************************
            /*me.settings.$datetime_con.on('click', '.se-con .date-con,.se-con .time-con', function() {
                var $this = $(this), isStarttime = $this.parents('.starttime-con').length > 0, isDate = $this.hasClass('date-con');
                datetime_con_func.blurAll(me);
                // var promises = [];
                // if(me.settings.$datepicker.hasClass('hide')) {
                //     promises.push(func.hideTimePicker(me));
                // }else {
                //     promises.push(func.hideDatePicker(me));
                // }
                if(isStarttime && isDate) {
                    datetime_con_func.activeAndSetStarttime_date(me);
                }else if(isStarttime && !isDate) {
                    datetime_con_func.activeAndSetStarttime_time(me);
                }else if(!isStarttime && isDate) {
                    datetime_con_func.activeAndSetEndtime_date(me);
                }else {
                    datetime_con_func.activeAndSetEndtime_time(me);
                }
                // Promise.all(promises).then(function(rets) {
                // });
            });*/
            /*me.settings.$datepicker.on('click', '.month-dates-con:not(".hide") .date-col.date', function() {
                debugger;
                var isSingleDateChooseMode = me.settings.$datepicker.find('.show-month-con .choose_enddate:not(".hide"), .show-month-con .choose_startdate:not(".hide")').length > 0;
                if(isSingleDateChooseMode) return;
                var $this = $(this);
                var date = $this.attr('date');
                var $active_con = me.settings.$datetime_con.find('.active.con'), isStarttime = $active_con.parents('.starttime-con').length > 0, isDate = $active_con.hasClass('date-con');
                datetime_con_func.blurAll(me);
                if(isStarttime && isDate) {
                    datetime_con_func.activeAndSetStarttime_date(me, date);
                    datetime_con_func.setEndtime_date(me, date);
                }else if(!isStarttime && isDate) {
                    datetime_con_func.activeAndSetEndtime_date(me, date);
                }
            });*/

            //End datetime-con**************************************************************

			$(document).on('click', function (e) {
			    var $this = $(e.target);
			    var $e1 = $this.parents('.twperfectdatepicker');
			    var $e2 = $this.parents('.twperfectdatepicker-con');
			    debugger;
			    if($e1.length !== 0 ||
                    $this.hasClass('twperfectdatepicker-con') ||
                    $this.hasClass('time-unit') ||
                    $e2.length !== 0) {
			        return;
                }
                func.beforeHide(me);
                func.reset(me);
                func.hide(me);
            });
			//End timepicker $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

			//main $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
			me.$ele.on('click', function(e) {
			    var $this = $(this);
                debugger;
				if(me.settings.$me.hasClass('hide')) {
					func.beforeShow(me);
                    me.settings.$main_part.show().removeClass('hide');
					me.settings.$me.removeClass('hide').fadeIn(50, 'swing', function() {
					    func.showMainPart(me).then(function() {
                            var starttime = $this.attr('starttime');
                            var endtime = $this.attr('endtime');
                            var timezone = $this.attr('timezone');
                            func.refreshMeByStarttimeAndEndtime(me, starttime, endtime);
                            func.refreshTimezone(me, timezone);
                        });
                    });
				}else {
                    func.beforeHide(me);
                    me.settings.$me.fadeOut(50, 'swing', function() {
                        $(this).addClass('hide');
                        me.settings.$main_part.hide().addClass('hide');
                        me.settings.$timepicker.empty().hide().addClass('hide');
                    });
				}
			});

			me.settings.$main_part.on('click', '.lf.se', function() {
                var ret = {}, $this = $(this);
                debugger;
                datetime_con_func.refresh(me);

                Process.selectDate(me, function(o) {
                    debugger;
                    ret = o;
                    func.hideDatePicker(me).then(function(o) {
                        
                        return func.hideDatePicker(me);
                    }).then(function () {
                        
                        return func.showMainPart(me);
                    }).then(function(){
                        
                        if(ret.date) {
                            func.refreshMeByDate(me, ret.date);
                            return;
                        }
                        func.refreshMeByStarttimeAndEndtime(me, ret.starttime, ret.endtime);
                    });
                });
            });
            me.settings.$main_part.on('click', '.lf.oneday.date', function() {
                var ret = {};

                datetime_con_func.refresh(me);

                Process.selectDate(me, function(o) {
                    ret = o;
                    func.hideDatePicker(me).then(function(o) {
                        return func.hideDatePicker(me);
                    }).then(function () {
                        return func.showMainPart(me);
                    }).then(function(){
                        if(ret.date) {
                            func.refreshMeByDate(me, ret.date);
                            return;
                        }
                        func.refreshMeByStarttimeAndEndtime(me, ret.starttime, ret.endtime);
                    });
                });
            });
            me.settings.$main_part.on('click', '.lf.oneday.time', function() {

                datetime_con_func.refresh_Time(me);
				Process.getStartHmsAndEndHms(me).then(function(ret) {
					var starthms = ret['starthms'], endhms = ret['endhms'];
					var date = moment(me.settings.$me.attr('starttime')).format('YYYY-MM-DD');
					var starttime = moment(date + " " + starthms).format('YYYY-MM-DD HH:mm:ss'), endtime = moment(date + " " + endhms).format('YYYY-MM-DD HH:mm:ss');
                    var msg = Util.get_dur_msg(starttime, endtime), realDur = msg['realdur'], _showDur = msg['showdur'], showDurName = msg['showdurname'];
					if(msg['durmills'] <= 0) {
					    me.settings.$extra_container.hide().fadeOut(50, 'swing', function() {
					        $(this).addClass('hide');
					        func.hideTimePicker(me).then(function() {
                                me.settings.$timepicker.empty().hide().addClass('hide');
                                me.settings.$main_part.show().removeClass('hide');
                                me.settings.$main_container.show().removeClass('hide');
                                me.settings.$me.removeClass('hide').fadeIn(50, 'swing');
                            });
                        });
					    alert('结束时间应大于开始时间');
					    return;
                    }
                    //me.settings.$main_part.find('span.showdur').html((_showDur !== realDur ? '约':'') + _showDur + showDurName);
                    func.hideTimePicker(me).then(function() {
                        me.settings.$main_part.show().removeClass('hide');
                        me.settings.$main_container.show().removeClass('hide');
                        me.settings.$me.removeClass('hide').fadeIn(50, 'swing');
                        func.refreshMeByStarttimeAndEndtime(me, starttime, endtime);
                    });
					//var $showtime = me.settings.$main_part.find('.showtime.cell.hms'), $st = me.settings.$main_part.find('span.starthms'), $et = me.settings.$main_part.find('span.endhms');
					//$showtime.attr('starttime', starttime).attr('endtime', endtime);
                    //$st.html(starthms);
                    //$et.html(endhms);
				});
            });
            /*me.settings.$main_part.on('click', '.row.notice', function() {
                alert('notice');
            });
            me.settings.$main_part.on('click', '.row.repeat', function() {
                alert('repeat');
            });*/
            me.settings.$main_container.on('click', '.me_confirm', function() {
                
                func.beforeHide(me);
                var $el = me.settings.$me;
                var starttime = $el.attr('starttime') ? $el.attr('starttime') : moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss');
                var endtime = $el.attr('endtime') ? $el.attr('endtime') : moment().add(1.5, 'hours').format('YYYY-MM-DD HH:mm:ss');
                var timezone = $el.attr('timezone') ? $el.attr('timezone'): '';
                me.settings.onConfirm({starttime: starttime, endtime: endtime, timezone: timezone});
                func.hide(me);
                me.$ele.attr('starttime', starttime).attr('endtime', endtime);
                // me.$ele.find('div.con.origin').addClass('hide');
                // me.$ele.find('div.time .show-starttime').html(moment(starttime).format("YYYY-MM-DD HH:mm"));
                // me.$ele.find('div.time .show-endtime').html(moment(endtime).format("YYYY-MM-DD HH:mm"));
                // me.$ele.find('div.con.time').removeClass('hide');
            });
            me.settings.$main_container.on('click', '.me_cancel', function() {
                func.beforeHide(me);
                func.reset(me);
                func.hide(me);
                //me.$ele.attr('starttime', '').attr('endtime', '');
                //me.settings.onCancel();
                // me.$ele.find('div.con.time').addClass('hide');
                // me.$ele.find('div.con.origin').removeClass('hide');
            });

            debugger;
            me.settings.$main_container.on('click', '.extra-btn-con .row.timezone', function() {
                debugger;
                Process.chooseTimezone(me, function(timezone, timezonename) {
                    debugger;
                    func.refreshTimezone(me, timezone, timezonename);
                });
            });
            
            me.settings.$main_container.on('click', '.extra-btn-con .row.notice', function () {
                Process.chooseNoticeAdvance(me, function (duration_mills) {
                    
                });
            });
            
            $(window).resize(function() {
                func.beforeShow(me);
            });
            //End main $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
		},

		beforeShow: function(me) {
			var offset = me.$ele.offset();
			me.settings.$me.css('top', offset.top + Util.realHeight(me.$ele) + 10).css('left', offset.left);
			func.reset(me);
		},
		beforeHide: function(me) {
            me.settings.enable_datepicker_showUnselectableStyle = false;
            me.settings.$datepicker.find('.month-dates-con .date-col.date.unselectable').removeClass('unselectable');
		}
	};
	//操作流程
	var Process = {

	    chooseStarttime_date: function(me, date) {
	        debugger;
	        //如果timepicker还在，则empty它
            var isTimepickerEmpty = me.settings.$timepicker.find('div').length === 0;
            if(!isTimepickerEmpty) {
                func.hideTimePicker(me).then(function() {
                    me.settings.$timepicker.empty();
                });
            }
	        var isDatepickerEmpty = me.settings.$datepicker.find('div').length === 0;
	        if(isDatepickerEmpty) return;
            datetime_con_func.activeAndSetStarttime_date(me, date);
	        var isTimepickerHide = me.settings.$timepicker.hasClass('hide');
	        var step = isTimepickerHide ? func.hideTimePicker(me): (function() {return new Promise(function(resolve) {resolve()})}());
            step.then(function(ret) {
                return func.showDatePicker(me);
            }).then(function() {
                //datepicker不可选日置灰处理
                me.settings.enable_datepicker_showUnselectableStyle = true;
                var endtime_date = datetime_con_func.getEndtime_date(me);
                var $dates = me.settings.$datepicker.find('.month-dates-con:not(".hide") .date-col.date');
                for(var i = 0, leni = $dates.length; i < leni; i++) {
                    var $d = $dates.eq(i);
                    var _date = $d.attr('date');
                    if(_date > endtime_date) {
                        $d.addClass('unselectable');
                    }
                }
                //清理：
                me.settings.$datepicker.find('.tips-cell').remove();
                me.settings.$datepicker.find('.show-month-con .word-cell').append('<div class="tips-cell cell choose_startdate"><span class="word">选择开始日</span></div>');

                me.settings.$datepicker.find('a.confirm').addClass('hide');
                me.settings.$datepicker.find('a.cancel').addClass('hide');

                me.settings.$datepicker.find('a.choose_starttime_onstartdate').addClass('hide');
                me.settings.$datepicker.find('a.choose_endtime_onenddate').addClass('hide');

                me.settings.$datepicker.find('a.choose').off('click').on('click', function() {
                    debugger;
                    var isNowChooseStartDate = me.settings.$datetime_con.find('.starttime-con .date-con').hasClass('active');
                    var isNowChooseEndDate = me.settings.$datetime_con.find('.endtime-con .date-con').hasClass('active');
                    if(isNowChooseStartDate) {
                        me.settings.$datepicker.find('a.choose_starttime_onstartdate').removeClass('hide');
                    }else if(isNowChooseEndDate) {
                        me.settings.$datepicker.find('a.choose_endtime_onenddate').removeClass('hide');
                    }
                    me.settings.enable_datepicker_showUnselectableStyle = false;
                    me.settings.$datepicker.find('.month-dates-con .date-col.date.unselectable').removeClass('unselectable');
                    me.settings.$datepicker.find('a.confirm').removeClass('hide');
                    me.settings.$datepicker.find('a.cancel').removeClass('hide');
                    me.settings.$datepicker.find('.tips-cell').remove();
                    me.settings.$datepicker.find('a.choose').addClass('hide');
                });
                me.settings.$datepicker.find('a.choose').removeClass('hide');

                var starttime_date = datetime_con_func.getStarttime_date(me);
                me.settings.$datepicker.find('.date-col.date[date="'+starttime_date+'"]').addClass('chosen');

            });
        },
        chooseStarttime_time: function(me, time) {
            debugger;
            var isDatepickerEmpty = me.settings.$datepicker.find('div').length === 0;
            if(isDatepickerEmpty) return;
            datetime_con_func.activeAndSetStarttime_time(me, time);
            var isDatepickerHide = me.settings.$datepicker.hasClass('hide');
            var step = isDatepickerHide ? (function() {
                return new Promise(function(resolve) {
                    me.settings.$timepicker.addClass('hide');
                    resolve();
                });
            }()): (function() {
                return new Promise(function(resolve) {
                    me.settings.$datepicker.addClass('hide');
                    resolve();
                });
            }());
            step.then(function(ret) {
                debugger;
                //如果在选择单日，则先还原
                var isNowChooseStartDate = me.settings.$datetime_con.find('.starttime-con .date-con').hasClass('active');
                var isNowChooseEndDate = me.settings.$datetime_con.find('.endtime-con .date-con').hasClass('active');
                if(isNowChooseStartDate) {
                    me.settings.$datepicker.find('a.choose_starttime_onstartdate').removeClass('hide');
                }else if(isNowChooseEndDate) {
                    me.settings.$datepicker.find('a.choose_endtime_onenddate').removeClass('hide');
                }
                me.settings.enable_datepicker_showUnselectableStyle = false;
                me.settings.$datepicker.find('.month-dates-con .date-col.date.unselectable').removeClass('unselectable');
                me.settings.$datepicker.find('a.confirm').removeClass('hide');
                me.settings.$datepicker.find('a.cancel').removeClass('hide');
                me.settings.$datepicker.find('.tips-cell').remove();
                me.settings.$datepicker.find('a.choose').addClass('hide');

                return (function() {
                    return new Promise(function(resolve) {
                        debugger;
                        me.settings.$timepicker.empty().append(template.getTimepickerHtml_hours()).removeClass('hide').fadeIn(50, 'swing');
                        me.settings.$timepicker.find('.time-hour-unit').on('click', function () {
                            var $this = $(this);
                            if($this.hasClass('lt-starthms')) {
                                alert('结束时间应大于开始时间');
                                return;
                            }
                            me.settings.$datetime_con.removeClass('hide');
                            me.settings.$timepicker.find('.time-hour-unit').off('click');
                            me.settings.$timepicker.empty().append(template.getTimepickerHtml_mins(me, $this.attr('hour')))
                                .find('.time-min-unit').off('click').on('click', function () {
                                var $this = $(this);
                                debugger;
                                if($this.hasClass('lt-starthms')) {
                                    alert('结束时间应大于开始时间');
                                    return;
                                }
                                var hms = $this.attr('hms');
                                me.settings.$datetime_con.removeClass('hide');
                                me.settings.$timepicker.fadeOut(50, 'swing', function() {

                                    if(!isDatepickerEmpty && me.settings.$datepicker.hasClass('hide')) {
                                        func.showDatePicker(me);
                                    }
                                    /*func.showDatePicker(me).then(function() {
                                        if(!me.settings.$datepicker.html()) {
                                            var date = datetime_con_func.getStarttime_date(me);
                                            func._refreshDatepicker(me, {chosenDate: date, cb: function (ret) {
                                                    cb ? cb(ret): void(0);
                                                }});
                                        }
                                    });*/
                                    me.settings.$timepicker.addClass('hide').empty();
                                    resolve(hms);
                                    var starttime_date = datetime_con_func.getStarttime_date(me);
                                    me.settings.$datepicker.find('.date-col.date[date="'+starttime_date+'"]').addClass('chosen');
                                    setTimeout(function() {
                                        datetime_con_func.activeAndSetStarttime_date(me);
                                    }, 300);
                                });
                            });
                        });
                    });
                }());
            }).then(function(hms) {
                debugger;
                isDatepickerHide ? me.settings.$timepicker.removeClass('hide'): me.settings.$datepicker.removeClass('hide');
                var starttime_date = datetime_con_func.getStarttime_date(me);
                var endtime = datetime_con_func.getEndtime(me);
                datetime_con_func.activeAndSetStarttime_time(me, hms);
                if(parseInt(moment(endtime).format('x')) < parseInt(moment(starttime_date + ' ' + hms).format('x'))) {
                    datetime_con_func.activeAndSetEndtime_time(me, hms);
                }
                // setTimeout(function() {
                //     datetime_con_func.activeAndSetEndtime_date(me);
                // }, 500)
            });
        },
        chooseEndtime_date: function(me, date) {
	        debugger;
            //如果timepicker还在，则empty它
            var isTimepickerEmpty = me.settings.$timepicker.find('div').length === 0;
            if(!isTimepickerEmpty) {
                func.hideTimePicker(me).then(function() {
                    me.settings.$timepicker.empty();
                });
            }
            var isDatepickerEmpty = me.settings.$datepicker.find('div').length === 0;
            if(isDatepickerEmpty) return;
            datetime_con_func.activeAndSetEndtime_date(me, date);
            var isTimepickerHide = me.settings.$timepicker.hasClass('hide');
            var step = isTimepickerHide ? func.hideTimePicker(me): (function() {return new Promise(function(resolve) {resolve()})}());
            step.then(function(ret) {
                return func.showDatePicker(me);
            }).then(function() {
                debugger;
                //datepicker不可选日置灰处理
                me.settings.enable_datepicker_showUnselectableStyle = true;
                var starttime_date = datetime_con_func.getStarttime_date(me);
                var $dates0 = me.settings.$datepicker.find('.month-dates-con:not(".hide") .date-col.date');
                for(var j = 0, lenj = $dates0.length; j < lenj; j++) {
                    var $d0 = $dates0.eq(j);
                    var _date0 = $d0.attr('date');
                    if(_date0 < starttime_date) {
                        $d0.addClass('unselectable');
                    }
                }
                //清理：
                me.settings.$datepicker.find('.tips-cell').remove();
                me.settings.$datepicker.find('.show-month-con .word-cell').append('<div class="tips-cell cell choose_enddate"><span class="word">选择结束日</span></div>');

                me.settings.$datepicker.find('a.confirm').addClass('hide');
                me.settings.$datepicker.find('a.cancel').addClass('hide');

                me.settings.$datepicker.find('a.choose_starttime_onstartdate').addClass('hide');
                me.settings.$datepicker.find('a.choose_endtime_onenddate').addClass('hide');

                me.settings.$datepicker.find('a.choose').off('click').on('click', function() {
                    var isNowChooseStartDate = me.settings.$datetime_con.find('.starttime-con .date-con').hasClass('active');
                    var isNowChooseEndDate = me.settings.$datetime_con.find('.endtime-con .date-con').hasClass('active');
                    if(isNowChooseStartDate) {
                        me.settings.$datepicker.find('a.choose_starttime_onstartdate').removeClass('hide');
                    }else if(isNowChooseEndDate) {
                        me.settings.$datepicker.find('a.choose_endtime_onenddate').removeClass('hide');
                    }
                    me.settings.enable_datepicker_showUnselectableStyle = false;
                    me.settings.$datepicker.find('.month-dates-con .date-col.date.unselectable').removeClass('unselectable');
                    me.settings.$datepicker.find('a.confirm').removeClass('hide');
                    me.settings.$datepicker.find('a.cancel').removeClass('hide');
                    me.settings.$datepicker.find('.tips-cell').remove();
                    me.settings.$datepicker.find('a.choose').addClass('hide');
                });
                me.settings.$datepicker.find('a.choose').removeClass('hide');

                var endtime_date = datetime_con_func.getEndtime_date(me);
                me.settings.$datepicker.find('.date-col.date[date="'+endtime_date+'"]').addClass('chosen');

            });
        },
        chooseEndtime_time: function(me, time) {
	        debugger;
            var isDatepickerEmpty = me.settings.$datepicker.find('div').length === 0;
            if(isDatepickerEmpty) return;
            datetime_con_func.activeAndSetEndtime_time(me, time);
            var isDatepickerHide = me.settings.$datepicker.hasClass('hide');
            var step = isDatepickerHide ? (function() {
                return new Promise(function(resolve) {
                    me.settings.$timepicker.addClass('hide');
                    resolve();
                });
            }()): (function() {
                return new Promise(function(resolve) {
                    me.settings.$datepicker.addClass('hide');
                    resolve();
                });
            }());
            step.then(function(ret) {
                debugger;
                //如果在选择单日，则先还原
                var isNowChooseStartDate = me.settings.$datetime_con.find('.starttime-con .date-con').hasClass('active');
                var isNowChooseEndDate = me.settings.$datetime_con.find('.endtime-con .date-con').hasClass('active');
                if(isNowChooseStartDate) {
                    me.settings.$datepicker.find('a.choose_starttime_onstartdate').removeClass('hide');
                }else if(isNowChooseEndDate) {
                    me.settings.$datepicker.find('a.choose_endtime_onenddate').removeClass('hide');
                }
                me.settings.enable_datepicker_showUnselectableStyle = false;
                me.settings.$datepicker.find('.month-dates-con .date-col.date.unselectable').removeClass('unselectable');
                me.settings.$datepicker.find('a.confirm').removeClass('hide');
                me.settings.$datepicker.find('a.cancel').removeClass('hide');
                me.settings.$datepicker.find('.tips-cell').remove();
                me.settings.$datepicker.find('a.choose').addClass('hide');


                return (function() {
                    return new Promise(function(resolve) {
                        debugger;
                        var starttime = datetime_con_func.getStarttime(me);
                        me.settings.$timepicker.empty().append(template.getTimepickerHtml_hours(starttime)).removeClass('hide').fadeIn(50, 'swing');
                        me.settings.$timepicker.find('.time-hour-unit').on('click', function () {
                            var $this = $(this);
                            if($this.hasClass('lt-starthms')) {
                                alert('结束时间应大于开始时间');
                                return;
                            }
                            me.settings.$datetime_con.removeClass('hide');
                            me.settings.$timepicker.find('.time-hour-unit').off('click');
                            me.settings.$timepicker.empty().append(template.getTimepickerHtml_mins(me, $this.attr('hour'), starttime))
                                .find('.time-min-unit').off('click').on('click', function () {

                                var $this = $(this);
                                debugger;
                                if($this.hasClass('lt-starthms')) {
                                    alert('结束时间应大于开始时间');
                                    return;
                                }
                                var hms = $this.attr('hms');
                                me.settings.$timepicker.fadeOut(50, 'swing', function() {
                                    if(!isDatepickerEmpty && me.settings.$datepicker.hasClass('hide')) {
                                        func.showDatePicker(me);
                                    }
                                    /*func.showDatePicker(me).then(function() {
                                        if(!me.settings.$datepicker.html()) {
                                            var date = datetime_con_func.getStarttime_date(me);
                                            func._refreshDatepicker(me, {chosenDate: date, cb: function (ret) {
                                                    cb ? cb(ret): void(0);
                                                }});
                                        }
                                    });*/
                                    me.settings.$timepicker.addClass('hide').empty();
                                    resolve(hms);
                                    var starttime_date = datetime_con_func.getStarttime_date(me);
                                    me.settings.$datepicker.find('.date-col.date[date="'+starttime_date+'"]').addClass('chosen');
                                    me.settings.$datetime_con.removeClass('hide');
                                    setTimeout(function() {
                                        datetime_con_func.activeAndSetStarttime_date(me);
                                    }, 300);
                                });
                            });
                        });
                    });
                }());
            }).then(function(hms) {
                debugger;
                isDatepickerHide ? me.settings.$timepicker.removeClass('hide'): me.settings.$datepicker.removeClass('hide');
                datetime_con_func.activeAndSetEndtime_time(me, hms);
                setTimeout(function() {
                    datetime_con_func.activeAndSetStarttime_date(me);
                }, 500);
            });
        },
        chooseNoticeAdvance: function(me, cb) {
            func.hideMainPart(me).then(function () {
                return func.showNoticeAdvance(me);
            }).then(function () {

            });
        },
	    chooseTimezone: function(me, cb) {
	        var timezone;
	        func.hideMainPart(me).then(function () {
                return func.showTimezone(me);
            }).then(function () {
                me.settings.$timezone.off('click').on('click', '.timezone-item', function() {
                    var $this = $(this);
                    var timezone = $(this).attr('timezone'), timezonename = $(this).find('span.word').html();

                    func.hideTimezone(me).then(function() {
                        return func.showMainPart(me);
                    }).then(function () {
                        if($this.hasClass('remove-timezone')) {
                            cb();
                        }else {
                            cb(timezone, timezonename);
                        }
                    });
                });
            })
        },
	    selectSingleStarttime: function(me, cb) {
	        var date, hms;
            func.hideMainPart(me).then(function() {
                return func.showDatePicker(me);
            }).then(function() {
                date = moment(me.settings.$me.attr('starttime')).format('YYYY-MM-DD');
                return func.hideDatePicker(me);
            }).then(function() {
                me.settings.$datetime_con.removeClass('hide');
                me.settings.$timepicker.empty().append(template.getTimepickerHtml_hours(starttime)).removeClass('hide').fadeIn(50, 'swing');
                me.settings.$timepicker.find('.time-hour-unit').on('click', function () {
                    
                    var $this = $(this);
                    if ($this.hasClass('lt-starthms')) {
                        alert('结束时间应大于开始时间');
                        return;
                    }
                    me.settings.$datetime_con.removeClass('hide');
                    me.settings.$timepicker.empty().append(template.getTimepickerHtml_mins(me, $this.attr('hour'), starttime))
                        .find('.time-min-unit').off('click').on('click', function () {
                        hms = $this.attr('hms');
                    });
                });
            });
        },

        selectSingleEndtime: function(me, cb) {

        },

	    selectDate: function(me, cb) {
            func.hideMainPart(me).then(function() {
                return func.showDatePicker(me);
            }).then(function() {
                debugger;
                var date = moment(me.settings.$me.attr('starttime')).format('YYYY-MM-DD');
                func._refreshDatepicker(me, {chosenDate: date, cb: function (ret) {
                        cb ? cb(ret): void(0);
                    }});
            });
        },

	    getDateByTimePicker: function(me) {
	        var process_func = this;
	        return new Promise(function () {
	            me.settings.$main_container.fadeOut(50, 'swing', function() {
                    me.settings.$main_container.addClass('hide');
                    me.settings.$extra_container.show().fadeIn(50, 'swing', function () {
                        me.settings.$datepicker.removeClass('hide');
                        func._refreshDatepicker(me, {chosenDate: moment().format('YYYY-MM-DD')});
                    });
                });
            });
        },
        getHms: function(me, starttime) {
            var process_func = this;
            return new Promise(function(resolve, reject) {
                
                func.hideDatePicker(me).then(function() {
                    me.settings.$extra_container.show().fadeIn(50, 'swing', function () {
                        me.settings.$datetime_con.removeClass('hide');
                        me.settings.$timepicker.empty().append(template.getTimepickerHtml_hours(starttime)).removeClass('hide').fadeIn(50, 'swing');
                        me.settings.$timepicker.find('.time-hour-unit').on('click', function () {
                            var $this = $(this);
                            if($this.hasClass('lt-starthms')) {
                                alert('结束时间应大于开始时间');
                                return;
                            }
                            me.settings.$datetime_con.removeClass('hide');
                            me.settings.$timepicker.find('.time-hour-unit').off('click');
                            me.settings.$timepicker.empty().append(template.getTimepickerHtml_mins(me, $this.attr('hour'), starttime))
                                .find('.time-min-unit').off('click').on('click', function () {
                                    
                                    var $this = $(this);
                                    if($this.hasClass('lt-starthms')) {
                                        alert('结束时间应大于开始时间');
                                        return;
                                    }
                                    var hms = $this.attr('hms');
                                    me.settings.$timepicker.fadeOut(50, 'swing', function() {
                                        
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
				
                me.settings.$main_container.fadeOut(50, 'swing', function() {
                    $(this).addClass('hide');
                    var starthms, endhms;
                    me.settings.$extra_container.show().fadeIn(50, 'swing', function () {

                        me.settings.$datetime_con.removeClass('hide');
                        me.settings.$timepicker.empty().append(template.getTimepickerHtml_hours()).removeClass('hide').fadeIn(50, 'swing');
                        me.settings.$timepicker.find('.time-hour-unit').on('click', function() {
                            
                            var $this = $(this);
                            var hour = $this.attr('hour');

                            me.settings.$datetime_con.removeClass('hide');
                            me.settings.$timepicker.empty().append(template.getTimepickerHtml_mins(me, hour));

                            me.settings.$timepicker.find('.time-min-unit').off('click').on('click', function() {
                                
                                var $this = $(this);
                                starthms = $this.attr('hms');

                                datetime_con_func.activeAndSetStarttime_time(me, starthms);

                                me.settings.$datetime_con.removeClass('hide');
                                me.settings.$timepicker.empty().append(template.getTimepickerHtml_hours(starthms)).removeClass('hide').fadeIn(50, 'swing');

                                setTimeout(function() {
                                    datetime_con_func.activeAndSetEndtime_time(me);
                                }, 500);

                                me.settings.$timepicker.find('.time-hour-unit').on('click', function() {
                                    
                                    var $this = $(this);
                                    if($this.hasClass('lt-starthms')) {
                                        alert('结束时间应大于开始时间');
                                        return;
                                    }
                                    var hour = $this.attr('hour');

                                    me.settings.$datetime_con.removeClass('hide');
                                    me.settings.$timepicker.empty().append(template.getTimepickerHtml_mins(me, hour, starthms));

                                    me.settings.$timepicker.find('.time-min-unit').off('click').on('click', function() {
                                        
                                        var $this = $(this);
                                        if($this.hasClass('lt-starthms')) {
                                            alert('结束时间应大于开始时间');
                                            return;
                                        }
                                        endhms = $this.attr('hms');
                                        datetime_con_func.activeAndSetEndtime_time(me, endhms);
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

	var LifeCycle = {
	    beforeDatepickerReturn: function(me) {
            me.settings.$datepicker.find('.confirm').removeClass('hide');
            me.settings.$datepicker.find('.cancel').removeClass('hide');
            me.settings.$datepicker.find('.choose_starttime_onstartdate').addClass('hide');
            me.settings.$datepicker.find('.choose_endtime_onenddate').addClass('hide');
        },
        afterDatepickerFinishRendering: function (me) {
	        debugger;
            //不可选中的日的元素，置灰
	        if(me.settings.enable_datepicker_showUnselectableStyle) {
	            var isStartDateActive = me.settings.$datetime_con.find('.starttime-con .date-con.active').length > 0;
	            var isEndDateActive = me.settings.$datetime_con.find('.endtime-con .date-con.active').length > 0;
	            if(isStartDateActive) {
	                var endtime_date = datetime_con_func.getEndtime_date(me);
	                var $dates = me.settings.$datepicker.find('.month-dates-con:not(".hide") .date-col.date');
	                for(var i = 0, leni = $dates.length; i < leni; i++) {
	                    var $d = $dates.eq(i);
	                    var _date = $d.attr('date');
	                    if(_date > endtime_date) {
	                        $d.addClass('unselectable');
                        }
                    }
                }
                if(isEndDateActive) {
                    var starttime_date = datetime_con_func.getStarttime_date(me);
                    var $dates0 = me.settings.$datepicker.find('.month-dates-con:not(".hide") .date-col.date');
                    for(var j = 0, lenj = $dates0.length; j < lenj; j++) {
                        var $d0 = $dates0.eq(j);
                        var _date0 = $d0.attr('date');
                        if(_date0 < starttime_date) {
                            $d0.addClass('unselectable');
                        }
                    }
                }
            }
        }
    };

	var Status = {
	    isChoosing_starttime_date: function(me) {
	        return me.settings.$datetime_con.find('.starttime-con .date-con').hasClass('active');
        },
        isChoosing_starttime_time: function(me) {
            return me.settings.$datetime_con.find('.starttime-con .time-con').hasClass('active');
        },
        isChoosing_endttime_date: function(me) {
            return me.settings.$datetime_con.find('.endtime-con .date-con').hasClass('active');
        },
        isChoosing_endtime_time: function(me) {
            return me.settings.$datetime_con.find('.endtime-con .time-con').hasClass('active');
        },
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
            return weekday_name_rel[parseInt(moment(_ymd).format('d'))];
        },
        'get_dur_msg': function(starttime, endtime) {
		    
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
            onConfirm: function(ret) {
                //...
            },
            onCancel: function() {
                //...
            },
            starttime: moment().startOf('hour').add(1.5, 'hours').format('YYYY-MM-DD HH:mm:ss'),
            endtime: moment().startOf('hour').add(2, 'hours').format('YYYY-MM-DD HH:mm:ss'),
            enableTimezone: false,
            enableNoticeAdvance: false,
            minuteDuration: 5,//support 5/30
		};
        this.settings = $.extend({}, defaults, opt);
        this.settings.id = 'twperfectdatepicker_' + Util.currentMills();
		// var $btn = $(['<div class="twperfectdatepicker-btn-con" twperfectdatepickerid="',this.settings.id,'">',
        //
        //         '<div class="icon-con con"><i class="iconfont">&#xe79d;</i></div>',
        //
        //         '<div class="title-con con origin"><span class="word">设置时间</span></div>',
        //
        //         '<div class="starttime-con con time hide"><span class="word show-starttime"></span></div>',
        //
        //         '<div class="con gap time hide"> 到 </div>',
        //
        //         '<div class="endtime-con con time hide"><span class="word show-endtime"></span></div>',
        //
        //     '</div>'].join(''));
        //
		// $(ele).before($btn);
		// $(ele).remove();
		this.$ele = $(ele);

		this.$ele.addClass('twperfectdatepicker-con');
		func.init(this);
		func.bindEvent(this);
	};
    TwPerfectDatepicker.prototype = {
        destory: function() {
            this.settings.$me.remove();
        },
        hide: function() {
            debugger;
        	func.beforeHide(me);
            func.hide(me);
        }
    };

	$.fn.twperfectdatepicker = function (options) {
		return new TwPerfectDatepicker(this, options);
	};

})(jQuery);