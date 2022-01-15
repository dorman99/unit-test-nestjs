import { BookEntity } from '../entity';

export const config = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'unitTest',
  entities: [BookEntity],
  synchronize: true,
};
