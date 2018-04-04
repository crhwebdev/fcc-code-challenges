//Add Code Below
function truncateString(str, num) {  
  let strLen = str.length;
  let newLength;
      
  //case 1. string is less than or equal to num length : return string
  if(strLen <= num){
    return str;
  }
  //case 2. string is 3 or less characters : append "..." to end
  else if(num <= 3){
    return str.slice(0, num) + "...";  
  }
  //case 3. string is > 3 characters and is greater than num: truncate string by difference between it's length
  //         and num - 3, then append "..." to end
  else{
    //truncate string and add elipses
    newLength = num - 3;
    return str.slice(0,newLength) + "...";
  }
    
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);