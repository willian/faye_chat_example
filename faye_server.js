var http = require('http')
  , faye = require('faye');

var Logger = {
	incoming: function(message, callback) {
		console.log(message);
		console.log('====================');
		
		callback(message);
	}
};

var bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 60});
bayeux.addExtension(Logger);
bayeux.listen(9292);
