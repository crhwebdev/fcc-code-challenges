//Add Code Below
function pairElement(str) {
    /*
    1. go through string one character at a time
    2. if a character is in the rules array, return it and its partner in an array and then push to return array
    */
    var rules = [['G', 'C'], ['A', 'T']],
        parings = [],
        pair = [],
        current,
        pos = -1;    
    //loop through string
    for(var si = 0; si < str.length; si++){
      //loop through rules
      current = str[si];
      for(var ri = 0; ri < rules.length; ri++){
        //get index of current in rules sub-arry.  If it is not 0 or 1,
        // it was not found in that sub-array
        pos = rules[ri].indexOf(current);
        if(pos === 0){
          pair.push(current);
          pair.push(rules[ri][1]);
          parings.push(pair);
          pair = [];
          break;
        }
        else if(pos === 1){
          pair.push(current);
          pair.push(rules[ri][0]);
          parings.push(pair);
          pair = [];
          break;
        }              
      }//end of ri for loop
    }//end of si for loop        
    return parings;
}

pairElement("GCG");