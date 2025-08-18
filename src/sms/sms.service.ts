import { Injectable, NotFoundException } from '@nestjs/common';
import { Gateway } from './interfaces';
import { SystemConfig } from '../common/configs';
import { GATEWAY } from '../common/enums';
import { TwilioGateway } from './gateways';
import { SendSmsDto } from './dtos';

@Injectable()
export class SmsService {
  private gateway: Gateway;

  constructor(
    private readonly systemConfig: SystemConfig,
    private readonly twilioGateway: TwilioGateway,
  ) {
    switch (this.systemConfig.gateway as GATEWAY) {
      case GATEWAY.TWILIO:
        this.gateway = twilioGateway;
        break;

      default:
        throw new NotFoundException('Environment gateway is not found');
    }
  }

  async sendSms(dto: SendSmsDto) {
    const { message, to } = dto;
    const sentMessage = await this.gateway.sendSms(to, message);

    return sentMessage;
  }

  async listMessages() {
    const messages = await this.gateway.listMessages();

    return messages;
  }
}
