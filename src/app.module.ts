import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmsModule } from './sms/sms.module';
import { ConfigModule } from '@nestjs/config';
import { NotificationsModule } from './notifications/notifications.module';
import { TwilioModule } from './twilio/twilio.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SmsModule,
    NotificationsModule,
    TwilioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
