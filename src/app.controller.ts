import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { TestDto } from './test.dto'
import { ApiBody } from '@nestjs/swagger'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Post()
  @ApiBody({ type: TestDto })
  getHello(@Body() testDto: TestDto): string {
    return this.appService.getHello();
  }
}
