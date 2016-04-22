/*====================================
 =            ON DOM READY            =
 ====================================*/
$(function() {

    // Toggle Nav on Click
    $('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();

        // if ($('#site-wrapper').hasClass('show-nav')){
        // 	$(window).click(function() {
        // 		$('#site-wrapper').removeClass('show-nav');
        // 	});
        // }


    });

    // $('#site-canvas').click(function() {
    // 	// Calling a function in case you want to expand upon this.
    // 	toggleNav();

    // });



});


/*========================================
 =            CUSTOM FUNCTIONS            =
 ========================================*/
function toggleNav() {
    if ($('#site-wrapper').hasClass('show-nav')) {

        $('#site-wrapper').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        $('#site-wrapper').addClass('show-nav');
    }

    //$('#site-wrapper').toggleClass('show-nav');
}

$('.page-link').on('click', function() {
    $( this ).find('span').toggleClass('fa-chevron-down', 'fa-chevron-right');
});


$('#map').click(function () {
    $('#map iframe').css("pointer-events", "auto");
});