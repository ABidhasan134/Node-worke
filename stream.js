const fs=require('fs');
const myStream=fs.createReadStream('./bigData.txt');//,'utf-8'
myStream.on('data',(chank)=>{
    console.log(chank.toString());
})