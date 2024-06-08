import { Roles } from '../enum/roles';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString, IsUrl,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(Roles)
  role: Roles;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  avatar: string;
}
