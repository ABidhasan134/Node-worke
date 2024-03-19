const http=require("http")
const server=http.createServer(function(req, res){
    if(req.url==='/'){
        res.write("<html><head><title></title></head></html>");
        res.write("<body><form method='post' action='/process'><input/>here</form></body>");
        res.end();
    }
    else if(req.url==='/process' && req.method==='POST')
    {
        req.on('data', (chank)=>{
            console.log(chank);
        })
        res.write("Thanks for submitting");
        res.end();
    }
    else{
        res.write("page not found");
        res.end();
    }
});
server.listen(3001);
console.log("working server");