// filesystem module

var fs = require('fs');

fs.writeFileSync("corn.txt", "Corn is good, and corn is not life");
console.log(fs.readFileSync("corn.txt").toString());
