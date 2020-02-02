// display the current date at the top of the planner
let date = moment().format('dddd, MMMM Do');
$("#currentDay").html(date);


for (let i = 8; i <= 16; i++) {
    let time = moment(i, "HH:mm").format("h:mm a");

    let classColor;
    let value;


    if (localStorage.getItem(moment(i, "HH:mm").format("h:mm"))) {
        value = localStorage.getItem(moment(i, "HH:mm").format("h:mm"));
    } else {
        value = "";
    }

    //if the hour of the row is prior to the current hour of time, color code it with .past
    if (i < moment().hour()) {
        classColor = "past";

    //if the hour of the row is equal to the current hour of time, color code it with .present
    } else if (i === moment().hour()) {
        classColor = "present";
    
    //if the hour of the row is later than the current hour of time, color code it with .future
    } else {
        classColor = "future";
    }

    //append new rows to the planner-table div with a column for hour of day, column for user to enter a task, and column for save button
    $("#planner-table").append(`
    <div class="row">
        <div class="hour 9 col">${time}</div>
        <textarea id = ${time} class="textarea col ${classColor}">${value}</textarea>
        <button class="saveBtn col"><i class="far fa-save"></i></button>
     </div>
    `);
}

//on click of the save button, whatever is in the task column gets saved to local storage to be displayed even if the page is refreshed
$(document).on("click", ".saveBtn", function () {
    let id = $(this)
        .prev()
        .attr("id");
    let text = $(this)
        .prev()
        .val();
    localStorage.setItem(id, text);
    console.log(id, text);
});