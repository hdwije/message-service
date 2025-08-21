import { Injectable } from '@nestjs/common';
import { ListMessagesDto, SendMessageDto } from './dtos';
import { TwilioGateway } from '../twilio/twilio.gateway';

@Injectable()
export class SmsService {
  constructor(private readonly twilioGateway: TwilioGateway) {}

  async sendMessage(dto: SendMessageDto) {
    const { body, to } = dto;
    const message = await this.twilioGateway.sendMessage(to, body);

    return message;
  }

  async listMessages(dto: ListMessagesDto) {
    const { pageSize, nextPageToken } = dto;
    const messagesWithNextToken = await this.twilioGateway.listMessages(
      pageSize,
      nextPageToken,
    );

    return messagesWithNextToken;
  }
}
