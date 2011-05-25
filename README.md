Simple RPC server/client based on NodeJS native 'net' lib sockets. 

Sample server looks like:

	var light_rpc = require('./index.js');
	var port = 5556;

	var rpc = new light_rpc({
		combine: function(a, b, callback){
			callback(a + b);
		},
		multiply: function(t, cb){
			cb(t*2);
		}
	});
	rpc.listen(port);


Sample client:

	rpc.connect(5556, 'localhost', function(remote, conn){
	var port = 5556;

	var rpc = new light_rpc({
		remote.combine(1, 2, function(res){
			if(res != 3){
				console.log('ERROR', res);
			}

			conn.destroy();
			conn.end();
		});
	});