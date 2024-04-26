import { CustomEntity } from '../../../database/entities/custom.entity';
import { Column, Entity } from 'typeorm';

@Entity('genders')
export class Gender extends CustomEntity {
  @Column()
  genderName: string;

  @Column({ type: 'text' })
  image: string;
}
