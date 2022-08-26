import { NotFoundException, Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandsService {
  private brands: Array<Brand> = [
    // { id: uuid(), name: 'Toyota', createdAt: new Date().getTime() },
  ];

  create(createBrandDto: CreateBrandDto) {
    const newBrand: Brand = {
      id: uuid(),
      createdAt: new Date().getTime(),
      ...createBrandDto,
    };

    this.brands.push(newBrand);

    return newBrand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find((b) => b.id === id);

    if (!brand) {
      throw new NotFoundException(`Brand with id ${id} not found`);
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brand = this.findOne(id);

    this.brands = this.brands.map((b) =>
      b.id === id ? { ...b, ...updateBrandDto } : b,
    );

    brand = { ...brand, ...updateBrandDto };

    return brand;
  }

  remove(id: string) {
    const brand = this.findOne(id);

    this.brands = this.brands.filter((b) => b.id !== id);

    return brand;
  }

  fillBrandsWithSeed(brands: Array<Brand>) {
    this.brands.push(...brands);
  }
}
