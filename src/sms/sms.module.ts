import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SmsController } from './sms.controller';
import { SmsService } from './sms.service';
import { TwilioConfig } from '../twilio/configs';
import { TwilioGateway } from '../twilio/twilio.gateway';
import { SystemConfig } from '../common/configs';

@Module({
  providers: [
    SmsService,
    TwilioConfig,
    TwilioGateway,
    ConfigService,
    SystemConfig,
  ],
  controllers: [SmsController],
})
export class SmsModule {}
