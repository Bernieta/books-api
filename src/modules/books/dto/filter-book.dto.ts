import { IsISBN, IsNumber, IsOptional, IsString } from 'class-validator';

export class FilterBookDto {
  @IsOptional()
  @IsISBN()
  isbn: string

  @IsOptional()
  @IsString()
  title: string

  @IsOptional()
  @IsNumber()
  limit: number;

  @IsOptional()
  @IsNumber()
  offset: number

  @IsOptional()
  @IsNumber()
  genreId: number;
}
