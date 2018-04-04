//Add Code Below
function uniteUnique(arr) {
    /*
    1. loop through argument list start at arguments[1]
    2. loop through current argument one element at a time and see if element
        is in arr already.  If not, add it.
    3. Once all argument arrays have been iterated throug, return the final array
    */
    var currArr;
    
    for(var ia = 1; ia < arguments.length; ia++){
      currArr = arguments[ia]; 
      for(var i = 0; i < currArr.length; i++){
        if(!(currArr[i] in arr)){
          arr.push(currArr[i]);
        }
      }
    }//end of ia for loop
    
    return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);