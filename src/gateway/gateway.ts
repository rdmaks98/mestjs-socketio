import { OnModuleInit } from "@nestjs/common";
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server } from "socket.io"
@WebSocketGateway()

export class MyGateWay implements OnModuleInit {
    @WebSocketServer()
    server: Server;


    @SubscribeMessage('newMsgs')
    onNewMessage(@MessageBody() body: any) {
        console.log(body, "03943-0")
        this.server.emit('onMessage', {
            msg: "new message",
            content: body
        })
    }

    onModuleInit() {
        this.server.on("connection", (socket) => {
            console.log(socket.id, "3434")
            console.log("connected.....")
        })
    }

}