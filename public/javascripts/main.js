var pathname = window.location.pathname;

$('#thumbnails ul li a').click(function(e){
    e.preventDefault();
    var linkId = $(this).attr('data-ui');
    var modalId = $('#' + linkId);
    if(linkId === modalId.attr('id')){
        $('.modal-wrapper').toggleClass('modal-open');
        $('.modal-open').css('height', $( window ).height());
    }

    $('.modal-open').click(function(){
        $(this).removeClass('modal-open');
    });
});

var interval = undefined;
$(document).ready(function () {
    var current = moment();
    var start = moment("4/23/2016 8:30 am");
    var end = moment("4/24/2016 6:00 pm");
    var btnLiveStream = $('#btnLiveStream');
    var lblLiveStream = $('#lblLiveStream');
    var btnMenu = $('#menu-btn');
    var header = $('#header');
    var btnMenuClose = $('#menu-close');

    window.carousel('.carousel');

    var timeout = 10;
    _.each($('.transition-element'), function (el) {
        timeout += 100;
        setTimeout(function () {
            $(el).addClass('transition-element-visible');
        },timeout);
    });


    btnLiveStream.on('click', function (ev) {
        if (current < start) {
            alert('Live Stream has not started yet, please check back Saturday after 8:30am');
            ev.stopPropagation();
            ev.preventDefault();
        }
    });

    btnMenu.on('click', function (ev) {
        ev.preventDefault();
        header.toggleClass('show-nav');
    });

    btnMenuClose.on('click', function (ev) {
        ev.preventDefault();
        header.removeClass('show-nav');
    });

    if (current > end) {
        btnLiveStream.hide();
        lblLiveStream.hide();
    }
});



