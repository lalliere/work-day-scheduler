let date = moment().format('dddd, MMMM Do');
$("#currentDay").text(date);

let timePoints = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM"];

function createTime() {
    for (i=0; i < timePoints; i++) {
        tRow = $("<tr>");

        tRow.append(timepoints)
        
        $(".time").append(tRow);
    };
};

createTime();