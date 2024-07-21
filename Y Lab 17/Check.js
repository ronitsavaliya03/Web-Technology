// const a=require('./Demo');
// console.log(a.display(10));

// const path=require('path');

// console.log("Normalize: "+path.normalize('/abc'));
// console.log("Join: "+path.join('/abc','/asdf'));
// console.log("Relative: "+path.relative('/abc','/asdf'));
// console.log("Resolve: "+path.resolve('/abc','/asdf'));
// console.log("DirName: "+path.dirname('/abc'));
// console.log("BaseName: "+path.basename('/abc'));
// console.log("ExtName: "+path.extname('/asdf.ac.in'));

const fs=require('fs');

// fs.exists('./Demo.js',(exists)=>{
//     console.log(exists?'Found':'Not Found');
// });

// fs.stat('Demo.js',(err,data)=>{
//     console.log(data);
// });

// fs.readFile('Demo.js',(err,data)=>{
//     console.log(data.toString());
// });

fs.writeFile('First.js','const a=10;',(err,data)=>{
    console.log("Success");
});

fs.appendFile('First.js','\nconsole.log("BYE BYE");',(err,data)=>{
    console.log("Success");
});