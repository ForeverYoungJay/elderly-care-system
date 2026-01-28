import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Resident } from './resident.entity';
import { Staff } from './staff.entity';

@Entity('organizations')
export class Organization extends BaseEntity {
  @Column()
  name!: string;

  @Column({ nullable: true })
  type?: string; // CAMPUS/BUILDING/FLOOR/DEPT

  @Column({ type: 'uuid', nullable: true })
  parentId?: string | null;

  @OneToMany(() => Resident, (r) => r.organization)
  residents!: Resident[];

  @OneToMany(() => Staff, (s) => s.organization)
  staff!: Staff[];
}

