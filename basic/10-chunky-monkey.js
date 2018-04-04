//Add Code Below

function chunkArrayInGroups(arr, size) {
    // Break it up.
    let count = 0;
    let subArr = [];
    let newArr = [];
        
    for(let i = 0; i < arr.length; i++){                          
        //push current element into a temporary array
        subArr.push(arr[i]);
        //if the temporary array length is equal to the size, we need to add it to the return array
        //and resset some variables
        if(subArr.length == size){
          newArr.push(subArr);
          subArr = [];
        }
            
    }
    //if there are still elements left in subArr (in case of arrays with lengths not evenly divisible by size)
    //add the subArr to newArr
    if(subArr.length > 0){ newArr.push(subArr); }
    
    // console.log(newArr);
    return newArr;
}
  
  //chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
  
  //chunkArrayInGroups(["a", "b", "c", "d"], 2);