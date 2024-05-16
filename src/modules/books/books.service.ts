import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { FindManyOptions, Like, Repository } from 'typeorm';
import { GenreService } from '../genres/genre.service';
import { FilterBookDto } from './dto/filter-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
    private readonly genreService: GenreService,
  ) {}

  public async findAll(params: FilterBookDto) {
    const options: FindManyOptions<Book> = {
      relations: ['genre'],
    };

    const { genreId, isbn, title, limit, offset } = params;

    if (genreId) options.where = { ...options.where, genre: { id: genreId } };

    if (isbn) options.where = { ...options.where, isbn };

    if (title) options.where = { ...options.where, title: Like(`%${title}%`) };

    if (limit > 0 && offset >= 0) {
      options.take = limit;
      options.skip = offset;
    }

    const books = await this.bookRepository.find(options);
    if (!books.length) throw new NotFoundException('No results found');
    return books;
  }

  public async findById(id: number) {
    const book = await this.bookRepository.findOne({
      relations: ['genre'],
      where: { id },
    });
    if (!book) throw new NotFoundException(`The book with ID ${id} not exists`);
    return book;
  }

  public async findBooksByGenre(genreId: number) {
    const books = await this.bookRepository.find({
      relations: ['genre'],
      where: {
        genre: { id: genreId },
      },
    });
    if (!books.length)
      throw new NotFoundException('There are no books related to this genre');
    return books;
  }

  public async create(bookDto: CreateBookDto) {
    const book = await this.bookRepository.findOne({
      where: { isbn: bookDto.isbn },
    });
    if (book)
      throw new BadRequestException(
        `The books with ISBN ${bookDto.isbn} already exists`,
      );
    const { genreId, ...data } = bookDto;
    const genre = await this.genreService.findById(genreId);
    const newBook = this.bookRepository.create({ ...data });
    newBook.genre = genre;
    return await this.bookRepository.save(newBook);
  }

  public async update(id: number, bookDto: UpdateBookDto) {
    const book = await this.findById(id);
    const bookMerge = this.bookRepository.merge(book, bookDto);
    return await this.bookRepository.save(bookMerge);
  }

  public async delete(id: number) {
    const { affected } = await this.bookRepository.delete(id);
    if (!affected)
      throw new NotFoundException(`The book with id = ${id} not exists`);
  }
}
