import { Test, TestingModule } from '@nestjs/testing';
import { SmsService } from './sms.service';
import { SystemConfig } from '../common/configs';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TwilioConfig } from '../twilio/configs';
import { TwilioGateway } from '../twilio/twilio.gateway';

describe('SmsService', () => {
  let service: SmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ envFilePath: '.test.env' })],
      providers: [
        SmsService,
        SystemConfig,
        ConfigService,
        TwilioConfig,
        TwilioGateway,
      ],
    }).compile();

    service = module.get<SmsService>(SmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
