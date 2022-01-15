import { Test, TestingModule } from '@nestjs/testing';
import { BookService } from './book.service';
import { MockBookRepositoryService } from './__mocks__/mock.book.repository.service';
import { BookRepositoryService } from '../../repository/book-repository/book.repository.service';
import { CreateBookDto } from './dto';
import * as utils from '../../utils';
import { generateMockCreatedBook } from './__mocks__/mock.created.book';

jest.mock('../../utils', () => ({
  generateUuid: jest.fn(),
  randString: jest.fn(),
}));

describe('book.service', () => {
  let bookService: BookService;
  let bookRepositoryService: BookRepositoryService;
  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        BookService,
        {
          provide: BookRepositoryService,
          useClass: MockBookRepositoryService,
        },
      ],
    }).compile();
    bookService = await moduleRef.get<BookService>(BookService);
    bookRepositoryService = await moduleRef.get<BookRepositoryService>(
      BookRepositoryService,
    );
  });

  it('defined', () => {
    console.log(bookRepositoryService);
    expect(bookService).toBeDefined();
    expect(bookRepositoryService).toBeDefined();
  });

  describe('create', () => {
    const CREATE_BOOK_DTO: CreateBookDto = {
      title: 'Learn Unit Test',
    };

    it('success', async () => {
      const spyGenerateUuid = jest
        .spyOn(utils, 'generateUuid')
        .mockReturnValue('0131d343-074a-427c-8350-3b2552c54fb0');
      const spyRandString = jest
        .spyOn(utils, 'randString')
        .mockReturnValue('abcdef');
      const CREATED_BOOK = generateMockCreatedBook(
        1,
        CREATE_BOOK_DTO.title,
        `[abcdef]-[0131d343-074a-427c-8350-3b2552c54fb0]`,
      );
      const spyCreateBook = jest
        .spyOn(bookRepositoryService, 'createBook')
        .mockResolvedValue(CREATED_BOOK);
      const result = await bookService.createBook(CREATE_BOOK_DTO);
      expect(spyGenerateUuid).toHaveBeenCalled();
      expect(spyRandString).toHaveBeenCalled();
      expect(spyCreateBook).toHaveBeenCalled();
      expect(result).toEqual(CREATED_BOOK);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
