import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SystemConfig {
  constructor(private readonly configService: ConfigService) {}
}
