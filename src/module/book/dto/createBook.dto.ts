import { IsString } from 'class-validator';
import { BookEntity } from 'src/entity';

export class CreateBookDto extends BookEntity {
  @IsString()
  title: string;
}
