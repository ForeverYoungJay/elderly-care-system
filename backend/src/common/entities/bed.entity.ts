import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

export enum BedStatus {
  AVAILABLE = 'AVAILABLE',
  OCCUPIED = 'OCCUPIED',
  MAINTENANCE = 'MAINTENANCE'
}

@Entity('beds')
export class Bed extends BaseEntity {
  @Column()
  roomNo!: string;

  @Column()
  bedNo!: string;

  @Column({ type: 'varchar', default: BedStatus.AVAILABLE })
  status!: BedStatus;

  @Column({ type: 'uuid', nullable: true })
  orgId?: string | null;
}
