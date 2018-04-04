//Add Code Below
// function destroyer(arr) {
//     // Remove all the values
//     //get array of values to remove
//     let rmArr = [];
//     for(let i = 1; i < arguments.length; i++){
//       rmArr.push(arguments[i]);
//     }
        
//     let newArr = arr.filter(function(value){                      
//       for(let i = 0; i < rmArr.length; i++){
//         if(value == rmArr[i]){       
//           return false;
//         }
//       }            
//       return true;              
//     });
    
//     return newArr;    
// }

function destroyer(arr, ...args) {
    // Remove all the values
    //get array of values to remove            
    let newArr = arr.filter(value => {                      
      for(let i = 0; i < args.length; i++){
        if(value === args[i]){
            return false;       
        }                
      }      
      return true;
    });
    
    return newArr;    
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);