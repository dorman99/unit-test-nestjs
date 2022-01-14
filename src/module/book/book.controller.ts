import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto';
import { PaginationQueryDto } from './dto/paginationQuery.dto';

@Controller('/books')
export class BookController {
  constructor(private bookService: BookService) {}

  @Get('/')
  async find(@Query() query: PaginationQueryDto) {
    return await this.bookService.find(query.limit || 10, query.skip || 0);
  }

  @Post('/')
  async create(@Body() createBookDto: CreateBookDto) {
    return await this.bookService.createBook(createBookDto);
  }
}
