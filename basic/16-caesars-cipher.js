//Add Code Below
function rot13(str) { // LBH QVQ VG!  
    //convert string to uppercase just to be safe
    str = str.toUpperCase(); 
    const aChar = 65; //not real value 
    const zChar = 90; //not real value
    const shift = 13;    
    let newStr = "";         
      for(let i = 0; i < str.length; i++){        
        //1.convert value at index i to utf-16 code 
        let nTest = str.charCodeAt(i);        
        //Test to see if it is character
        if(nTest >= aChar && nTest <= zChar){          
          //get offset between converted character and 
          //last letter in sequence
          let charOffset = zChar - nTest;        
          //if offset is less than the shift value, 
          //it means that new letter will start at beginning of range
          if(charOffset < shift){
            //shift letter appropriately from start of range  
            nTest = aChar + (shift - charOffset) - 1; 
          }
          else{
            nTest += shift; //shift letter 
          }
          //create new string with shifted value converted 
          //back to character
          newStr += String.fromCharCode(nTest);          
        }
        //if the character is not a letter, 
        //then just add it to string as is        
        else{ 
          newStr += str[i];  
        }                
     }            
    //convert array back to string and return
    // console.log(str + ": " + newStr);    
    return newStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");