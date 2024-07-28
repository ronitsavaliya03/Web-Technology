const http=require('http');
const fs=require('fs');
const url=require('url');

const server=http.createServer((req,res)=>{
	const url=req.url;
    res.setHeader('Content-Type','text/html');

    if(url=='/'){
        fs.readFile('./lab12-1.html',(err,data)=>{
            res.writeHead(200,'text/html');
            res.write(data);
            res.end();
        });
    }
    else if(url=='/Demo'){
        fs.readFile('./lab8-2.html',(err,data)=>{
            res.writeHead(200,'text/html');
            res.write(data);
            res.end();
        });
    }
    else if(url=='/UMS'){
        fs.readFile('./UMS/MainPage.html',(err,data)=>{
            res.writeHead(200,'text/html');
            res.write(data);
            res.end();
        });
    }
    // else if(url.includes("/UMS")){
    //     fs.readFile('./UMS/MainPage.html',(err,data)=>{
    //         res.writeHead(200,'text/html');
    //         res.write(data);
    //         res.end();
    //     });
    // }
});

server.listen(7008,()=>{
    console.log("Success");
});
