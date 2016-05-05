window.carousel = function carousel (selector) {
    var currentSlide = 1;
    var timeout = 5000;
    var wrapper = $(selector);
    var slides = wrapper.find('div');

    function setNextImage() {
        currentSlide = currentSlide + 1 <= slides.length ? currentSlide + 1 : 1;
        slides.addClass('transparent');
        wrapper.find('#slider'+currentSlide).removeClass('transparent');
        setTimeout(setNextImage, timeout);
    }

    setTimeout(setNextImage, timeout);
};