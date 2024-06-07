import { Roles } from '../enum/roles';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString, IsUrl,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsOptional()
  @IsEnum(Roles)
  role: Roles;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  avatar: string;
}
