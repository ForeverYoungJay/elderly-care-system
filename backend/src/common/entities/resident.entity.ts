import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Organization } from './organization.entity';

@Entity('residents')
export class Resident extends BaseEntity {
  @Column()
  name!: string;

  @Column({ nullable: true })
  gender?: string;

  @Column({ type: 'date', nullable: true })
  birthday?: Date;

  @Column({ nullable: true })
  roomNo?: string;

  @Column({ nullable: true })
  emergencyContact?: string;

  @Column({ nullable: true })
  emergencyPhone?: string;

  @Column({ nullable: true })
  chronicDiseases?: string; // 简化：CSV/JSON字符串

  @Column({ nullable: true })
  allergy?: string;

  @Column({ nullable: true })
  dietTaboo?: string;

  @Column({ type: 'uuid', nullable: true })
  bedId?: string | null;

  @ManyToOne(() => Organization, (o) => o.residents, { nullable: true, eager: true })
  organization?: Organization | null;
}
