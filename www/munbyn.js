// Empty constructor
function BTPrinter() {}

BTPrinter.isAvailable = function(successCallback, errorCallback) {
  var options = {};
  cordova.exec(successCallback, errorCallback, 'BluetoothService', 'isAvailable', [options]);
}

BTPrinter.install = function() {
  munbynPlugin = new BTPrinter();
  return munbynPlugin;
};
cordova.addConstructor(BTPrinter.install);