import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateGenreDto {
  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  genreName: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  image: string;
}
