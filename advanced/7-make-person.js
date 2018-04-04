/*
Fill in the object constructor with the following methods below:

getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)
Run the tests to see the expected output for each method.

The methods that take an argument must accept only one argument and it has to be a string.

These methods must be the only available means of interacting with the object.
*/
var Person = function(firstAndLast) {

    var fullName = splitName(firstAndLast);

    this.getFirstName = function(){
      return fullName[0];
    };
    this.getLastName = function(){
      return fullName[1];
    };
    this.getFullName = function(){
        return fullName.join(' ');
    };

    this.setFirstName = function(first){
      fullName[0] = first;
    };
    this.setLastName = function(last){
      fullName[1] = last;
    };
    this.setFullName = function(firstAndLast){
      fullName = splitName(firstAndLast);
    };

    function splitName(name){
      var result = [];
      //get index of first space and split name in half, then push to array
      var pos = name.indexOf(' ');
      result.push(name.slice(0, pos));
      result.push(name.slice(pos +1));

      return result;
    }

};

var bob = new Person('Bob Ross');
bob.getFullName();
