const {readFileSync, writeFileSync} = require('fs') // saving it dis way means we want to use just dos two methods from the fs
                                                    // module
console.log('Starting');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

writeFileSync('./content/result-sync.txt',`Here is the result: ${first} , ${second}`,{flag: 'a'}) // The flag property adds  
                                                 // the new content with the former one, if not the former content would be 
                                                // over written
console.log('Done with this task');
console.log('Starting the next one');

const Ike= readFileSync('./content/result-sync.txt','utf8')
console.log(Ike)


// DIFFERENCE BETWEEN THE SYNC AND ASYNC READ AND WRITE
// For the Sync read/write file javascript executes the code line by line, so in cases where the users of the application 
// is doing something (lke reading/writing) node js serves him first leaving others waiting 
//But in async read/write node js starts from the begining, skips the read/write function to serve others and at the same time
// get back to the read/write function 