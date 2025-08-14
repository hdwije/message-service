import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TwilioConfig {
  constructor(private readonly configService: ConfigService) {}

  get accountSid() {
    return this.configService.get<string>('TWILIO_ACCOUNT_SID');
  }

  get authToken() {
    return this.configService.get<string>('TWILIO_AUTH_TOKEN');
  }

  get fromNumber() {
    return this.configService.get<string>('TWILIO_FROM_NUMBER');
  }
}
