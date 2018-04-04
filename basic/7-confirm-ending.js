//Add Code Below
// function confirmEnding(str, target) {    
//     //get position where target would start if at end of string
//     let startPos = str.length - target.length;
//     //get end of str back length of target using string.substring();
//     let strCompare = str.substring(startPos);
//     //if both strings match than return true!  else return false
//     return target === strCompare;
// }

function confirmEnding(str, target) {    
    //get position where target would start if at end of string
    let targetStartPos = str.length - target.length;
    //get end of str back length of target using string.substring();
    let strFromTargetStartPos = str.substring(targetStartPos);
    //if both strings match than return true!  else return false
    return target === strFromTargetStartPos;
}

confirmEnding("Bastian", "n");