//jquery wrapper -- not necessary due to script tag at bottom of html for jquery
$(document).ready(function () {

    //target button, create event listner - create anomynous function
    $('.saveBtn').on('click', function () {
        //inside function -- identify the parent line "this" of each hour, and grabe the input value description
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');

        //take the value and send it LS, use time and use as key -- each hour will be grabbed and stored
        localStorage.setItem(time, value);

        //could create a notification to show that LS was done -- skipping this w/a setTimeout method
    });

    function UpdateHour() {
        //create a variable to identify real time using moment js - identifying only the hour
        var currentHr = moment().hours();
        //iterate over the timeblocks using moment js and conditional
        $('.time-block').each(function () {
            var blockHr = parseInt($(this).attr('id').split('-')[1]);

            //creast the conditional for time status
            //start with past? present? future?
            if (blockHr < currentHr) {
                $(this).addClass('past');

            } else if (blockHr === currentHr) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future');
            }
        });
    }
    //call the function
    UpdateHour();

    //apply a timer to it -- so that the function to compare time runs every 15 seconds
    var interval = setInterval(UpdateHour, 15000);


    //pull from LS each key to display
    $('#hour-9 .description').val(localStorage.getItem('hour-9'));
    $('#hour-10 .description').val(localStorage.getItem('hour-10'));
    $('#hour-11 .description').val(localStorage.getItem('hour-11'));
    $('#hour-12 .description').val(localStorage.getItem('hour-12'));
    $('#hour-13 .description').val(localStorage.getItem('hour-13'));
    $('#hour-14 .description').val(localStorage.getItem('hour-14'));
    $('#hour-15 .description').val(localStorage.getItem('hour-15'));
    $('#hour-16 .description').val(localStorage.getItem('hour-16'));
    $('#hour-17 .description').val(localStorage.getItem('hour-17'));

    //display the current date
    $('#currentDay').text(moment().format('dddd, MMMM Do'));


});