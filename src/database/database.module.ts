import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import config from '../config/config';
import { ConfigType } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => ({
        type: 'postgres',
        host: configService.database.databaseHost,
        port: configService.database.databasePort,
        username: configService.database.databaseUsername,
        password: configService.database.databasePassword,
        database: configService.database.databaseName,
        entities: [`${__dirname}/../modules/**/*.entity{.ts,.js}`],
        synchronize: true,
        logging: true,
        namingStrategy: new SnakeNamingStrategy(),
      }),
      inject: [config.KEY],
    }),
  ],
})
export class DatabaseModule {}
