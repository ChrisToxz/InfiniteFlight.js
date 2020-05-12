var dgram = require('dgram');
var net = require('net');
var _addr, _port, client;

exports.init = function (success, error) {
  try {
    var s = dgram.createSocket('udp4');
    s.on('message', function(msg, rinfo) {
      var response = JSON.parse(msg.toString());
      if (response.Addresses[1] && response.Port) {
        _addr = response.Addresses[1];
        _port = response.Port;
        console.log("Connected to Infinite Flight at " + _addr + ':' + _port);
        s.close();
        client = new net.Socket();
        success();
      }
    });
    s.bind(15000);
  } catch {
    error();
  }
}

exports.sendCmd = function (cmd, params) {
  try {
    client.connect(parseInt(_port), _addr, function() {
      var jsonStr = JSON.stringify({"Command": cmd, "Parameters": params});
      var data = new Uint8Array(jsonStr.length + 4);
      data[0] = jsonStr.length;

      for (var i = 0; i < jsonStr.length; i++) {
        data[i+4] = jsonStr.charCodeAt(i);
      }

      var buffer = Buffer.from(data);
      client.write(buffer);
    });
    return true;
  } catch {
    return false;
  }
}

exports.onMessage = function (callback) {
  client.on('data', function(chunk) {
    callback(chunk.toString());
  });
}