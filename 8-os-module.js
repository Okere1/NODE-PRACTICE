const os = require('os')
const user = os.userInfo()

// Info about current user
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);  // The Uptime method returns the number to seconds the sy
                                                             // has run fro


const currrentOS = {
    name: os.type(),  // its an os method that returns the name of the system
    release: os.release(), // An os method that returns the version of the os
    totalMem: os.totalmem(), // An os method that returns the total memory of the system
    freeMem: os.freemem(),  // An os methos that returns the free memory of the system
}

console.log(currrentOS)
