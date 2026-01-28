import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

@Entity('patients')
export class Patient extends BaseEntity {
  @Column()
  fullName!: string;

  @Column({ type: 'date' })
  dateOfBirth!: string;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender!: Gender;

  @Column({ type: 'jsonb', nullable: true })
  demographics!: Record<string, any>; // 用于存储联系方式、家庭成员等信息

  @Column('text', { array: true, default: [] })
  chronicDiseases!: string[]; // 慢性病列表

  @Column('text', { array: true, default: [] })
  allergies!: string[]; // 过敏史
}