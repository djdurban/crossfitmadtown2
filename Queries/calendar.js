var _ = require('lodash');
var moment = require('moment');

exports.getItems = function () {
    var classData = [
        {
            title: 'CrossFit',
            color: 'rgb(30,101,52)',
            recurrences: [
                {
                    days: [1,2,3,4,5],
                    time: '05:30:00',
                    length: 60
                },
                {
                    days: [1,2,3,4,5],
                    time: '06:30:00',
                    length: 60
                },
                {
                    days: [1,2,3,4,5],
                    time: '12:00:00',
                    length: 60
                },
                {
                    days: [1,2,3,4,5],
                    time: '16:00:00',
                    length: 60
                },
                {
                    days: [1,2,3,4,5],
                    time: '17:00:00',
                    length: 60
                },
                {
                    days: [1,2,3,4],
                    time: '18:00:00',
                    length: 60
                },
                {
                    days: [6],
                    time: '07:00:00',
                    length: 60
                },
                {
                    days: [6],
                    time: '12:00:00',
                    length: 60
                }
            ]
        },
        {
            title: 'Weightlifting',
            color: 'rgb(188,4,4)',
            recurrences: [
                {
                    days: [1,3],
                    time: '19:00:00',
                    length: 60
                },
                {
                    days: [6],
                    time: '10:00:00',
                    length: 120
                }
            ]
        },
        {
            title: 'Hot Mammas',
            color: 'rgb(213,217,32)',
            recurrences: [
                {
                    days: [2,3,5],
                    time: '9:00:00',
                    length: 60
                }
            ]
        }
    ];


    var eventData = [];
    var currentDate = moment().format('L');
    _.each(classData, function (item) {
        _.each(item.recurrences, function (r) {
            _.each(r.days, function (day) {
                var startDate = moment(currentDate + ' ' + r.time).local();
                var start = startDate.day(day);
                var end = moment(start).add(r.length, 'm');

                eventData.push({
                    title: item.title,
                    start: start.format('MM/DD/YYYY HH:mm zz'),
                    end: end.format('MM/DD/YYYY HH:mm zz'),
                    color: item.color
                });
            });
        });
    });

    return eventData;
};