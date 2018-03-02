
const PROTO_PATH = __dirname + '/protos/helloworld.proto';
const grpc = require('grpc');

const hello_proto = grpc.load(PROTO_PATH).helloworld;

interface GrpcService<T> {
	[key: string]: T
}

let Service: GrpcService<string> = {};

export class Hello {

	constructor() {
		var server = new grpc.Server();
		server.addService(hello_proto.Greeter.service, Service);
		server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
		server.start();
	}

	/**
	 * Implements the SayHello RPC method.
	 */
	@service
	sayHello(call: any, callback: Function) {
		console.log(call.request)
		/** do something */
		callback(null, { message: "请求参数：" + call.request.name + ",返回值：sayHello" });
	}

	@service
	sayHello2(call: any, callback: Function) {
		console.log(call.request)
		/** do something */
		callback(null, { message: "请求参数：" + call.request.name + ",返回值：openTheDoor" });
	}

	@service
	sayHello3(call: any, callback: Function) {
		console.log(call.request)
		/** do something */
		callback(null, { message: "请求参数：" + call.request.name + ",返回值：openTheDoorx" });
	}

}

function service(target: Hello, key: string, descriptor: any): void {
	Service[key] = (<any>target)[key];
}

new Hello()

