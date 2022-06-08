'use strict';

    let limit_stage = 5;

 //    $.get("php/common_info_request.php?" , limit_stage = function(data) {
 //        data = JSON.parse(data);
 //        console.log(data.stage);
 //        return data.stage;
 //    })
 //    console.log(limit_stage);

function call_next(current_progress,current_stage) {
    current_progress += 11;
    current_stage++;
    $('.progress').css('width',current_progress + '%');
    $('.progress-container > *:nth-child(' + current_stage + ')').addClass('active');

    if(current_stage > limit_stage) {
        return;
    }
    else {
        call_next(current_progress,current_stage);
    }
}