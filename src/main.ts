import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppDataSource } from './helpers';
import chalk from 'chalk';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(chalk.blue('Hello world!'));

  AppDataSource.initialize()
    .then(() => console.log('Connected to Database...'))
    .catch((err: Error) => console.log(err.message));

  await app.listen(3000);
}
bootstrap();
