import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Cappuccino',
      brand: 'Starbucks',
      flavors: ['chocolate', 'vanilla'],
    },
    {
      id: 2,
      name: 'Latte',
      brand: 'Starbucks',
      flavors: ['vanilla', 'caramel'],
    },
    {
      id: 3,
      name: 'Americano',
      brand: 'Starbucks',
      flavors: ['vanilla', 'caramel'],
    },
    {
      id: 4,
      name: 'Mocha',
      brand: 'Starbucks',
      flavors: ['vanilla', 'caramel'],
    },
    {
      id: 5,
      name: 'Macchiato',
      brand: 'Starbucks',
      flavors: ['vanilla', 'caramel'],
    },
  ];

  create(createCoffeeDto: CreateCoffeeDto) {
    return this.coffees.push(createCoffeeDto);
  }

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((coffee) => coffee.id === +id);
    if (!coffee) {
      // chose one
      throw new HttpException(`Coffee #${id} not found`, HttpStatus.NOT_FOUND);
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  update(id: number, updateCoffeeDto: UpdateCoffeeDto) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      return Object.assign(existingCoffee, updateCoffeeDto);
    }
  }

  remove(id: number) {
    const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
      return;
    }
  }
}
