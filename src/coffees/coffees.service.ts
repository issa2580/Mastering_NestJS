import { Injectable } from '@nestjs/common';
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

  //   create(createCatDto: CreateCatDto) {
  //     return this.coffees.push(createCatDto);
  //   }

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    return this.coffees.find((coffee) => coffee.id === +id);
  }

  //   update(id: number, updateCatDto: UpdateCatDto) {
  //     const existingCoffee = this.findOne(id);
  //     if (existingCoffee) {
  //       return Object.assign(existingCoffee, updateCatDto);
  //     }
  //   }

  remove(id: number) {
    const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === +id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
      return;
    }
  }
}
