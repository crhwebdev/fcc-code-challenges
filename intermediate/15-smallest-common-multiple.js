/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/
function smallestCommons(arr) {
  var minRange = arr[0],
      maxRange = arr[1],
      result = 0;

  //check to make sure we have the right min and max range
  if(minRange > maxRange){
    minRange = arr[1];
    maxRange = arr[0];
  }

  function gcd(min, max){
    //sanity check to ensure min is < max
    if(min > max){
      var temp = max;
      max = min;
      min = temp;
    }
    var r = max % min;
    if(r === 0) { return min;}
    while(r > 0){
      max = min;
      min = r;
      r = max % min;
    }//end while
    return min;
  }//end gcd

  //calculate smallest common multiplyer of two numbers
  function scm(a, b){
    return (a * b)/gcd(a, b);
  }//end scm

  //calculate scm for range
  result = scm(minRange, minRange+1); //calculate scm for first in range and next
  //go through range of arr
  for(var i = minRange + 2; i <= maxRange; i++){
    result = scm(result, i);
  }//end for
  return result;
}//end smallestCommons


smallestCommons([1,5]);
