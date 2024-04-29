import { CustomEntity } from '../../../database/entities/custom.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Book } from '../../books/entities/book.entity';

@Entity('genders')
export class Gender extends CustomEntity {
  @Column()
  genderName: string;

  @Column({ type: 'text' })
  image: string;

  @OneToMany(() => Book, (book) => book.gender)
  books: Book[];
}
