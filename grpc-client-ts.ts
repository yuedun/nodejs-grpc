var grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(__dirname + '/protos/helloworld.proto', {});
const hello_proto = grpc.loadPackageDefinition(packageDefinition);

interface GrpcService {
	sayHello(params: any, callback: Function): void;
	sayHello2(params: any, callback: Function): void;
	sayHello3(params: any, callback: Function): void;
}
let client: GrpcService;

function main() {
	client = new hello_proto.helloworld.Greeter('localhost:50051',
		grpc.credentials.createInsecure());

	client.sayHello({ name: "弥勒" }, function (err: Error, response: any) {
		console.log('Greeting:', response.message);
	});
	client.sayHello2({ name: "桔梗" }, function (err: Error, response: any) {
		console.log('Greeting:', response.message);
	});
	client.sayHello3({ name: "珊瑚" }, function (err: Error, response: any) {
		console.log('Greeting:', response.message);
	});
}

main();