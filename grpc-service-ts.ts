
/**
 * 使用ts写的grpc服务
 */
const PROTO_PATH = __dirname + '/protos/helloworld.proto';
const grpc = require('grpc');

const hello_proto = grpc.load(PROTO_PATH).helloworld;

interface GrpcService<T> {
	[key: string]: T
}

@service
export class Hello {
	/**
	 * Implements the SayHello RPC method.
	 */
	sayHello(call: any, callback: Function) {
		console.log(call.request)
		/** do something */
		callback(null, { message: "请求参数：" + call.request.name + ",返回值：sayHello" });
	}

	sayHello2(call: any, callback: Function) {
		console.log(call.request)
		/** do something */
		callback(null, { message: "请求参数：" + call.request.name + ",返回值：openTheDoor" });
	}

	sayHello3(call: any, callback: Function) {
		console.log(call.request)
		/** do something */
		callback(null, { message: "请求参数：" + call.request.name + ",返回值：openTheDoorx" });
	}

}

function service(constructor: Function): void {
	const Service: GrpcService<Function> = {};
	console.log(">>",typeof constructor);
	let methods = Object.keys(constructor.prototype);
	for(let method of methods){
		Service[method] = (constructor.prototype)[method];
	}
	var server = new grpc.Server();
		server.addService(hello_proto.Greeter.service, Service);
		server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
		server.start();
}

new Hello()

