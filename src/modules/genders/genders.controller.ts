import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  ParseIntPipe,
  HttpCode,
  Put,
} from '@nestjs/common';
import { GendersService } from './genders.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { httpResponse } from '../../config/response';

@Controller('genders')
export class GendersController {
  constructor(private readonly gendersService: GendersService) {}

  @Get()
  public async findAll() {
    const genders = await this.gendersService.findAll();
    return httpResponse('Successfully', HttpStatus.OK, genders);
  }

  @Get(':id')
  public async findById(@Param('id', ParseIntPipe) id: number) {
    const gender = await this.gendersService.findById(id);
    return httpResponse('Successfully', HttpStatus.OK, gender);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() genderDto: CreateGenderDto) {
    const gender = await this.gendersService.create(genderDto);
    return httpResponse('Created', HttpStatus.CREATED, gender);
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() genderDto: UpdateGenderDto,
  ) {
    return this.gendersService.update(id, genderDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id', ParseIntPipe) id: number) {
    await this.gendersService.delete(id);
  }
}
