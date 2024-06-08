import { IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateGenreDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  genreName: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  image: string;
}
