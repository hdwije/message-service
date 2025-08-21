import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SmsService } from './sms.service';
import { ApiTags } from '@nestjs/swagger';
import { ListMessagesDto, SendMessageDto } from './dtos';

@Controller('sms')
@ApiTags('SMS')
export class SmsController {
  constructor(private readonly smsService: SmsService) {}

  @Post('send')
  sendMessage(@Body() dto: SendMessageDto) {
    return this.smsService.sendMessage(dto);
  }

  @Post('receive')
  receiveSms(@Body() body: object) {
    console.log('RECEIVED BODY', body);
  }

  @Get('list')
  listMessages(@Query() dto: ListMessagesDto) {
    return this.smsService.listMessages(dto);
  }
}
