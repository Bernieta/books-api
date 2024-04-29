import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenderDto {
  @IsNotEmpty()
  @IsString()
  genderName: string;

  @IsNotEmpty()
  @IsString()
  image: string;
}
