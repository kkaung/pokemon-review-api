import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  birthDate: Date;
}
