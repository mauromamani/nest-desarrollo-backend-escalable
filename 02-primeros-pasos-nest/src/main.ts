import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // global pipes: Se usaran los pipes especificados en todos los metodos
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ignora las propiedades no requeridas
      forbidNonWhitelisted: true, // marca un error si hay propiedades no requeridas
    }),
  );

  await app.listen(3000);
}
bootstrap();
