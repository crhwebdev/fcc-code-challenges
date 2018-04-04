//Add Code Below

function largestOfFour(arr) {    
    let num = 0;
    let newArr = [];

    //iterate through top array and sub-array 
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            //find larget largest number
            if(arr[i][j] > num){
                num = arr[i][j];
            }
        }
        
        //add num to array and then reset it
        newArr.push(num);
        num = 0;
    }
        
    return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);