import { Entity, Column, PrimaryColumn, ManyToMany, JoinColumn } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@Entity()
export class Owner {
  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  gym: string;

  @Column()
  birthDate: Date;

  @ManyToMany(() => Pokemon)
  @JoinColumn()
  pokemons: Pokemon[];
}
