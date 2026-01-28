import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Permission } from './permission.entity';
import { User } from './user.entity';

@Entity('roles')
export class Role extends BaseEntity {
  @Column({ unique: true })
  name!: string; // e.g. ADMIN, NURSE, DOCTOR

  @Column()
  description!: string;

  @ManyToMany(() => Permission, (p) => p.roles, { cascade: true })
  @JoinTable({ name: 'roles_permissions' })
  permissions!: Permission[];

  @OneToMany(() => User, (u) => u.role)
  users!: User[];
}