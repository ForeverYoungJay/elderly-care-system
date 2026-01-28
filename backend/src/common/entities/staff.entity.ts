import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Role } from './role.entity';
import { Organization } from './organization.entity';

@Entity('staff')
export class Staff extends BaseEntity {
  @Column({ unique: true })
  username!: string;

  @Column()
  passwordHash!: string;

  @Column()
  name!: string;

  @Column({ nullable: true })
  phone?: string;

  @ManyToMany(() => Role, (r) => r.staff, { eager: true })
  @JoinTable({
    name: 'staff_roles',
    joinColumn: { name: 'staff_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'role_id', referencedColumnName: 'id' }
  })
  roles!: Role[];

  @ManyToOne(() => Organization, (o) => o.staff, { nullable: true, eager: true })
  organization?: Organization | null;
}

