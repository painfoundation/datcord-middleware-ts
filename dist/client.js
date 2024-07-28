"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.API_domain = void 0;
const socket_io_client_1 = require("socket.io-client");
exports.API_domain = "https://crab-smiling-bonefish.ngrok-free.app/";
class Client {
    login(token) {
        return new Promise((resolve, reject) => {
        });
    }
    ;
}
exports.Client = Client;
Client.socket = (0, socket_io_client_1.io)(exports.API_domain);
;
//# sourceMappingURL=client.js.map