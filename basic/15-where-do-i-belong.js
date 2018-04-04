//Add Code Below
// function getIndexToIns(arr, num) {
//     // Find my place in this sorted array.
//     //Create sorted array
//     var sortedArr = arr.sort(function(first, second){
//       return first - second;
//     });
//     //console.log(sortedArr);
//     //iterate through sorted array and compare number to current value
//     for(var i = 0; i < sortedArr.length; i++){
//       if(num <= sortedArr[i]){
//         return i;
//       }
//     }
        
//     return i;
// }

function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    //Create sorted array
    let sortedArr = arr.sort((first, second) => first - second);    
    //iterate through sorted array and compare number to current value
    for(let i = 0; i < sortedArr.length; i++){        
      if(num <= sortedArr[i]){
        return i;
      }
    }        
    return i;
}

console.log(getIndexToIns([40, 60], 50));