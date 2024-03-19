const http=require('http');
const fs =require('fs');

const server=http.createServer((req,res)=>{
    //if we don't add utf-8 than we have to use to string in output
    const myReadStream=fs.createReadStream(`${__dirname}/bigData.txt`,'utf-8');
    //path should be correctly as like as we give here
    myReadStream.pipe(res);

})
server.listen(3002);
console.log('listening on ');