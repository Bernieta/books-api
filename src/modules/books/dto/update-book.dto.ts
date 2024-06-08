import {
  IsDate,
  IsISBN,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {
  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsISBN()
  isbn: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  author: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  pagesNumber: number;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  editorial: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsDate()
  publicationDate: Date;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  image: string;
}
