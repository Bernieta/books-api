import { IsDate, IsDateString, IsISBN, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  title: string;


  @IsNotEmpty()
  @IsISBN()
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
  @IsDate()
  publicationDate: Date;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsNumber()
  genreId: number;
}
