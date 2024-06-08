import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString, IsUrl,
  MinLength,
} from 'class-validator';
import { Roles } from '../enum/roles';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @ApiProperty()
  @IsOptional()
  @IsEnum(Roles)
  role: Roles;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  @IsUrl()
  avatar: string;
}
