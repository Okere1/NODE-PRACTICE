const {a,b} = require('./4-names')  // require is used when we want to import any module wheither inbuilt,external or built
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')
require('./7-mind-grenade') // You can import a module without assigning it a variable

sayHi('Promise')
sayHi(a)
sayHi(b)