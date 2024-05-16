import { BaseEntity } from '../../../database/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Book } from '../../books/entities/book.entity';

@Entity('genres')
export class Genre extends BaseEntity {
  @Column()
  genreName: string;

  @Column({ type: 'text' })
  image: string;

  @OneToMany(() => Book, (book) => book.genre)
  books: Book[];
}
