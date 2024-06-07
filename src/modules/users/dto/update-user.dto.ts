import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString, IsUrl,
  MinLength,
} from 'class-validator';
import { Roles } from '../enum/roles';

export class UpdateUserDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsOptional()
  @IsEnum(Roles)
  role: Roles;

  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  avatar: string;
}
