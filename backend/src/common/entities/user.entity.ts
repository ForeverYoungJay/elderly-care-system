import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Role } from './role.entity';

@Entity('users')
export class User extends BaseEntity {
  @Column({ unique: true })
  email!: string;

  @Column({ select: false })
  password!: string; // Note: This should be hashed before saving to the DB

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @ManyToOne(() => Role, (r) => r.users)
  role!: Role;
}