const http = require('http')

const dataControl = () => {
    resp.writable("Hellow this is sajal singh");
    resp.end();
}

http.createServer ((dataControl) => {}).listen(4500);

