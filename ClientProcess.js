/**
 * Created with JetBrains WebStorm.
 * User: yuri
 * Date: 4/14/13
 * Time: 12:13 PM
 * To change this template use File | Settings | File Templates.
 */

var HOST = 'localhost';
var PORT = 8080;

var net = require('net');

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
    client.write('I am Chuck Norris!');

});

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
client.on('data', function(data) {

    console.log('DATA: ' + data);
    // Close the client socket completely
    client.destroy();

});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
});