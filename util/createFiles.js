var fs = require('fs');
var args = process.argv;  //starts at index 2
var seqEnd,
    seqStart;
var seqRange;
var fileName = '';
var file;


//If three is just one argument
if(args.length < 3){
  console.log('!Need at least one argument! type createFiles.js -help for more info.');
  return 0;
}

fileName = args[2];

if(args.length === 3){
  if(fileName.toLowerCase() === '-help'){
    console.log('use: createFiles.js [filePrefix] [range]');
    console.log('where: [filePrefix] is any name and [range] is either a singel integer or integer-integer.  A single integer will return 1-integer');
    return 0;
  }

  file = fileName + '.js';
  fs.writeFile(file, '//Add Code Below', (err) => {
    if(err) throw err;
  });
}
else if(args.length > 3){
  //test for range with -
  seqRange = args[3].split('-');
  if(seqRange.length > 1){
    seqStart = parseInt(seqRange[0]);
    seqEnd = parseInt(seqRange[1]);
  }
  else{
    seqStart = 1;
    seqEnd = parseInt(args[3]);
  }

  //console.log(seqStart + " - " + seqEnd);

  for(var i = seqStart; i <=seqEnd; i++){
    file = i + fileName + '.js';
    fs.writeFile(file, '//Add Code Below', (err) => {
      if(err) throw err;
    });
  }
}
