$(document).ready(function () {
  //on button click, saves to local storage
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

  //gets local storage value
  $(".description").each(function () {
    var time = $(this).parent().attr("id");
    var storedValue = localStorage.getItem(time);
    $(this).val(storedValue);
  });
});

//current date for header
var today = moment();
$("#currentDay").text(today.format("D MMM YYYY"));

//check the id #hour, format into moment time
var timeNow = parseInt(moment().format("HH"));
console.log(timeNow);

// CSS styling for time change
let i;
if (timeNow >= 8 && timeNow <= 17) {
  for (i = 0; i < timeNow - 8; i++) {
    $(".time-block").eq(i).css("background-color", "grey");
  }
  $(".time-block").eq(timeNow - 9).css("background-color", "red ");
}
for (let j = i; j < 17; j++) {
  $(".time-block").eq(j).css("background-color", "green");
}
