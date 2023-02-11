

//declare a time and check it against something in moment
console.log(moment("2023-01-22").isSame("2023-01-22"));
//returns true 


//parses the following date, 11/3/2020, and convert it into the following format: Sunday, February 14th 2010, 3:25:50 pm.

var reformatDate = moment("3/11/20", "DD-MM-YY").format("dddd, D MMMM YYYY, h:mm:ss a");
$("#3a").text(reformatDate);


//working moment snippets
console.log(moment("09:00:00").isSame("09:00:00"));
console.log(moment().unix());

console.log(moment().format('LTS'));







//html

<div id="hour-9" class="row time-block">
        <div class="col-md-1">09:00:00</div>
        <textarea class="col-md-10 description"></textarea>
        <button class="col-md-1 btn saveBtn"><i class="fas fa-save"></i></button>
      </div>




//css click event 
themeButtonEl.on('click', function () {
    if (isDark) {
      $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
      isDark = !isDark;
    } else {
      $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
      isDark = !isDark;
    }
  });



  function getTimeCategory(time) {
    var timeCategory = '';
    var timeFormat = 'HH:mm:ss';
  
    if (
      time.isBetween(moment('00:00:00', timeFormat), moment('04:59:59', timeFormat)) ||
      time.isSame(moment('00:00:00', timeFormat)) ||
      time.isSame(moment('04:59:59', timeFormat))
    ) {
      timeCategory = 'present'
    }

