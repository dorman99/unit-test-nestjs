import { IsNumber, IsNumberString, IsOptional } from 'class-validator';

export class PaginationQueryDto {
  @IsNumberString()
  @IsOptional()
  limit: number;

  @IsNumberString()
  @IsOptional()
  skip: number;
}
