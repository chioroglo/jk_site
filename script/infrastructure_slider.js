"use strict"

function infrastructure_slider(nextSlide) {
    
    let currentSlide = $('.nav__card.current');
    let nextSlideIndex = nextSlide.index();
    let screen = $('.infrastructure-slider__screen');

    if (nextSlideIndex === currentSlide.index() || ( 0 < screen.css('opacity') < 1 )) {
        return;
    }

    if (nextSlideIndex == -1) {
        if (currentSlide.index() == 0) {
            $('.nav__card:last-child').addClass('current');
            nextSlide = $('.nav__card:last-child')
            nextSlideIndex = $('.nav__card').length - 1;
        }
        else {
            $('.nav__card:first-child').addClass('current');
            nextSlide = $('.nav__card:first-child');
            nextSlideIndex = 0;
        }
    }
    else {
        nextSlide.addClass('current');
    }
    currentSlide.removeClass('current');


    // makes image smoothly disappear
    screen.animate({opacity:0}, 500, () => {
        $('.infrastructure-slider__screen').css(`background-image`,`url('images/infrastructure-slider/slidercard_` + nextSlideIndex + `.jpg'`);
        screen.animate({opacity:1},500);

    } );
    
    $('.infrastructure-slider__buttons h2').html(nextSlide.text());

    // get subtitle from Database
    $.get( "php/get_subtitle.php?id_request=" + ($('.nav__card.current').index() + 1), function(data) {
        
        console.log($('.nav__card.current').index() + 1);
        data = JSON.parse(data);
        $('.infrastructure-slider__buttons span').html(data['caption']);
    });
};