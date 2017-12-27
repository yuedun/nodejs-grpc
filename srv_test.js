'use strict';

var LightRPC = require('./index.js');

var file = {test: 'testObject'};
var port = 6556;

function combine(a, b, callback){
	console.log(">>>>>>>>>>>调用combine函数", a, b)
	var c = a+b;
	callback(c)
}
var rpc = new LightRPC({
	combine: combine,
	multiply: function(t, cb){
		cb(t * 2);
	},
	getFile: function(cb){
		cb(file);
	}
});

rpc.listen(port);
