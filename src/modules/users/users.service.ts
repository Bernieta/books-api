import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Roles } from './types/roles';
import * as bcrypt from 'bcrypt';

const saltOrRounds = 10;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  public async findAll() {
    const users = await this.userRepository.find();
    if (!users.length)
      throw new NotFoundException('There are no registered users');
    return users;
  }

  public async findById(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user)
      throw new NotFoundException(`The user with ID = ${id} not exist`);
    return user;
  }

  public async findByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email } });
  }

  public async create(userDto: CreateUserDto) {
    const user = await this.findByEmail(userDto.email);
    if (user)
      throw new BadRequestException(
        `The user with email ${userDto.email} already exist`,
      );
    const newUser = this.userRepository.create(userDto);
    newUser.role = userDto.role ?? Roles.CUSTOMER;
    newUser.password = await bcrypt.hash(userDto.password, saltOrRounds);
    return await this.userRepository.save(newUser);
  }

  public async update(id: number, userDto: UpdateUserDto) {
    const user = await this.findById(id);
    const userMerge = this.userRepository.merge(user, userDto);
    return await this.userRepository.save(userMerge);
  }

  public async delete(id: number) {
    const { affected } = await this.userRepository.delete(id);
    if (!affected)
      throw new NotFoundException(`The user with ID = ${id} not exist`);
  }
}
