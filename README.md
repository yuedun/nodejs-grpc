Simple RPC server/client based on NodeJS native 'net' lib sockets. 

Tested with nodejs >= 0.4.2

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
		remote.combine(1, 2, function(res){
			if(res != 3){
				console.log('ERROR', res);
			}

			conn.destroy();
			conn.end();
		});
	});

先启动srv_test.js
> node srv_test.js

在启动client_test.js
> node client_test.js

即可看到client_test.js调用到了srv_test.js中的函数

 ### 基于grpc实现的远程服务

[grpc](https://github.com/grpc/grpc-node)

测试方法：
先启动grpc-service.js
> node grpc-service.js

再启动grpc-client.js
> node grpc-client.js
