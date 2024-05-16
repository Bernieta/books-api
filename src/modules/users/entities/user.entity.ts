import { BaseEntity } from '../../../database/entities/base.entity';
import { Column, Entity } from 'typeorm';
import { Roles } from '../types/roles';

@Entity('users')
export class User extends BaseEntity {
  @Column()
  fullName: string;

  @Column({ type: 'enum', enum: Roles })
  role: Roles;

  @Column({ unique: true })
  email: string;

  @Column({ type: 'text' })
  password: string;

  @Column({ type: 'text' })
  avatar: string;
}
