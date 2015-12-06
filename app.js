/**********************************************************************************************
* Simple zero mq pub/sub server.
***********************************************************************************************/

'use strict';

//Create publish socket and bind to specific port of server.
var zmq = require('zmq');
var sock = zmq.socket('pub');
sock.bindSync('tcp://127.0.0.1:3000');
console.log('Publisher bound to port 3000');

// Send JSON object with topic named kitty
setInterval(function(){
  console.log('sending a kiity message');
  sock.send(['kitty', JSON.stringify({name: 'Kitty', sing: 'meaw!'})]);
}, 1000);

// Send JSON object with topic named kitty
setInterval(function(){
  console.log('sending a tom message');
  sock.send(['tom', JSON.stringify({name: 'Tom', sing: 'meawwww!'})]);
}, 1000);
