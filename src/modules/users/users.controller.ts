import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  HttpCode,
  HttpStatus,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { httpResponse } from '../../config/response';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async findAll() {
    const users = await this.usersService.findAll();
    return httpResponse('Successfully', HttpStatus.OK, users);
  }

  @Get(':id')
  public async findById(@Param('id', ParseIntPipe) id: number) {
    const user = await this.usersService.findById(id);
    return httpResponse('Successfully', HttpStatus.OK, user);
  }

  @Post()
  public async create(@Body() userDto: CreateUserDto) {
    const user = await this.usersService.create(userDto);
    return httpResponse('Created', HttpStatus.CREATED, user);
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() userDto: UpdateUserDto,
  ) {
    const user = await this.usersService.update(id, userDto);
    return httpResponse('Successfully', HttpStatus.OK, user);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id', ParseIntPipe) id: number) {
    await this.usersService.delete(id);
  }
}
