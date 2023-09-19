import http from 'http';

import fs from 'fs';

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1> This is code with Ajay</h1> <p>Hey this the way you learn coding start from today </p>')
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> This is About Page</h1><p>this is discriptions for about page</p>');
    }
    else if (req.url == '/hello') {
        const data = fs.readFileSync('index.html')
        res.statusCode = 200;
        res.end(data.toString());
    }
    else {
        res.statusCode = 404;
        res.end('<h1> Page Not Found</h1><p>write the correct url to get information</p>')
    }

})

server.listen(port, () => {
    console.log(`server is listening in port ${port}`)
});