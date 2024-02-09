import { Controller, Delete, Get, Param } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get('favority')
  findAll() {
    // const { limit, offset } = paginationQuery;
    return this.coffeesService.findAll();
    // return response
    //   .status(201)
    //   .send(
    //     `this request is sent to the coffees controller with limit: ${limit} and offset: ${offset}`,
    //   );
  }

  @Get('favority/:id')
  findOne(@Param('id') id: number) {
    return this.coffeesService.findOne(id);
    // return `this action return id: ${id} coffees`;
  }

  // @Post('favority')
  // @HttpCode(HttpStatus.CREATED)
  // create(@Body() body) {
  //   return this.coffeesService.create(body);
  //   // return body;
  // }

  // @Patch('favority/:id')
  // update(@Param('id') id: number, @Body() body) {
  //   return this.coffeesService.update(id, body);
  //   // return `this action updates id: ${id} coffees`;
  // }

  @Delete('favority/:id')
  remove(@Param('id') id: number) {
    return this.coffeesService.remove(id);
    // return `this action removes id: ${id} coffees`;
  }
}
