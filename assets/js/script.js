$(document).ready(function () {
    // Load events from local storage
    for (let i = 9; i <= 17; i++) {
      let savedEvent = localStorage.getItem("event_" + i);
      if (savedEvent) {
        $(".container").find(".time-block").eq(i - 9).find("textarea").val(savedEvent);
      }
    }
  
    // Display current day
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  
// Create time blocks
for (let i = 9; i <= 17; i++) {
    let timeBlock = $("<div>").addClass("row time-block");
    let hour = $("<div>").addClass("hour col-md-1").text(dayjs().hour(i).format("hA"));
    let textArea = $("<textarea>").addClass("col-md-10");
    let saveBtn = $("<button>").addClass("saveBtn col-md-1").html("<i class='fas fa-save'></i>");
  
    // Set background color based on past, present, or future
    if (i < dayjs().hour()) {
      textArea.addClass("past");
    } else if (i === dayjs().hour()) {
      textArea.addClass("present");
    } else {
      textArea.addClass("future");
    }
  
    // Adjust background color for the current and upcoming hours
    if (i === dayjs().hour()) {
      hour.addClass("present");
    } else if (i > dayjs().hour()) {
      hour.addClass("future");
    }
  
    // Retrieve saved event from local storage
    let savedEvent = localStorage.getItem("event_" + i);
    if (savedEvent) {
      textArea.val(savedEvent);
    }
  
    // Save button click event
    saveBtn.on("click", function () {
      let eventText = textArea.val();
      localStorage.setItem("event_" + i, eventText);
    });
  
    // Append elements to time block
    timeBlock.append(hour, textArea, saveBtn);
  
    // Append time block to container
    $(".container").append(timeBlock);
  }  
  
    // Display current date and time below the scheduler
    setInterval(function () {
  
      // Display current time at the top right corner
      let currentTime = dayjs().format("h:mm A");
      $("#currentTime").text(currentTime);
    }, 1000); // Update every second
  });