import { Module } from '@nestjs/common';
import { BookRepositoryModule } from 'src/repository';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  imports: [BookRepositoryModule],
  providers: [BookService],
  exports: [BookService],
  controllers: [BookController],
})
export class BookModule {}
