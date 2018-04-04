// function convertToRoman(num) {
//     //takes number and returns an array with number broken into places.
//     // ex. 1989 = [1000, 900, 80, 9]
//     function convertNumToPlaces(num){
//       var numArr = [];
//       var divisor = 10;
//       var place = num;  
//       var remainder = 0;  
//       while(place > 0){
//         if(place < 10){ 
//           numArr.push(place);
//           place = 0;
//         }
//         else{
//           remainder = place % divisor;
//           place = place - remainder;
//           numArr.push(remainder);     
//         }
//         divisor *= 10;
//       }  
//       return numArr.sort(function(a, b){ return a < b; });
//     }  //end of convertNumToPlaces  
//     function multiply(item, times){
//        var result = "";
//        for(var i = 0; i < times; i++){       
//          result += item;         
//        } //end for     
//        return result;
//     }    
//     //function that converts number divisiable by 10 into a roman numeral
//     function convertToRoman(number){    
//       var decimalToRoman = {1000: 'M', 500: 'D', 100: 'C', 50: 'L', 10: 'X', 5: 'V', 1: 'I'};
//       var testArr = [1000, 500, 100, 50, 10, 5, 1];
//       var numeralIndex = 1;
//       var result = "";
//       var test = 0;
//       var times = 0;    
//       //corner case of number over 4,000 or more
//       if(number >= 4000){ return result += multiply('M', number / 1000); }    
//       for(var i = 0; i < testArr.length; i++){      
//         numeralIndex = testArr[i];      
//         test = number % numeralIndex;
//         //if number is evenly divisable by one of the roman numeral places
//         if(test === 0){
//           //now get how many times we can divide into it
//           times = number / numeralIndex;                
//           if(times > 3){
//             //times is greater than 3 and we can not have 3 symbols in a row...
//             result += multiply(decimalToRoman[i === testArr.length - 1 ? 1 : testArr[i]], times - 3);
//             result += multiply(decimalToRoman[testArr[i-1]], 1);                   
//             return result;
//           }        
//           else{                       
//             result += multiply(decimalToRoman[numeralIndex], times); 
//             return result;          
//           }  //end of if        
//         }
//         else if(test > 0){
//           if(test !== number){
//             times = (number - test)/ numeralIndex;          
//             if(number % 9 === 0){ //special case for 9s.. sigh
//               var tempIndex = i === testArr.length - 1 ? 1 : testArr[i+1];
//               result += multiply(decimalToRoman[tempIndex], 1);                         
//               tempIndex = i === 0 ? 0 : testArr[i-1];
//               result += multiply(decimalToRoman[tempIndex], 1);                     
//               return result;
//             }
//             else{
//               result += multiply(decimalToRoman[numeralIndex], times);  
//             }                  
//             number = test;
//           }                        
//         }//end of if        
//       } //end of for loop     
//       return result;
//     } //end of convertToRoman function  
//     //1. Break number down into decimal places  1984  = 1000 900 80 4 
//     var numPlaces = convertNumToPlaces(num);
//     console.log(numPlaces.join(", "));
//     var result = "";  
//     //2. Convert each of these numbers into a roman numberal
//     for(var i = 0; i < numPlaces.length; i++){    
//       result += convertToRoman(numPlaces[i]);    
//     }//end of for loop    
//     return result;    
// } //end of func

// //console.log("19675: " + convertToRoman(19675)); //XC
// convertToRoman(36);

function Level(i, v, x) {
    this.i = i;
    this.v = v;
    this.x = x
}

levels = [];
levels[0] = new Level('I','V','X');
levels[1] = new Level('X','L','C');
levels[2] = new Level('C','D','M');

function calcDigit(d, l) {
    if (l > 2) {
        var str = '';
        for (var m = 1; m <= d * Math.pow(10, l - 3); m++)
            str += 'M';
        return str
    } else if (d == 1)
        return levels[l].i;
    else if (d == 2)
        return levels[l].i + levels[l].i;
    else if (d == 3)
        return levels[l].i + levels[l].i + levels[l].i;
    else if (d == 4)
        return levels[l].i + levels[l].v;
    else if (d == 5)
        return levels[l].v;
    else if (d == 6)
        return levels[l].v + levels[l].i;
    else if (d == 7)
        return levels[l].v + levels[l].i + levels[l].i;
    else if (d == 8)
        return levels[l].v + levels[l].i + levels[l].i + levels[l].i;
    else if (d == 9)
        return levels[l].i + levels[l].x;
    else
        return ''
}

function convertToRoman(num) {
  var r = '';
  var sNum = num.toString();
  for (var c = 0; c < sNum.length; c++){
      r += calcDigit(eval(sNum.charAt(c)), sNum.length - c - 1);
  }
  return r;
}

convertToRoman(36);
