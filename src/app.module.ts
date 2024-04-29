import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';
import { BooksModule } from './modules/books/books.module';
import { GenreModule } from './modules/genres/genre.module';
import { AuthModule } from './modules/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';
import environments from './config/environment';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV] || '.env.development',
      load: [config],
      isGlobal: true,
    }),
    DatabaseModule,
    UsersModule,
    BooksModule,
    GenreModule,
    AuthModule,
  ],
})
export class AppModule {}
