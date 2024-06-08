import {
  IsDate,
  IsISBN,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsISBN()
  isbn: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  pagesNumber: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  editorial: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDate()
  publicationDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  image: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  genreId: number;
}
