var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('alkjsdf');
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('exemplo: ouvindo http://%s:%s', host, port)
})
