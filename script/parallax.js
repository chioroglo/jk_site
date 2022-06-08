"use strict"

function parallax(event) {
    let cursor = {x:event.clientX,y: event.clientY};
    let cursor_offset_speed = 1/25;
    let layers = $(".parallax-scene__layer.cloud");
    layers.css("transform",`translate(${cursor.x*cursor_offset_speed}px,${cursor.y*cursor_offset_speed}px)`);
}


$(document).on('mousemove',parallax);