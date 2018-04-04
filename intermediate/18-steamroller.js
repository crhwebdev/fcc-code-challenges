/*
Flatten a nested array. You must account for varying levels of nesting.
*/
function steamrollArray(arr) {
  // I'm a steamroller, baby - use Array.isArray() to determine if element is an array
  var result = [];

  //iterate through top array
  for(var i = 0; i < arr.length; i++){
    //if the element is not an array, just add it to result
    if(!Array.isArray(arr[i])){
      result.push(arr[i]);
    }
    else{
      //iterate through array and return elements (whether array or non-array)
      for(var j = 0; j < arr[i].length; j++){
        result.push(arr[i][j]);
      }
    }
  }//end for loop

  //check final result to make sure it doesn't have any sub-arrays
  for(var c = 0; c < result.length; c++){
    //if it does have an array within it, then flatten it again recursively
    if(Array.isArray(result[c]))  return steamrollArray(result);
  }

  return result;
}

steamrollArray([1, [2], [3, [[4]]]]);

//a better implimentation
const flatten = function(arr, result = []) {
  for (let i = 0, length = arr.length; i < length; i++) {
    const value = arr[i];
    if (Array.isArray(value)) {
      flatten(value, result);
    } else {
      result.push(value);
    }
  }
  return result;
};

flatten([1, [2], [3, [[4]]]]);
