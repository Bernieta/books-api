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
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { httpResponse } from '../../config/response';

@Controller('genres')
export class GenreController {
  constructor(private readonly genreService: GenreService) {}

  @Get()
  public async findAll() {
    const genres = await this.genreService.findAll();
    return httpResponse('Successfully', HttpStatus.OK, genres);
  }

  @Get(':id')
  public async findById(@Param('id', ParseIntPipe) id: number) {
    const genre = await this.genreService.findById(id);
    return httpResponse('Successfully', HttpStatus.OK, genre);
  }

  @Get(':id/books')
  public async findGenreBooks(@Param('id', ParseIntPipe) id: number) {
    const genre = await this.genreService.findGenreBooks(id);
    return httpResponse('Successfully', HttpStatus.OK, genre);
  }

  @Post()
  public async create(@Body() genreDto: CreateGenreDto) {
    const genre = await this.genreService.create(genreDto);
    return httpResponse('Created', HttpStatus.CREATED, genre);
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() genreDto: UpdateGenreDto,
  ) {
    return this.genreService.update(id, genreDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async delete(@Param('id', ParseIntPipe) id: number) {
    return await this.genreService.delete(id);
  }
}
