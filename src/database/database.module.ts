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
        host: configService.database.host,
        port: configService.database.port,
        username: configService.database.user,
        password: configService.database.password,
        database: configService.database.name,
        entities: [`${__dirname}/../modules/**/*.entity{.ts,.js}`],
        migrations: [`${__dirname}/migrations/*{.ts,.js}`],
        synchronize: false,
        logging: false,
        ssl: true,
        namingStrategy: new SnakeNamingStrategy(),
      }),
      inject: [config.KEY],
    }),
  ],
})
export class DatabaseModule {}
