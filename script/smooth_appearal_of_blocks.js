"use strict";


function block_appearal() { // for place_for_your_house

    $('.pr-info img').animate( {left:"0%"},2000);
    
    for (let index = 0 ; index < $("ul li").length ; index++)
    {
        $('.pr-info ul li:nth-child(' + index + ')').fadeIn(index*1000);
    }
}


$(document).bind('scroll', function() {
    var scrollOffset = $(document).scrollTop();
    var containerOffset = $('.place_for_your_house').offset().top  - window.innerHeight/2.0;

    if (scrollOffset > containerOffset) {
      var animate = setInterval(function() {
        block_appearal();
      }, 100);
    }
});


$(document).bind('scroll', function() {
    var scrollOffset = $(document).scrollTop();
    var containerOffset = $('.origins').offset().top  - window.innerHeight/2.0;

    if (scrollOffset > containerOffset) {
       var animate = setInterval(function() {
        $('.origins h1').animate( {left:"10%"},2000);
        $('.origins span').animate( {left:"10%"},1500);
      }, 100);
    }
});

$(document).bind('scroll', function() {
  var scrollOffset = $(document).scrollTop();
  var containerOffset = $('.progressbar_stages').offset().top  - window.innerHeight/2.0;

  if (scrollOffset > containerOffset) {
    var animate = setInterval(function() {
      call_next(0,2);
    }, 100);
     $(document).unbind('scroll');
  }
});