
/**
 * 使用ts写的grpc服务
 */
const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(__dirname + '/protos/helloworld.proto', {});
const hello_proto = grpc.loadPackageDefinition(packageDefinition);

// const PROTO_PATH = __dirname + '/protos/helloworld.proto';
// const hello_proto = grpc.load(PROTO_PATH).helloworld;//grpc.load: Use the @grpc/proto-loader module with grpc.loadPackageDefinition instead

@service
export class Hello {
	/**
	 * Implements the SayHello RPC method.
	 */
	public sayHello(call: any, callback: Function) {
		console.log(call.request)
		/** do something */
		callback(null, { message: "请求参数：" + call.request.name + ",返回值：sayHello" });
	}

	public sayHello2(call: any, callback: Function) {
		console.log(call.request)
		/** do something */
		callback(null, { message: "请求参数：" + call.request.name + ",返回值：openTheDoor" });
	}

	public sayHello3(call: any, callback: Function) {
		console.log(call.request)
		/** do something */
		callback(null, { message: "请求参数：" + call.request.name + ",返回值：openTheDoorx" });
	}

}
interface GrpcService<T> {
	[key: string]: T
}
function service(constructor: Function): void {
	const Service: GrpcService<Function> = {};
	let methods = Object.keys(constructor.prototype);
	for (let method of methods) {
		Service[method] = (constructor.prototype)[method];
	}
	var server = new grpc.Server();
	server.addService(hello_proto.helloworld.Greeter.service, Service);
	server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
	server.start();
	console.log("服务已启动");
}

new Hello()

