import { Test, TestingModule } from '@nestjs/testing';
import { SmsController } from './sms.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SmsService } from './sms.service';
import { SystemConfig } from '../common/configs';
import { TwilioConfig } from '../twilio/configs';
import { TwilioGateway } from '../twilio/twilio.gateway';

describe('SmsController', () => {
  let controller: SmsController;

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
      controllers: [SmsController],
    }).compile();

    controller = module.get<SmsController>(SmsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
