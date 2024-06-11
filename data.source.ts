import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

export const AppDatasource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT, 10),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [`${__dirname}/src/modules/**/*.entity{.ts,.js}`],
  migrations: [`${__dirname}/src/database/migrations/*{.ts,.js}`],
  migrationsRun: true,
  synchronize: false,
  logging: true,
  ssl: true,
  namingStrategy: new SnakeNamingStrategy(),
});
