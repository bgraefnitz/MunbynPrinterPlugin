var exec = require('cordova/exec');

var BTPrinter = {
   isAvailable: function(fnSuccess, fnError){
      exec(fnSuccess, fnError, "BluetoothService", "isAvailable", []);
   }
};

module.exports = BTPrinter;