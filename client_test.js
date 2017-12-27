'use strict';

var rpc = require('./index.js');

rpc.connect(6556, 'localhost', function(remote, conn){
	remote.combine(1, 2, function(res){
		console.log(res)
		remote.getFile(function(res2){
			console.log(res2);
			conn.destroy();
			conn.end();
		});
	});
});
