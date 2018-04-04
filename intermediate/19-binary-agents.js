/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/
function binaryAgent(str) {
  var message = '';
  //1. break string into an array seperated by spaces
  var codeArr = str.split(' ');
  //2. use String.fromCharCode() to convert each element of the array into a letter
  for(var i = 0; i < codeArr.length; i++){
    message += String.fromCharCode(parseInt(codeArr[i], 2));
  }//end for loop

  //3. add the letter to the return value;
  return message;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
