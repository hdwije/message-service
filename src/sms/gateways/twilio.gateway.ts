import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
import { TwilioConfig } from '../configs';
import { Gateway } from '../interfaces';

@Injectable()
export class TwilioGateway implements Gateway {
  private client: Twilio;
  private fromNumber: string | undefined;

  constructor(private readonly twilioConfig: TwilioConfig) {
    this.fromNumber = twilioConfig.fromNumber;
    this.client = new Twilio(
      this.twilioConfig.accountSid,
      this.twilioConfig.authToken,
    );
  }

  async sendSms(to: string, message: string) {
    console.log('to number', to);
    console.log('message', message);

    const result = await this.tempWaitOneSecond('1 second later sms is sent');

    // const resultMessage = await this.client.messages.create({
    //   body: message,
    //   from: '+17622630808',
    //   // to: '+18777804236',
    //   to,
    // });

    // console.log({ message: resultMessage });

    return { result };
  }

  tempWaitOneSecond(message: string): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(message);
      }, 1000);
    });
  }
}
