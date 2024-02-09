import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
  Res,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('favority')
  findAll(@Res() response, @Query() paginationQuery) {
    const { limit, offset } = paginationQuery;
    return response
      .status(201)
      .send(
        `this request is sent to the coffees controller with limit: ${limit} and offset: ${offset}`,
      );
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

  @Patch('favority/:id')
  update(@Param('id') id: string, @Body() body) {
    return `this action updates id: ${id} coffees`;
  }

  @Delete('favority/:id')
  remove(@Param('id') id: string) {
    return `this action removes id: ${id} coffees`;
  }
}
