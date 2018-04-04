//Add Code Below
// function sumAll(arr) {
  
//     var sortedArr = arr.sort(function(a, b) {
//         return a - b;
//     });
//     var sum = 0;    
//     for(var i = sortedArr[0]; i <= sortedArr[1]; i++){
//         sum += i;
//     }    
//     return sum;
// }
function sumAll(arr) {
  
    let sortedArr = arr.sort( (a, b) => a - b );
    let sum = 0;
    let startOfRange = sortedArr[0];
    let endOfRange = sortedArr[1];    
    for(let i = startOfRange; i <= endOfRange; i++){
        sum += i;
    }    
    return sum;
}

sumAll([1, 4]);