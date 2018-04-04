//Add Code Below

function palindrome(str) {
    // Good luck!

    //If string length is 1 or less, count it as a palindrome
    if(str.length <= 1){
        return true;  
    }

    //Remove non-alphanumeric characters and convert to lower case
    let regexAlpha = /[a-z0-9]+/gi;
    let strLower = str.toLowerCase();
    let strLower = strLower.match(regexAlpha).join('');


    if(strLower[0] == strLower[strLower.length-1]){
        return palindrome(strLower.slice(1, -1));
    }


    //console.log(strLower[strLower.length-1]);  
    return false;


}