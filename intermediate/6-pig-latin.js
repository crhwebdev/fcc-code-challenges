//Add Code Below
function translatePigLatin(str) {    
    var consonant = /[bcdfghjklmnpqrstvwxyz]+/; //regex to match consonants  
    var matchArr = str.match(consonant); //get back array of matches
    
    if(matchArr === null || matchArr.index !== 0){ //test to see if it starts with a vowel
      str = str + "way";
    }
    else{ //if not, slice of the starting cluster of consonants and place at end with "ay"
      str = str.slice(matchArr[0].length) + str.slice(matchArr.index, matchArr[0].length) + "ay";
    }  
    return str;
}

//console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("consonant"));
  