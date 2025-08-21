import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
import { TwilioConfig } from './configs';
import { Sms } from '../common/types';

@Injectable()
export class TwilioGateway {
  private client: Twilio;
  private fromNumber: string | undefined;

  constructor(private readonly twilioConfig: TwilioConfig) {
    this.fromNumber = twilioConfig.fromNumber;
    this.client = new Twilio(
      this.twilioConfig.accountSid,
      this.twilioConfig.authToken,
    );
  }

  async sendMessage(to: string, body: string) {
    const result = await this.tempWaitOneSecond(
      `1 second later sms is sent: ${body}`,
    );

    // const resultMessage = await this.client.messages.create({
    //   body: message,
    //   from: '+17622630808',
    //   // to: '+18777804236',
    //   to,
    // });

    // console.log({ message: resultMessage });

    return {
      id: '12jnads212njnoj',
      from: this.fromNumber,
      to,
      body: result,
    };
  }

  async listMessages(pageSize: number, nextPageToken?: string) {
    const messagePage = await this.client.messages.page({
      pageSize,
      pageToken: nextPageToken,
    });

    const messages: Sms[] = messagePage.instances.map((instance) => ({
      id: instance.sid,
      to: instance.to,
      body: instance.body,
      from: instance.from,
    }));

    return { messages, nextPageToken };
  }

  private tempWaitOneSecond(message: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, 1000);
    });
  }
}
