import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;


  @IsNotEmpty()
  @IsString()
  isbn: string;


  @IsNotEmpty()
  @IsString()
  author: string;


  @IsNotEmpty()
  @IsString()
  description: string;


  @IsNotEmpty()
  @IsNumber()
  pagesNumber: number;


  @IsNotEmpty()
  @IsString()
  editorial: string;


  @IsNotEmpty()
  @IsDateString()
  publicationDate: Date;

  @IsNotEmpty()
  @IsNumber()
  genreId: number;
}
