
var fs = require('fs'),
    spawn = require('child_process').spawn,
    clientout = fs.openSync('./clientout.log', 'a'),
    clienterr = fs.openSync('./clientout.log', 'a'),
    serverout = fs.openSync('./serverout.log', 'a'),
    servererr = fs.openSync('./serverout.log', 'a');


var server = spawn('node',['ServerProcess.js'], {
    detached: true,
    stdio: [ 'ignore', serverout, servererr ]
});

server.unref();

setTimeout(function(){
    var client = spawn('node',['ClientProcess.js'], {
        detached: true,
        stdio: [ 'ignore', clientout, clienterr ]
    });

    client.unref();
},2000);

