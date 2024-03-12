const path=require('path');
const myPath='E:/vs code c programing/Node js/setup/index.js'

// console.log(path.basename(myPath));
const osModule=require('os');
// console.log(osModule.homedir());
// console.log(osModule.platform());
// console.log(osModule.freemem());
console.log(osModule.cpus());

