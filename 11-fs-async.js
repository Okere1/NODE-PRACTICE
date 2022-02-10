const {readFile, writeFile} = require('fs')

console.log('Starting');

readFile('./content/first.txt','utf8',(err,result)=>{ // Note that the err and result are arguement, der names can be changed to anything you want
    if(err){                                        // (err,result) is the call back funtion, to check for err and if none read and display the file
        return console.log('Error Observed');
    }
    const first  = result
    
readFile('./content/second.txt', 'utf8' , (err,result)=>{ //Here result holds what was read from the second.txt file
if(err){
    return console.log('Error Observed');
}
const second = result

writeFile('./content/result-async.txt', `The result is : ${first} and ${second}`, (err,result)=>{ // Here result holds
    if(err){                                                       // what have been written to the result-async.txt file
        return console.log('Error Observed');
    }
    console.log('Done with this task');
})
})
})
console.log('Starting the next one');