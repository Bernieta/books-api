import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateGenreDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  genreName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  image: string;
}
