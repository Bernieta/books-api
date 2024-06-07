import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateGenreDto {
  @IsNotEmpty()
  @IsString()
  genreName: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  image: string;
}
