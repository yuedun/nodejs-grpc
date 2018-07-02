var PROTO_PATH = __dirname + '/protos/helloworld.proto';
var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;
var client;
function main() {
    client = new hello_proto.Greeter('localhost:50051', grpc.credentials.createInsecure());
    client.sayHello({ name: "弥勒" }, function (err, response) {
        console.log('Greeting:', response.message);
    });
    client.sayHello2({ name: "桔梗" }, function (err, response) {
        console.log('Greeting:', response.message);
    });
    client.sayHello3({ name: "珊瑚" }, function (err, response) {
        console.log('Greeting:', response.message);
    });
}
main();
