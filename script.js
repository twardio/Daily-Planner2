//local storage of text input
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    //this gets nearby values of description class
    var value = $(this).siblings(".description").val();
    //this is = id of the parent attribute hour-# (e.g.9)
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });
});

//current date for header
var today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));




//check the id #hour, format into moment time
var timeNow = parseInt((moment().format('HH')));
console.log(timeNow)




