/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.
*/
function truthCheck(collection, pre) {
  // Is everyone being true?

  //Iterate through set
  for(var i = 0; i < collection.length; i++){
    //if pre doesn't exist on an element in collection, then return false
    if(!collection[i].hasOwnProperty(pre)) return false;
    else{
      //if any of the pre values are falsy, return false
      if(!collection[i][pre]) return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
