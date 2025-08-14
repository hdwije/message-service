import { Module } from '@nestjs/common';
import { SmsController } from './sms.controller';
import { SmsService } from './sms.service';
import { TwilioGateway } from './gateways';
import { TwilioConfig } from './configs';
import { SystemConfig } from '../common/configs';

@Module({
  providers: [SmsService, TwilioGateway, TwilioConfig, SystemConfig],
  controllers: [SmsController],
})
export class SmsModule {}
