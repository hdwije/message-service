import { Module } from '@nestjs/common';
import { WebhooksController } from './webhooks.controller';
import { NotificationsGateway } from './notifications.gateway';

@Module({
  providers: [NotificationsGateway],
  controllers: [WebhooksController],
})
export class NotificationsModule {}
