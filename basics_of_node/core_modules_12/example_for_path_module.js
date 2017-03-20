var path = require('path');
var folderPath = '/home/devstack/Desktop/learn_node/basics_one.js'

console.log(path.normalize(folderPath));
console.log(path.dirname(folderPath));
console.log(path.basename(folderPath));
console.log(path.extname(folderPath));

console.log(__dirname);
console.log(__filename);

