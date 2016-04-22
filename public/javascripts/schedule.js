/*====================================
=            ON DOM READY            =
====================================*/
$(function() {
    
    var schedules = [
        {
            Title: "CrossFit",
            Duration: 1,
            Color:"rgba(100,27,17,1)",
            Days: [
                ["05:30","06:30","12:00","16:00","17:00","18:00"], //Monday
                ["05:30","06:30","12:00","16:00","17:00","18:00"], //Tuesday
                ["05:30","06:30","12:00","16:00","17:00","18:00"], //Wednesday
                ["05:30","06:30","12:00","16:00","17:00","18:00"], //Thursday
                ["05:30","06:30","12:00","16:00","17:00"], //Friday
                ["07:00","12:00"] //Saturday
            ]
        },
        {
            Title: "Olympic Weightlifting",
            Duration: 1,
            Color:"rgba(27,100,17,1)",
            Days: [
                ["19:15"], //Monday
                [], //Tuesday
                ["19:15"], //Wednesday
                [], //Thursday
                [], //Friday
                [] //Saturday
            ]
        },
        {
            Title: "Olympic Weightlifting",
            Color:"rgba(27,100,17,1)",
            Duration: 2,
            Days: [
                [], //Monday
                [], //Tuesday
                [], //Wednesday
                [], //Thursday
                [], //Friday
                ["10:00"] //Saturday
            ]
        }
    ]
        
    

	// Toggle Nav on Click
	$('.madtown-schedule').fullCalendar({
	    header:false,
	    defaultView: 'agendaWeek',
	    defaultDate: '2014-06-12',
	    minTime: '05:00:00',
	    maxTime: '21:00:00',
	    allDaySlot: false,
	    height:"auto",
	    hiddenDays: [0],
	    columnFormat: 'ddd',
	    displayEventTime: false,
	    events: function (start, end, timezone, callback) {
	        var events = [];
	        for(var isched=0;isched<schedules.length; isched++) {
	            var startDate = moment(start);
	            var schedule = schedules[isched];
	            
	            for(var iday=0;iday<schedule.Days.length; iday++) {
	                var times = schedule.Days[iday];
	                for(var itime=0;itime<times.length; itime++) {
	                    var eventStartDate = moment(startDate.format('L') + " " + times[itime]);
	                    var eventEndDate = moment(eventStartDate).add(schedule.Duration, 'h');
    	                var event = {
    	                    title: schedule.Title,
    	                    start: eventStartDate,
    	                    end: eventEndDate,
    	                    backgroundColor: schedule.Color,
    	                    borderColor: schedule.Color
    	                }
    	                events.push(event);
	                }
	                startDate.add(1,'d');
	            }
	            
	        }
	        callback(events);
	    }
	});


});



