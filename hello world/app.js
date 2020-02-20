
//para poder crear paginas
const http = require('http');


// host:loopback address
const hostname = '127.0.0.1';


//node.js default port
const port = 3000;
//() <- es para cuando una persona se conecta al servidor le dice que debe enviar
// es conocida como funcion anonima solo se pueden usar una vez
// req -> request
//res -> result
const server = http.createServer((req, res) => {
            // 200 indica que todo ok
    res.statusCode = 200;
   
    res.setHeader('Content-Type', 'text/plain');

    res.end('Hello World!');

});

server.listen(port, hostname, () => {
    console.log(`Server running at http//${hostname}:${port}`);
});







