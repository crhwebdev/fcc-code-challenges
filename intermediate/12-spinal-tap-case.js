//Add Code Below
function spinalCase(str) {
    /*
    1. find position of either lowerUpper or space and re
    2. convert entire string to lower case
    */
    
    function strMatch(match, offset){
      if(offset === 0) return match;
      if(match === ' ' || match === '_' || match === '--') return '-';    
      return '-' + match;
    }
    
    str = str.replace(/[ ]|[_]|\B[A-Z]/g, strMatch);
    
    //to remove the freaking extra dashes from above because I 
    // have no idea how to do a regex that will only take a Capital letter without
    // a preceding dash.
    str = str.replace(/--/g, strMatch);
    
    return str.toLowerCase();
}

spinalCase('The_Andy_Griffith_Show');
//spinalCase('thisIsSpinalTap');
//spinalCase('This Is Spinal Tap');