var pathname = window.location.pathname;
var firstP = {
    'width': '100%',
    'float': 'none',
    'padding-left': '0',
    'margin-bottom': '0',
    'margin-top': '6rem',
}
var leftP = {
    'width': '25%',
    'float': 'left',
    'margin-right': '2%'
}
var rightP = {
    'width': '73%',
    'float': 'left'
}
var leftPImg = {
    'width': '100%',
    'max-width': '200px'
}
var heading = {
    'clear': 'both',
    'padding-top': '6rem',
    'margin-bottom': '2rem',
    'margin-top': '0'
}
if (pathname === '/about-crossfit/') {
    $('#main p:first-child').css(firstP);
    $('#main h3 + p').css(leftP);
    $('#main h3 + p + p').css(rightP);
    $('#main h3 + p img').css(leftPImg);
    $('#main h3').css(heading);
}



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
    interval = setInterval(getNext, 2000); // milliseconds
    $('#next').on('click', getNext);
    $('#prev').on('click', getPrev);

    _.delay(function () {
        $(".owl-carousel").owlCarousel({
            loop:true,
            autoWidth:false,
            items:1,
            autoplay:true,
            autoplayTimeout:5000,
            autoplayHoverPause:true,
            animateOut: 'fadeOut'
        });
        $(".owl-carousel").trigger('play.owl.autoplay');

    },500);

    var current = moment();
    var start = moment("4/23/2016 8:30 am");
    var end = moment("4/24/2016 6:00 pm");
    var btnLiveStream = $('#btnLiveStream');
    var lblLiveStream = $('#lblLiveStream');

    btnLiveStream.on('click', function (ev) {
        if (current < start) {
            alert('Live Stream has not started yet, please check back Saturday after 8:30am');
            ev.stopPropagation();
            ev.preventDefault();
        }
    });

    if (current > end) {
        btnLiveStream.hide();
        lblLiveStream.hide();
    }
});

function getNext() {
    var $curr = $('.slideshow img:visible'),
        $next = ($curr.next().length) ? $curr.next() : $('.slideshow img').first();

    transition($curr, $next);
}

function getPrev() {
    var $curr = $('.slideshow img:visible'),
        $next = ($curr.prev().length) ? $curr.prev() : $('.slideshow img').last();
    transition($curr, $next);
}

function transition($curr, $next) {
    clearInterval(interval);

    $next.css('z-index', 2).fadeIn('slow', function () {
        $curr.hide().css('z-index', 0);
        $next.css('z-index', 1);
    });

}


