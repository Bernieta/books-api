import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './modules/users/users.module';
import { BooksModule } from './modules/books/books.module';
import { GendersModule } from './modules/genders/genders.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    UsersModule,
    BooksModule,
    GendersModule,
    AuthModule,
  ],
})
export class AppModule {}
