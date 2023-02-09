import { Entity, Column, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class Pokemon {
  @PrimaryColumn()
  id: string = uuidv4();

  @Column()
  name: string;

  @Column()
  birthDate: Date;
}
