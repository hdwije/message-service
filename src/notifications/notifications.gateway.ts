import {
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: { origin: '*' } })
export class NotificationsGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  notifyClients(data: object) {
    this.server.emit('newMessage', data);
  }

  handleConnection(client: Socket) {
    client.emit('testConnection', { test: 'hello from server' });
  }

  @SubscribeMessage('sendMessage')
  handleSendMessage(@MessageBody() data: object): void {
    this.server.emit('newMessage', { from: 'server', data });
  }
}
