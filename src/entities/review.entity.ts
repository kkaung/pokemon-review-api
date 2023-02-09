import { Entity, Column, PrimaryColumn, ManyToMany, JoinColumn } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@Entity()
export class Review {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  rating: number;

  @ManyToMany(() => Pokemon)
  @JoinColumn()
  pokemons: Pokemon[];
}
