//Add Code Below

function titleCase(str) {
    //convert string to lowercase
    let lowerstr = str.toLowerCase();
    //split string into array of words
    let strArry = lowerstr.split(" ");

    //iterate through array with for loop 
    //and convert first letter to caps
    for(var i = 0; i < strArry.length; i++){
        strArry[i] = strArry[i].slice(0, 1).toUpperCase() + strArry[i].slice(1);
    }

    return strArry.join(" ");
}

titleCase("I'm a little tea pot");