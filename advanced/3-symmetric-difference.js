/*
Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).

https://www.freecodecamp.com/challenges/symmetric-difference#?run=disabled

*/
function sym() {
  var args = arguments;
  var maxSet, minSet;
  var symSet = [];

  //need to return an xor of two arrays/sets.
  if(args.length < 2) return undefined;

  maxSet = args[0];
  minSet = args[1];

  //helper function to compare sets
  function compare(setX, setY){
    for(var x = 0; x < setX.length; x++){
        var notIn = true;
        console.log("testing " + setX[x]);
        for(var y = 0; y < setY.length; y++){
          if(setX[x] === setY[y] ){
            notIn = false;
          }
        }
        if(notIn){
          console.log(setX[x] + " is not in set y");
          symSet.push(setX[x]);
        }
    }
  }

  function deDup(arr){
    var result = [];
    var first, second;
    for(var i = 0; i < arr.length - 1; i++){
      first = arr[i];
      second = arr[i+1];
      if(first !== second){
        result.push(first);
      }
    }

    result.push(second);
    return result;
  }


  console.log("arg1=" + args[0]);
  console.log("arg2=" + args[1]);

  //1. iterate through args getting current array and next arrays
  for(var i = 0; i < args.length-1; i++){
    symSet = []; //set symSet = to empty set
    //2. compare and add any unique elements to output, giving us symmetric difference of these two arrays.
    compare(maxSet, minSet);
    compare(minSet, maxSet);

    //3. set maxSet to current symmetrical set and minSet to next set in list
    maxSet = symSet.slice(0);  //need this to make a copy
    minSet = args[i+2];
  }

  //4. sort list
  symSet.sort(function(a, b){
    return a-b;
  });

  symSet = deDup(symSet);

  //5. dedup list

  return symSet;
}


console.log(sym([1, 2, 5], [2, 3, 5]));
console.log(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]));
console.log(sym([1, 2, 3], [5, 2, 1, 4]));
console.log(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]));
