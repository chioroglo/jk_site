"use strict"


function displayPlotInfo(event,id) {

  
  $('.land-popup').css('display','none');
    
  $.get( "php/get_plot_info.php?id_request=" + id, 

  function(data) 
  { 
    data = JSON.parse(data);

    $('.land-popup ul li:nth-child(1) span').text("№ " + data.plotID);

    $('.land-popup ul li:nth-child(2) span').text(data.plot_area + " m2");
    
    $('.land-popup ul li:nth-child(3) span').text(data.house_area + " m2");

    $('.land-popup ul li:nth-child(4) span').text(data.adress);

    $('.land-popup ul li:nth-child(5) span').text(data.price + ' $');

    if (data.isBought == 1) 
    {
      $('.land-popup #isbought_flag').text('УЧАСТОК ЗАНЯТ');

      $('.land-popup').css("background-color","rgba(255,0,0,0.3)");
    }
    else
    {
      $('.land-popup').css("background-color","rgba(255,255,255,0.3)");

      $('.land-popup #isbought_flag').text('');
    }
  });    

  let cursor = {x: event.pageX,y:event.pageY};

  $('.land-popup').css("transform",`translate(${cursor.x - 200}px,${cursor.y - 930}px)`);

  $('.land-popup').fadeIn(1000,() => {});
  
  return;
}
