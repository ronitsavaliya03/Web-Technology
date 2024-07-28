const http=require('http');

const server=http.createServer((req,res)=>{
	res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end("Ronit Savaliya");
});

server.listen(7008,()=>{
    console.log("Success");
});
