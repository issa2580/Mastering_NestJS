import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('favority')
  findAll(@Res() response) {
    return response
      .status(201)
      .send('this request is sent to the coffees controller');
  }

  @Get('favority/:id')
  findOne(@Param('id') id: string) {
    return `this action return id: ${id} coffees`;
  }

  @Post('favority')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() body) {
    return body;
  }
}
