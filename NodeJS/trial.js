const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url == '/') {
        fs.readFile('../UMS/MainPage.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Internal Server Error');
                res.end();
                return;
            }
            res.write(data);
            res.end();
            console.log("hhh");
        });
        return;
    } else if (req.url == '/Feedback') {
        fs.readFile('../UMS/Feedback.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Internal Server Error');
                res.end();
                return;
            }
            res.writeHead(200, 'text/html');
            res.write(data);
            res.end();
        });
    } else if (req.url == '/TimeTable') {
        fs.readFile('../UMS/TimeTable.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.write('Internal Server Error');
                res.end();
                return;
            }
            res.writeHead(200, 'text/html');
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Not Found');
        res.end();
    }
});

server.listen(7008, () => {
    console.log("Success");
});
