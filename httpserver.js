import http from 'http';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is code with Ajay</h1> <p>Hey this the way you learn coding start from today </p>')

})

server.listen(port, () => {
    console.log(`server is listening in port ${port}`)
});