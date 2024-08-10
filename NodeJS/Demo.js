function display(r){
    return Math.PI*r*r;
}

module.exports.display=display;

const fs=require('fs');

fs.exists('Check.js',(exists)=>{
    console.log(exists?'Found':'Not Found');
});