"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipeline_1 = require("./pipeline");
const ws_1 = require("ws");
const ws_sink_1 = require("../components/ws-sink");
const tcp_1 = require("../components/tcp");
const setting = require("../../../setting.json");
class TcpWsProxyPipeline extends pipeline_1.Pipeline {
    constructor(config = {}) {
        const wss = new ws_1.Server(config);
        wss.on('connection', (socket) => {
            const wsSink = new ws_sink_1.WSSink(socket);
            const tcpSource = new tcp_1.TcpSource();
            this.init(tcpSource, wsSink);
        });
        super();
        if(setting.cloudvideo){
            this.registerSocket();
        }
        // Expose WebSocket Server for external use
        this.wss = wss;
    }
    registerSocket() {
        console.log("######################register socket to socket bridge############################");
        const socket = new ws_1(setting.register?setting.register:"ws://icloud.huayuan-iot.com:9999");
        socket.on('message', (msg) => {
            if(msg.substr(0,3)=="new"){
                this.newConnection(msg);
            }
        });
        socket.on("error", (err)=> {
            console.log("socket error:", err)
        });
        socket.on("close", (err) => {
            console.log("socket close:", err);
            setTimeout(() => {
                this.registerSocket();
            }, setting.reconnectPeroid?setting.reconnectPeroid:5000)
        })
    }
    newConnection(id) {
        const sock = new ws_1(setting.data?setting.data:"ws://icloud.huayuan-iot.com:9991", id);
        sock.on("open", () => {
            const wsSink = new ws_sink_1.WSSink(sock);
            const tcpSource = new tcp_1.TcpSource();
            this.init(tcpSource, wsSink);
        })
    }
}
exports.TcpWsProxyPipeline = TcpWsProxyPipeline;
//# sourceMappingURL=tcp-ws-proxy-pipeline.js.map