//Add Code Below

function findLongestWord(str) {
    //split string into an array of words with space as delimiter
    let strArry = str.split(" ");

    //iterate through array can compare crrent element length to Longestword var.  If it 
    //is greater, set Longestword to it
    let longestWord = "";
    for(let i = 0; i < strArry.length; i++){
        if(strArry[i].length > longestWord.length){
        longestWord = strArry[i];
        }
    }

    // console.log(str + "'s longest word is:" + longestWord.length);
    return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");