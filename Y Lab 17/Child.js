const childProcess =require('child_process');
childProcess.exec('Demo.js',(err,stdout,stdin)=>{
    console.log(stdout);
    console.log("Success");
});