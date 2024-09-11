import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("bye")
  getBye(): string {
    return "bye Najim";
  }

  @Get("Contact")
  getContact(): string {
    return "Contact Najim: 0123456789";
  }
}
