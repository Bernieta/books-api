import { CustomEntity } from '../../../database/entities/custom.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Book } from '../../books/entities/book.entity';

@Entity('genres')
export class Genre extends CustomEntity {
  @Column()
  genreName: string;

  @Column({ type: 'text' })
  image: string;

  @OneToMany(() => Book, (book) => book.gender)
  books: Book[];
}
