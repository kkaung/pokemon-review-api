import 'reflect-metadata';
import { Owner } from 'src/entities/owner.entity';
import { DataSource } from 'typeorm';
import { Pokemon } from '../entities';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'containers-us-west-200.railway.app',
  port: 6939,
  username: 'postgres',
  password: 'nrqgDOpG9D3PlQtELauj',
  database: 'railway',
  entities: [Pokemon, Owner],
  synchronize: true,
  logging: false,
});
