import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateGenreDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  genreName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  image: string;
}
