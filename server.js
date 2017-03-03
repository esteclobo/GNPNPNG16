var express = require('express');
var appserver = express();
appserver.use(express.static('public'));

appserver.get('/', function (req, res) {
    res.send('alkjsdf');
})


var server = appserver.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log('exemplo: ouvindo http://%s:%s', host, port)
})
