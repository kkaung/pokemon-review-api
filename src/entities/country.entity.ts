import { Entity, Column, PrimaryColumn, JoinColumn, OneToOne } from 'typeorm';
import { Owner } from './owner.entity';

@Entity()
export class Country {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @OneToOne(() => Owner)
  @JoinColumn()
  owners: Owner[];
}
