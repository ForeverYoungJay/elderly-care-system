import { Column, Entity, ManyToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Role } from './role.entity';

@Entity('permissions')
export class Permission extends BaseEntity {
  @Column({ unique: true })
  code!: string; // e.g. SECURITY_READ, MEDICAL_WRITE

  @Column()
  description!: string;

  @ManyToMany(() => Role, (r) => r.permissions)
  roles!: Role[];
}

