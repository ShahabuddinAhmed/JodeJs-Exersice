var url = require("url");
var fs = require("fs");

function readHTNL(path, responce) {
    fs.readFile(path, null, function(error, data) {
        if(error) {
            responce.write.Head(404);
            responce.write("File not Found");
        }
        else {
            responce.write(data);
        }
    });
}

module.exports = {
    handleRequest: function(request, responce) {
        responce.writeHead(200, {'Content-Type': 'text/html' });

        var path = url.parse(request.url).pathname;
        switch(path) {
            case '/':
                renderHTML('./home.html', responce);
                break;
            case '/login':
                renderHTML('./login.html', responce);
                break;
            case '/register':
                renderHTML('./register.html', responce);
                break;
            default:
                responce.writeHead(404);
                responce.write("Route  not Found");
                responce.end();
        }
    }
}