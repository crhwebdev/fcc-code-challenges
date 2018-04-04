//Add Code Below
function myReplace(str, before, after) {
    //1. use str.replace to find and replace the sub string with a function  
    str = str.replace(before, function(match, offset, target){
      
      //check match against target to ensure that both have same case
      var charCode = target.charCodeAt(offset);
      if( charCode >= 65 && charCode <= 90){
        return after.slice(0,1).toUpperCase() + after.slice(1);
      }
      
      return after;
      
    });
    
    return str;
}

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
//console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
