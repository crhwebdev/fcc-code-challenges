//Add Code Below

// function reverseString(str) {
//     var arry = str.split('');
//     arry = arry.reverse();  
//     str = arry.join('');

//     return str;
// }
  
function reverseString(str) {
    let arr = str.split('');    
    let temp;
    let mid = (arr.length / 2) | 0;
    for(let i = 0; i < mid; i++){    
        //o    
        temp = arr[arr.length - i - 1]  
        //h    
        arr[arr.length - i - 1] = arr[i];
        //o
        arr[i] = temp;        
    }

    return arr.join('');
}

reverseString("hello");