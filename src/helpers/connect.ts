import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Pokemon } from '../entities';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'containers-us-west-200.railway.app',
  port: 6939,
  username: 'postgres',
  password: 'nrqgDOpG9D3PlQtELauj',
  database: 'railway',
  entities: [Pokemon],
  synchronize: true,
  logging: false,
});
