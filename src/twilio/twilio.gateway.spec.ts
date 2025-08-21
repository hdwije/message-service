import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { TwilioGateway } from './twilio.gateway';
import { TwilioConfig } from './configs';

describe('TwilioGateway', () => {
  let gateway: TwilioGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TwilioGateway, TwilioConfig, ConfigService],
    }).compile();

    gateway = module.get<TwilioGateway>(TwilioGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
