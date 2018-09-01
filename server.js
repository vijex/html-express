var express = require('express'),
    htmlDir = './html/'
var app = express();

//Log all requests
//app.use(express.logger());

//Set content directories
app.use(express.static(__dirname + "/html"));
app.use('/js',express.static(__dirname + '/assets/js'));
app.use('/css', express.static(__dirname + '/assets/css'));
app.use("/image", express.static(__dirname + '/assets/img'));



app.get('/', function(request, response) {
    response.sendfile('./html/index.html');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 