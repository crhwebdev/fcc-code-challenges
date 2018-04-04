//Add Code Below
// function bouncer(arr) {
//     // Don't show a false ID to this bouncer.    
//     return arr.filter(function(value){
//       if(value) { return value; }
//     });
// }

function bouncer(arr) {
    // Don't show a false ID to this bouncer.    
    return arr.filter( value => !!value );
}

bouncer([7, "ate", "", false, 9]);