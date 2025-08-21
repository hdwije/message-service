import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class ListMessagesDto {
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  pageSize: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  nextPageToken?: string;
}
