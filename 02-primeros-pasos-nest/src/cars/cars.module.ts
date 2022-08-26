import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

@Module({
  controllers: [CarsController],
  providers: [
    CarsService,
    // Este Pipe se usara solo en el modulo "cars"
    // {
    //   provide: APP_PIPE,
    //   useValue: new ValidationPipe({
    //     whitelist: true,
    //     forbidNonWhitelisted: true,
    //   }),
    // },
  ],
  exports: [CarsService],
})
export class CarsModule {}
