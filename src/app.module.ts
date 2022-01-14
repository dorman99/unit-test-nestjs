import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entity';
import { BookModule } from './module/book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'unitTest',
      entities: [BookEntity],
      synchronize: true,
    }),
    BookModule,
  ],
})
export class AppModule {}
