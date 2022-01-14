import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from 'src/entity';
import { CreateBookDto } from 'src/module/book/dto';
import { Repository } from 'typeorm';

@Injectable()
export class BookRepositoryService {
  constructor(
    @InjectRepository(BookEntity) private repo: Repository<BookEntity>,
  ) {}

  async find(limit: number, skip: number): Promise<BookEntity[]> {
    return await this.repo.find({ take: limit, skip: skip });
  }

  async createBook(createBookDto: CreateBookDto): Promise<BookEntity> {
    return await this.repo.save(createBookDto);
  }
}
