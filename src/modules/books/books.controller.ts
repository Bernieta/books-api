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
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { httpResponse } from '../../config/response';
import { FilterBookDto } from './dto/filter-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  public async findAll(@Query() queryParams: FilterBookDto) {
    const books = await this.booksService.findAll(queryParams);
    return httpResponse('Successfully', HttpStatus.OK, books);
  }

  @Get(':id')
  public async findById(@Param('id', ParseIntPipe) id: number) {
    const book = await this.booksService.findById(id);
    return httpResponse('Successfully', HttpStatus.OK, book);
  }

  @Post()
  public async create(@Body() bookDto: CreateBookDto) {
    const book = await this.booksService.create(bookDto);
    return httpResponse('Created', HttpStatus.CREATED, book);
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() bookDto: UpdateBookDto,
  ) {
    const book = await this.booksService.update(id, bookDto);
    return httpResponse('Successfully', HttpStatus.OK, book);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async remove(@Param('id', ParseIntPipe) id: number) {
    await this.booksService.delete(id);
  }
}
