const path = require('path')
console.log(path.sep);

const filepath = path.join('/content', 'subfolder', 'test.txt') // Join method is used to join paths
console.log(filepath);

const base = path.basename(filepath) // basename shows the name of the last or unit file in the path
console.log(base);

const absolute = path.resolve(__dirname,'content','subfolder','text.txt') // resolve uses the __dirname property to show
                                                                          // the absolute path on the system
console.log(absolute);



