import { Body, Controller, Get, Post } from '@nestjs/common';
import { SmsService } from './sms.service';
import { ApiTags } from '@nestjs/swagger';
import { SendSmsDto } from './dtos';

@Controller('sms')
@ApiTags('SMS')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Post('send')
  sendSms(@Body() dto: SendSmsDto) {
    return this.smsService.sendSms(dto);
  }

  @Post('receive')
  receiveSms(@Body() body: object) {
    console.log('RECEIVED BODY', body);
  }

  @Get('list')
  listMessages() {
    return this.smsService.listMessages();
  }
}
