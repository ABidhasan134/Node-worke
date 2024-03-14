const http= require('http');
// for every path request start
// const server=http.createServer(function(req, res){
//     res.write("My frist server");
//     res.write("This is not my last server");
//     res.end();
// });
// server.listen(3000);
// console.log("listening on port 3000");
// end of server for every path request

// conditional server 
const server=http.createServer(function(req, res){
    if(req.url==='/'){
        res.write("My frist server");
        res.write("This is not my last server");
        res.end();
    }
    else if(req.url==='/about')
    {
        res.write("This is my home page");
        res.end();
    }
    else{
        res.write("page not found");
        res.end();
    }
});
server.listen(3000);
console.log("working server");