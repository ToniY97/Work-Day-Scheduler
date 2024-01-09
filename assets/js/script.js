$(document).ready(function () {
    //Display current day
    $("#currenDay").text(daysjs().format("dddd, MMMM D"));

    //Create time blocks
    for (let i= 9; i <= 17; i++) {
        let timeBlock = $("<div>").addClass("row time-block");
        let hour = $("<div>").addClass("hour col-md-1").text(dayjs().hour(i).format("hA"));
        let textArea = $("<textarea>").addClass("col=md-10");
        let saveBtn = $("<button>").addClass("saveBtn col-md-1").html("<i class='fas fa-save'></i>");

        //Set background colour based on past, present future
        if (i < dayjs().hour()) {
            textArea.addClass("past");
        } else if (i === dayjs().hour()) {
            textArea.addClass("present");
        }else {
            textArea.addClass("future");
        }

        //Retrieve saved event from local storage
        let savedEvent = localStorage.getItem("event_" + i);
        if (savedEvent) {
            textArea.val(savedEvent);
        }

           //Save button click event
           saveBtn.on("click", function () {
            let eventText = textArea.val();
            localStorage.setItem("event_" + i, eventText);
           });
        }
        //Append elements to time block
    timeBlock.append(hour, textArea, saveBtn);

    //Append time block to container
    $(".container").append(timeBlock);
 
});