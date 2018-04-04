//Add Code Below

function convertHTML(str) {
    /* 1. use regexp to find position of special character and return special character
       2. 
    */
       
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/</g, '&lt;');  
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/\"/g, '&quot;');
    str = str.replace(/\'/g, '&apos;');
            
    //var search = /&/g;
    //str = str.replace(search, '&amp;');
    
    return str;
  }
  
  convertHTML("Dolce & Gabbana");
  