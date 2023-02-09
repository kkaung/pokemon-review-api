import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './helpers';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  AppDataSource.initialize()
    .then(() => console.log('Connected to Database...'))
    .catch((err: Error) => console.log(err.message));

  await app.listen(3000);
}
bootstrap();
