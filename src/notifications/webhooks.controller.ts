import { Body, Controller, Post } from '@nestjs/common';
import { NotificationsGateway } from './notifications.gateway';

@Controller('webhooks')
export class WebhooksController {
  constructor(private readonly notificationsGateway: NotificationsGateway) {}

  @Post('receive-sms')
  receiveSms(@Body() body: object) {
    console.log('Webhook received:', body);

    this.notificationsGateway.notifyClients(body);

    return { status: 'ok' };
  }

  @Post('send')
  sendMessage(@Body('message') message: string) {
    this.notificationsGateway.server.emit('newMessage', {
      from: 'REST',
      message,
    });

    return { status: 'sent', message };
  }
}
