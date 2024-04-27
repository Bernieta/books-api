import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  port: parseInt(process.env.PORT, 10) || 3001,
  database: {
    databasePort: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    databaseHost: process.env.DATABASE_HOST,
    databaseUsername: process.env.DATABASE_USERNAME,
    databasePassword: process.env.DATABASE_PASSWORD,
    databaseName: process.env.DATABASE_NAME,
  },
  env: process.env.NODE_ENV || 'development',
}));
