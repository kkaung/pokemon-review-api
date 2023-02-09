import { Entity, Column, PrimaryColumn, ManyToMany, JoinColumn } from 'typeorm';
import { Review } from './review.entity';

@Entity()
export class Reviewer {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Review)
  @JoinColumn()
  reviews: Review[];
}
