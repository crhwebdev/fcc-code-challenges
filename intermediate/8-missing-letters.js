//Add Code Below
function fearNotLetter(str) {
    /*
     1. loop through string one character at a time
     2. get current letter and next letter and check to see if next letter is exactly 1 greater
     3. if it is not, then add the character for that value to the string
     4. return the string
    */
    var missing,
        curCharValue,
        nextCharValue;
    
    for(var i = 0; i < str.length; i++){
      curCharValue = str.charCodeAt(i);    
      if(i != str.length - 1){
        nextCharValue = str.charCodeAt(i+1);      
        if(nextCharValue - curCharValue != 1){
          if(!missing)  missing = '';
          missing += String.fromCharCode(curCharValue + 1);        
        }
      }
    }//end of i for loop
     
    return missing;
}

fearNotLetter("abce");