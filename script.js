let date = moment().format('dddd, MMMM Do');
$("#currentDay").html(date);



for (i=0; i <= 8; ++i) {
    let time = parseInt($(".rows").attr("data-id"));
    
    if (time < moment().hour()) {
        classColor = "past";
        
    } else if (time === moment().hour()) {
        classColor = "present";
        
    } else {
        classColor = "future";
    }
    
    $(".rows").addClass(classColor);
    console.log(time);
    console.log(moment().hour());
       
}