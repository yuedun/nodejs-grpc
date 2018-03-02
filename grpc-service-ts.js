"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PROTO_PATH = __dirname + '/protos/helloworld.proto';
var grpc = require('grpc');
var hello_proto = grpc.load(PROTO_PATH).helloworld;
var Service = {};
var Hello = /** @class */ (function () {
    function Hello() {
        var server = new grpc.Server();
        server.addService(hello_proto.Greeter.service, Service);
        server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
        server.start();
    }
    /**
     * Implements the SayHello RPC method.
     */
    Hello.prototype.sayHello = function (call, callback) {
        console.log(call.request);
        /** do something */
        callback(null, { message: "请求参数：" + call.request.name + ",返回值：sayHello" });
    };
    Hello.prototype.sayHello2 = function (call, callback) {
        console.log(call.request);
        /** do something */
        callback(null, { message: "请求参数：" + call.request.name + ",返回值：openTheDoor" });
    };
    Hello.prototype.sayHello3 = function (call, callback) {
        console.log(call.request);
        /** do something */
        callback(null, { message: "请求参数：" + call.request.name + ",返回值：openTheDoorx" });
    };
    __decorate([
        service
    ], Hello.prototype, "sayHello", null);
    __decorate([
        service
    ], Hello.prototype, "sayHello2", null);
    __decorate([
        service
    ], Hello.prototype, "sayHello3", null);
    return Hello;
}());
exports.Hello = Hello;
function service(target, key, descriptor) {
    Service[key] = target[key];
}
new Hello();
