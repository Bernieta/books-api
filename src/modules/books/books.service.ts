import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { Repository } from 'typeorm';
import { GenreService } from '../genres/genre.service';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
    private readonly genreService: GenreService,
  ) {}

  public async findAll() {
    const books = await this.bookRepository.find();
    if (!books.length)
      throw new NotFoundException('There are no registered books');
    return books;
  }

  public async findById(id: number) {
    const book = await this.bookRepository.findOne({ where: { id } });
    if (!book)
      throw new NotFoundException(`The book with id = ${id} not exists`);
    return book;
  }

  public async create(bookDto: CreateBookDto) {
    const book = await this.bookRepository.findOne({
      where: { isbn: bookDto.isbn },
    });
    if (book)
      throw new BadRequestException(
        `The books with isbn = ${bookDto.isbn} already exists`,
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
