var express = require("express");
var app = express();
// send a message for the root path 
// localhost:3000
app.get('/', function(req, res){
    res.send('hello world');
});
// send a message for the path 
// localhost:3000/pasta
// send a message for the path /pasta:
app.get('/pasta', function(req, res){
    res.send('hello pasta sauce');
});
// start Node app on port 3000 
app.listen(3000);
