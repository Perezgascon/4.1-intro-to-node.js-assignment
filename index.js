const http = require('http');
const url = require('url');

http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    if (req.url === '/profile') {
        res.write(`This is the ${req.url} page!`);
    }
    else if (req.url === '/products') {
        res.write(`This is the ${req.url} page!`);
    }
    else if (req.url === '/cart') {
        res.write(`This is the ${req.url} page!`);
    }
    else if (req.url === '/register') {
        res.write(`This is the ${req.url} page!`);
    }

    else if (req.url === '/login') {
        res.write(`This is the ${req.url} page!`);
    }
    else if (req.url === '/') {
        res.write("Welcome to my site");
    }
    else {
        res.write(req.url);
    }

    res.end();
}).listen(8080);