import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dtos';

import { ICar } from './interfaces/car.interface';

@Injectable()
export class CarsService {
  private cars: Array<ICar> = [
    // { id: uuid(), brand: 'Toyota', model: 'Corolla' },
  ];

  getAllCars() {
    return this.cars;
  }

  getCarById(id: string) {
    const car = this.cars.find((c) => c.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  createCar(createCarDto: CreateCarDto) {
    const newCar: ICar = { ...createCarDto, id: uuid() };
    this.cars.push(newCar);

    return newCar;
  }

  updateCar(id: string, updateCarDto: UpdateCarDto) {
    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new BadRequestException(
        'The "id" param and the "id" provided in request body must be the same',
      );
    }

    const updatedCar: ICar = this.getCarById(id);

    this.cars = this.cars.map((c) =>
      c.id === updatedCar.id ? { ...updatedCar, ...updateCarDto, id } : c,
    );

    return this.getCarById(id);
  }

  deleteCar(id: string) {
    const car = this.getCarById(id);

    this.cars = this.cars.filter((c) => c.id !== id);

    return car;
  }

  fillCarsWithSeed(cars: Array<ICar>) {
    this.cars.push(...cars);
  }
}
