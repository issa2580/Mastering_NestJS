import { Controller, Get, Param } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('favority')
  findAll(): string {
    return 'this request is sent to the coffees controller';
  }

  @Get('favority/:id')
  findOne(@Param('id') id: string) {
    return `this action return id: ${id} coffees`;
  }
}
