import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
  @IsNotEmpty()
  @IsString()
  genreName: string;

  @IsNotEmpty()
  @IsString()
  image: string;
}
