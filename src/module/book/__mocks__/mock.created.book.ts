import { BookEntity } from 'src/entity';

export const generateMockCreatedBook = (
  id: number,
  title: string,
  code,
): BookEntity => {
  return {
    id: id,
    title: title,
    code: code,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
  };
};
