"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const connection_1 = __importDefault(require("./src/db/config/connection"));
const server = (0, fastify_1.default)();
server.get('/home', async (request, reply) => {
    return "home";
});
server.listen(5000, (err, address) => {
    (0, connection_1.default)();
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});
