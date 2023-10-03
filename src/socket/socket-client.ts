import { Injectable, OnModuleInit } from "@nestjs/common";
import { io, Socket } from "socket.io-client";

@Injectable()
export class SocketClient implements OnModuleInit {
    public socketClient: Socket;

    constructor() {
        this.socketClient = io("http://localhost:2020");
    }

    onModuleInit() {
        this.registerConsumerEvents();
    }

    private registerConsumerEvents() {
        this.socketClient.emit("newMsgs", { msg: "hiii frineds" });
        this.socketClient.on("connect", () => {
            console.log("connect gatewayx")
        });
        this.socketClient.on("onMessage", (payload: any) => {
            console.log(payload, "23432423");
        })
    }
}