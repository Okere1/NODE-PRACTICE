console.log(__dirname);
let a = setInterval(() => {           // The setInterval only works with functions, in this case an arrow function
    console.log('Promise, a full stack guy')
    
}, 1000);
setTimeout(() => {
    clearInterval(a);
    console.log('Stop') 
    
}, 5000);


const {a,b} = require('./4-names') // The imported data was sent in object form so to use it, you either save it in an
                                   // object partern or a variable but if you use a normal variable name when using it you have to 
                                  // can only get the property values via the variable e.g name.a, name .b
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') // You can import a module without assigning it a variable

sayHi('Promise')
sayHi(a)
sayHi(b)
