var http = require("http");
var port = process.env.PORT || 8080;

var server = http.createServer(function(request, response) {
  
    var request = request.headers;
    console.log(request);
    var regExp = /\(([^)]+)\)/;
    var OS = regExp.exec(request['user-agent'])[1];
  
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write("<html>");
  response.write("<head>");
  response.write("<title>Hello World Page</title>");
  response.write("</head>");
  response.write("<body>");
  response.write("Your IP address is: "+request['x-forwarded-for']);
  response.write("   Your OS is: "+OS);
  response.write("   and your language is: "+ request['accept-language'].split(',')[0])
  response.write("</body>");
  response.write("</html>");
  
  response.end();
});

server.listen(port);
