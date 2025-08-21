import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SendMessageDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  to: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  body: string;
}
