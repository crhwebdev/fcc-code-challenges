/*
Convert a date range consisting of two dates formatted as YYYY-MM-DD into a more readable format.

The friendly display should use month names instead of numbers and ordinal dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the user: if the date range ends in less than a year from when it begins, do not display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently the year 2016) and ends within one year, the year should not be displayed at the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return ["July 1st, 2016", "July 4th, 2018"].
*/
function makeFriendlyDates(arr) {
  var result = [],
      firstDate = arr[0].split('-'),
      secondDate = arr[1].split('-'),
      firstDateYear = parseInt(firstDate[0]),
      firstDateMonth = parseInt(firstDate[1]),
      firstDateDay = parseInt(firstDate[2]),
      secondDateYear = parseInt(secondDate[0]),
      secondDateMonth = parseInt(secondDate[1]),
      secondDateDay = parseInt(secondDate[2]),
      firstMonth = getMonth(firstDate[1]),
      firstDay = ' ' + getDay(firstDate[2]),
      firstYear = ', ' + firstDate[0],
      secondMonth = getMonth(secondDate[1]),
      secondDay = ' ' + getDay(secondDate[2]),
      secondYear = ', ' + secondDate[0];

  //default for formated dates is:  "December 1st, 2016","February 3rd, 2018"

  // dates are the same - return first date in formated form
  if(arr[0] === arr[1]){
        result.push(firstMonth + firstDay + firstYear);
        return result;
  }


  //1. Same year: "March 1st, 2017","May 5th"
  if(firstDateYear === secondDateYear){
    secondYear = '';
    //1a. Same year, same month: "July 1st","4th"
    if(firstDateMonth === secondDateMonth){
      secondDay = getDay(secondDate[2]);
      firstYear = '';
      secondMonth = '';
    }
  }

  else if((secondDateYear - firstDateYear) === 1 && (firstDateMonth - secondDateMonth) >= 0){
    //2a. less than a year and not same month but a year later, else: "September 5th, 2022","September 4th"
    if(firstDateMonth === secondDateMonth){
      if(firstDateDay-secondDateDay > 0){
          secondYear = '';
      }
    }
    //2. Less than a year apart: "December 1st","February 3rd"
    else{
      secondYear = '';
      firstYear = '';
    }
  }

  //add dates to result
  result.push(firstMonth + firstDay + firstYear);
  result.push(secondMonth + secondDay + secondYear);

  //Helper function to return month name for month integer 1-12
  function getMonth(month){
    var months = {
      1: 'January',
      2: 'February',
      3: 'March',
      4: 'April',
      5: 'May',
      6: 'June',
      7: 'July',
      8: 'August',
      9: 'September',
      10: 'October',
      11: 'November',
      12: 'December'
    };

    if(typeof month === 'string') { month = parseInt(month); }

    return months[month];
  }

  //Helper function to append day suffix (ex. 1st, 2nd, 3rd)
  function getDay(day){

    if(typeof day === 'string') { day = parseInt(day); }

    var dayStr = day.toString();
    var dayStrLast = dayStr[dayStr.length - 1];

    if(day > 9 && day < 21){
      dayStr += 'th';
    }
    else if(dayStrLast === '1'){
      dayStr += 'st';
    }
    else if(dayStrLast === '2'){
      dayStr += 'nd';
    }
    else if(dayStrLast === '3'){
      dayStr += 'rd';
    }
    else{
      dayStr += 'th';
    }
    return dayStr;
  }//end of addDAySuffix

  return result;
}

makeFriendlyDates(['2016-07-01', '2016-07-04']);
makeFriendlyDates(["2016-12-01", "2017-02-03"]);
makeFriendlyDates(["2016-12-01", "2018-02-03"]);
makeFriendlyDates(["2017-03-01", "2017-05-05"]);
makeFriendlyDates(["2018-01-13", "2018-01-13"]);
makeFriendlyDates(["2022-09-05", "2023-09-04"]);
makeFriendlyDates(["2022-09-05", "2023-09-05"]);
