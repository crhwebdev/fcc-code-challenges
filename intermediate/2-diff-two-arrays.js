//Add Code Below
function diffArray(arr1, arr2) {          
    //filter arr1 against arr2 and vica versa 
    //and then concat the two              
    var test1 = arr1.filter(function(value){
      var found = true;
      for(var i = 0; i < arr2.length; i++){
        if(value === arr2[i]) { return false; }      
      }
      return true;
    });
    
    var test2 = arr2.filter(function(value){
      var found = true;
      for(var i = 0; i < arr1.length; i++){
        if(value === arr1[i]) { return false; }      
      }
      return true;
    });            
    //console.log("testing: " + test.join(",") + " against: " + target.join(",") + " returns:" + newArr.join(","));        
    return test1.concat(test2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);