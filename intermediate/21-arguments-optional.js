/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/
function addTogether() {
  var result;
  //var args = Array.prototype.slice.call(arguments, 0);
  var args = arguments;
  if(args.length === 1){
    if(typeof args[0] !== "number") return result;
    result = (function(){
      return function(num){
        if(typeof num !== "number") return undefined;
        return args[0] + num;
      };
    })();
  }
  else if(args.length === 2){
    if(typeof args[0] !== "number" || typeof args[1] !== "number") return result;
    result = args[0] + args[1];
  }
  return result;
}
addTogether(2,3);
