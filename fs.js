const fs = require("fs");
fs.writeFileSync('myfilex.txt', 'Hollo programers');//creating file 
// fs.writeFileSync('myfilex.txt', 'Do not go there');//changing or replacing file items what we have created before
fs.appendFileSync('myfilex.txt', 'here is gost');//appending items iton created file
// data read from sync file
// const data= fs.readFileSync('myfilex.txt');//return buffer
// console.log(data.toString());//consoleing buffer type
// data read from async file
fs.readFileSync('myfilex.txt',(err,data)=>{
    console.log(data.toString());//consoleing
})
console.log("hello");
