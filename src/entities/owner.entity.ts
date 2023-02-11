import { Entity, Column, PrimaryColumn, ManyToMany, JoinColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Pokemon } from './pokemon.entity';

@Entity()
export class Owner {
  @PrimaryColumn()
  readonly id: string = uuidv4();

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gym: string;

  @ManyToMany(() => Pokemon)
  @JoinColumn()
  pokemons: Pokemon[];
}
