import { CustomEntity } from '../../../database/entities/custom.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Gender } from '../../genders/entities/gender.entity';

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

  @ManyToOne(() => Gender, (gender) => gender.books)
  @JoinColumn({ name: 'gender_id' })
  gender: Gender;
}
