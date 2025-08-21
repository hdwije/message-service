import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TwilioGateway } from './twilio.gateway';
import { TwilioConfig } from './configs';

@Module({
  providers: [TwilioGateway, ConfigService, TwilioConfig],
})
export class TwilioModule {}
