/*
Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.
*/
function permAlone(str) {
  var total = 0;
  var n;
  var size = str.length;
  var permutations = [];
  var el = str;

  if(size === 1)  return 1;

  n = factorial(size); //get total permutations

  //test first permuation
  if(!hasRepeats(el)){
    total++;
    //premutations.push(el);
  }
  //iterate through string n times
  permutations.push(el);

  for(var i = 1; i <= n; i++){
    //shift last charcter in string to start of string
    //NOTE****this way of producing premutations doesn't work for strings over 3 chars)
    el = el.slice(size-1) + el.slice(0, size-1);
    permutations.push(el);
    //permutations.push(el);
    //find repeats and add to total if none found
    if(!hasRepeats(el)){
      total++;
      //premutations.push(el);
    }
  }//end for

  //Helper functions
  function hasRepeats(input){
    for(var i = 0; i < input.length - 1; i++){
      if(input[i] === input[i+1]) return true;
    }
    return false;
  }//end of hasRepeats

  function factorial(n){
    if(n === 1 || n === 0)  return 1;
    return n*factorial(n-1);
  }//end of factorial
  console.log(el.toString());
  return total;
}

permAlone('aab');
