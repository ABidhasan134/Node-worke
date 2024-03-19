const fs = require("fs");
const myReadStream = fs.createReadStream("./bigData.txt"); //,'utf-8' 
const myWrigthStream = fs.createWriteStream("./output.txt"); //,'utf-8' 
myReadStream.on("data", (chank) => {
  myWrigthStream.write(chank);
});
