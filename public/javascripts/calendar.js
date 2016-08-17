window.calendar = function () {

    var el = $('.full-calendar');
    el.fullCalendar({
        defaultView: "agendaWeek",
        defaultDate: moment(),
        allDaySlot: false,
        slotDuration: '00:30:00',
        minTime: '05:00:00',
        maxTime: '21:00:00',
        firstDay:0,
        columnFormat: 'dddd',
        header: {
            left:   '',
            center: '',
            right:  ''
        },
        events: window.calendarEvents
    });
    _.delay(function () { el.fullCalendar('today'); },200);

    $('.calendar-button').click(function (ev) {
        ev.stopPropagation();
        ev.preventDefault();

        window.open('/calendar', 'Calendar', 'width=800,height=800,menubar=0');
    })
};

