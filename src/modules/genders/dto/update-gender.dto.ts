import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateGenderDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  genderName: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  image: string;
}
