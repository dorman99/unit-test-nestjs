import { Injectable } from '@nestjs/common';
import { BookEntity } from '../../entity';
import { BookRepositoryService } from '../../repository/book-repository/book.repository.service';
import { generateUuid, randString } from '../../utils';
import { CreateBookDto } from './dto';

@Injectable()
export class BookService {
  constructor(private bookRepoService: BookRepositoryService) {}

  async find(limit: number, skip: number): Promise<BookEntity[]> {
    return await this.bookRepoService.find(limit, skip);
  }

  async createBook(createBookDto: CreateBookDto): Promise<BookEntity> {
    const uuid = generateUuid();
    const str = randString(5);
    const code = `[${str}]-[${uuid}]`;
    createBookDto.code = code;
    return await this.bookRepoService.createBook(createBookDto);
  }
}
