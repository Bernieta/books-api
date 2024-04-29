import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { Repository } from 'typeorm';
import { Gender } from './entities/gender.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GendersService {
  constructor(
    @InjectRepository(Gender)
    private readonly gendersRepository: Repository<Gender>,
  ) {}

  public async findAll() {
    const genders = await this.gendersRepository.find();
    if (!genders.length)
      throw new NotFoundException('There are no registered genders');
    return genders;
  }

  public async findById(id: number) {
    const gender = await this.gendersRepository.findOne({ where: { id } });
    if (!gender)
      throw new NotFoundException(`The gender with id = ${id} not exists`);
    return gender;
  }

  public async create(genderDto: CreateGenderDto) {
    const gender = await this.gendersRepository.findOne({
      where: { genderName: genderDto.genderName },
    });
    if (gender)
      throw new ConflictException(
        `The user gender ${genderDto.genderName} already exist`,
      );
    return await this.gendersRepository.save(genderDto);
  }

  public async update(id: number, genderDto: UpdateGenderDto) {
    const gender = await this.findById(id);
    const genderMerge = this.gendersRepository.merge(gender, genderDto);
    return await this.gendersRepository.save(genderMerge);
  }

  public async delete(id: number) {
    const { affected } = await this.gendersRepository.delete(id);
    if (!affected) throw new NotFoundException();
  }
}
