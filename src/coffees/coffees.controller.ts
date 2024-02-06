import { Controller, Get } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('favority')
  findAll(): string {
    return 'this request is sent to the coffees controller';
  }
}
