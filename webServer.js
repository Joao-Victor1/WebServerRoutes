const http = require('http');
const url = require('url');
var fs = require('fs');

function readFile(response, file){
    fs.readFile(file, function(err, data){
        response.end(data);
    })
}

var callback = function(request, response){
    
    response.writeHead(200, {"content-type": "text/plain; charset=utf-8"});
    var parts = url.parse(request.url);

    if(parts.path == '/'){
        response.end("Site principal");

    }else if(parts.path == '/rota1'){

        response.writeHead(200, {"content-type": "application/json; charset=utf-8"});
        response.end("Rota1");


    }else if(parts.path == '/rota2'){
        response.end("Site da rota 2");

    }else if(parts.path == '/rota1/cadastro'){

        response.writeHead(200, {"content-type": "application/json; charset=utf-8"});
        readFile(response, 'cadastro.json');

    }else if(parts.path == '/rota1/catalogo'){

        response.writeHead(200, {"content-type": "application/json; charset=utf-8"});
        readFile(response, 'catalogo.json');

    }else if(parts.path == '/rota1/dados'){

        response.writeHead(200, {"content-type": "application/json; charset=utf-8"});
        readFile(response, 'dados.json');

    }else if(parts.path == '/rota1/html'){

        response.writeHead(200, {"content-type": "text/html; charset=utf-8"});
        readFile(response, 'teste.html');

    }
};

var server = http.createServer(callback);

server.listen(30);

console.log("Servidor iniciado em http://localhost:30")