import { registerAs } from '@nestjs/config';
import * as process from 'node:process';

export default registerAs('config', () => ({
  port: parseInt(process.env.PORT, 10) || 3001,
  database: {
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    name: process.env.DATABASE_NAME,
  },
  secretKey: process.env.SECRET_KEY,
  env: process.env.NODE_ENV || 'development',
}));
