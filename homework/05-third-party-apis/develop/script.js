
// display current date in header
var nowDate = moment().format('dddd,' + ' MMM Do YYYY');
var date = $('#currentDay');
date.text(nowDate);
console.log("what is the date?");

// create varible for time slots
var time = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];
console.log(time)

var i = 0;
//function for checking and updating schedule with css styling
function hourChecker(){
    var nowHour = moment().hours();
    console.log("this moment");

    $(time).each(function(calHour) {
    var calHour = parseInt(time[i++]);
    console.log(calHour);

    if (calHour < nowHour) {
        $(".time-block").addClass("past");
    }
    else if (calHour === nowHour) {
        $(".time-block").removeClass("past");
        $(".time-block").addClass("present");
    }
    else {
        $(".time-block").removeClass("past");
        $(".time-block").removeClass("present");
        $(".time-block").addClass("future");
    } 
    })}
hourChecker();

// function saveEvent()
//when user enters text in text area
// then clicks Save button
// save text in text area


// get data from local storage
// $("#hour9.description").val(localStorage.getItem("hour9"));
// $("#hour10.description").val(localStorage.getItem("hour10"));
// $("#hour11.description").val(localStorage.getItem("hour11"));
// $("#hour12.description").val(localStorage.getItem("hour12"));
// $("#hour1.description").val(localStorage.getItem("hour1"));
// $("#hour2.description").val(localStorage.getItem("hour2"));
// $("#hour3.description").val(localStorage.getItem("hour3"));
// $("#hour4.description").val(localStorage.getItem("hour4"));
// $("#hour5.description").val(localStorage.getItem("hour5"));


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar(done)
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours(done)
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future - in progress
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
