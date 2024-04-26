import { CustomEntity } from '../../../database/entities/custom.entity';
import { Column, Entity } from 'typeorm';

@Entity('books')
export class Book extends CustomEntity {
  @Column()
  title: string;

  @Column()
  isbn: string;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column()
  pagesNumber: number;

  @Column()
  editorial: string;

  @Column()
  publicationDate: Date;

}
