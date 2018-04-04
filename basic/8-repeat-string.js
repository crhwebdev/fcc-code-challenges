//Add Code Below

function repeatStringNumTimes(str, num) {
    
    let repeatedStr = "";

    //test to see if number is zero or less and return empty string if it is
    if(num <= 0){
        return "";
    }

    //loop that runs number of times equal to num
    for(let i= 0; i < num; i++){
        repeatedStr += str;
    }

    return repeatedStr;
}

repeatStringNumTimes("abc", 3);