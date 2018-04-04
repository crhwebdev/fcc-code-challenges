//Add Code Below
function sumPrimes(num) {
    var sum = 0;
    
    
    function isPrime(n){
      if(n === 1 || n === 0)  return false;
      
      for(var i = n - 1; i > 1; i--){
        if(n % i === 0)  return false;
      }
      
      return true;
    }
    
    while(num > 0){
      console.log("testing..." + num);
      if(isPrime(num)){
        console.log(num + " is prime");
        sum += num;
      }
      
      num -= 1;
    }
    return sum;
}

sumPrimes(10);