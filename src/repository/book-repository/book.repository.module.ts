import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from 'src/entity';
import { BookRepositoryService } from './book.repository.service';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  providers: [BookRepositoryService],
  exports: [BookRepositoryService],
})
export class BookRepositoryModule {}
