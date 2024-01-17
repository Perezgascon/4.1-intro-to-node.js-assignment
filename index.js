const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;

    if (pathname === '/profile' || pathname === '/cart' || pathname === '/register' || pathname === '/login') {
        res.write(`This is the ${pathname} page!`);
    } else if (pathname === '/products') {
        res.write(`This is the ${pathname} page!`);
        
        if (query && query.search) {
            const searchKeywords = ['Milk', 'Eggs', 'Cheese', 'Pork', 'Shrimp', 'Chicken'];
            const searchTerm = query.search.toLowerCase(); 
        
            const foundKeyword = searchKeywords.find(keyword => keyword.toLowerCase() === searchTerm);
        
            if (foundKeyword) {
                res.write(` Product "${foundKeyword}" found.`);
            } else {
                res.write(` Product "${searchTerm}" not found.`);
            }
        } else {
            res.write(' Search parameter is missing.');
        }
    } else if (pathname === '/') {
        res.write("Welcome to my site");
    } else {
        res.write(pathname);
    }

    res.end();
});

server.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});
