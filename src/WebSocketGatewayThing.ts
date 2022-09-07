import {
  WebSocketGateway,
  OnGatewayConnection,
  OnGatewayInit,
  OnGatewayDisconnect,
  WebSocketServer,
} from '@nestjs/websockets';

import { Server, Socket } from 'socket.io';

@WebSocketGateway({ namespace: /^\/tenant-[a-zA-Z0-9]+$/ })
export class WebSocketGatewayThing
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  afterInit(server: any) {
    console.log('After INIT');
  }
  handleDisconnect(client: any) {
    console.log("After disconnect.... oh it's gone forever.");
  }
  handleConnection(client: Socket, ...args: any[]) {
    console.log('YOU MADE IT TO THE HANDLECONNECTION FUNC!');
  }
}
