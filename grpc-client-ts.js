"use strict";
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
var packageDefinition = protoLoader.loadSync(__dirname + '/protos/helloworld.proto', {});
var hello_proto = grpc.loadPackageDefinition(packageDefinition);
var client;
function main() {
    client = new hello_proto.helloworld.Greeter('localhost:50051', grpc.credentials.createInsecure());
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
