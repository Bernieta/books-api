import { IsISBN, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class FilterBookDto {
  @IsOptional()
  @IsISBN()
  isbn: string;

  @IsOptional()
  @IsString()
  title: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  limit: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  offset: number;

  @IsOptional()
  @IsNumber()
  genreId: number;
}
