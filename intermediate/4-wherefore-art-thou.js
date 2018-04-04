//Add Code Below
function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
    //1. iterate through array and examine each object
    var add = false;
    for(var i = 0; i < collection.length; i++){
      //2. iterate through the object and compare values for keys in source with keys in object
      for(var ckey in collection[i]){
          if(collection[i].hasOwnProperty(ckey)){
            //if keys match, then push that object to arr
            for(var skey in source){
              if(source.hasOwnProperty(skey)){
                if(skey === ckey && source[skey] === collection[i][ckey]){
                  add = true;
                }
                else{
                  add = false;
                }
              } //end if
            }//end for
            if(add){
              arr.push(collection[i]);
              add = false;
            }//end if
          }//end if
      }//end for
  
    }//end for
    // Only change code above this line
    return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });