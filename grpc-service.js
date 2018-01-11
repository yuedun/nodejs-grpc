var PROTO_PATH = __dirname + '/protos/helloworld.proto';

var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;

/**
 * Implements the SayHello RPC method.
 */
function sayHello(call, callback) {
	console.log(call.request)
	/** do something */
	callback(null, { message: "请求参数：" + call.request.name + ",返回值：a" });
}
function openTheDoor(call, callback) {
	console.log(call.request)
	/** do something */
	callback(null, { message: "请求参数：" + call.request.name + ",返回值：b" });
}
function openTheDoorx(call, callback) {
	console.log(call.request)
	/** do something */
	callback(null, { message: "请求参数：" + call.request.name + ",返回值：b" });
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
	var server = new grpc.Server();
	server.addService(hello_proto.Greeter.service, {
		//key值需要和.proto中的rpc一致
		sayHello: sayHello,
		sayHello2: openTheDoor,
		sayHello3: openTheDoorx
	});
	server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
	server.start();
}

main();