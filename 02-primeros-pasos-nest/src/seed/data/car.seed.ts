import { ICar } from 'src/cars/interfaces/car.interface';
import { v4 as uuid } from 'uuid';

export const CAR_SEED: Array<ICar> = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
  },
];
