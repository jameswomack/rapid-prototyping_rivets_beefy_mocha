var Rivets = require('rivets');
Rivets.adapters[':'] = {
  subscribe: function(obj, keypath, callback) {
    return obj.on('change:' + keypath, callback);
  },
  unsubscribe: function(obj, keypath, callback) {
    return obj.off('change:' + keypath, callback);
  },
  read: function(obj, keypath) {
    return obj.get(keypath);
  },
  publish: function(obj, keypath, value) {
    return obj.set(keypath, value);
  }
};
module.exports = Rivets;
