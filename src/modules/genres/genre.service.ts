import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Repository } from 'typeorm';
import { Genre } from './entities/genre.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
  ) {}

  public async findAll() {
    const genres = await this.genreRepository.find();
    if (!genres.length)
      throw new NotFoundException('There are no registered genres');
    return genres;
  }

  public async findById(id: number) {
    const genre = await this.genreRepository.findOne({ where: { id } });
    if (!genre)
      throw new NotFoundException(`The genre with ID ${id} not exists`);
    return genre;
  }

  public async findGenreBooks(id: number) {
    const genre = await this.genreRepository.findOne({
      relations: ['books'],
      where: { id },
    });
    if (!genre) throw new NotFoundException('No results found');
    return genre;
  }

  public async create(genreDto: CreateGenreDto) {
    const genre = await this.genreRepository.findOne({
      where: { genreName: genreDto.genreName },
    });
    if (genre)
      throw new BadRequestException(
        `The genre ${genreDto.genreName} already exist`,
      );
    return await this.genreRepository.save(genreDto);
  }

  public async update(id: number, genreDto: UpdateGenreDto) {
    const genre = await this.findById(id);
    const genreMerge = this.genreRepository.merge(genre, genreDto);
    return await this.genreRepository.save(genreMerge);
  }

  public async delete(id: number) {
    const genre = await this.findGenreBooks(id);
    const { books } = genre;
    if (books.length)
      throw new BadRequestException(
        'Cannot delete genre with associated books',
      );
    await this.genreRepository.delete(genre.id);
  }
}
