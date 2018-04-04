//Add Code Below
function mutation(arr) {
    let compareOne;
    let compareTwo;
    //convert first string into an array
    if(arr[0].length <= arr[1]){
      compareOne = arr[0].toLowerCase().split('');
      compareTwo = arr[1].toLowerCase();
    }
    else{
      compareOne = arr[1].toLowerCase().split('');
      compareTwo = arr[0].toLowerCase();
    }
    
      
    //iterate through the array and find if 
    //that letter exists in the second string
    for(let i = 0; i < compareOne.length; i++){
      if(compareTwo.indexOf(compareOne[i]) == -1){ return false; }
    }
    
    return true;
}
  
mutation(["hello", "hey"]);