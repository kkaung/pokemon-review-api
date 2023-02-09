import { Injectable } from '@nestjs/common';
import { PokemonRepository } from './pokemon.repository';
import { Pokemon } from 'src/entities';

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  async getPokemons(): Promise<Pokemon[]> {
    return this.pokemonRepository.getPokemons();
  }

  async getPokemon(pid: string): Promise<Pokemon> {
    const pokemon = await this.pokemonRepository.getPokemonById(pid);
    if (!pokemon) {
    }

    return pokemon;
  }

  async createPokemon(name: string, birthDate: Date): Promise<Pokemon> {
    // check if the pokemon exists
    if (!this.pokemonRepository.getPokemonByName(name)) {
      throw new Error(`Pokemon ${name} already exists`);
    }

    const pokemon = new Pokemon();
    pokemon.name = name;
    pokemon.birthDate = birthDate;

    await this.pokemonRepository.savePokemon(pokemon);

    return pokemon;
  }

  async updatePokemon(pid: string) {
    if (!this.pokemonRepository.getPokemonById(pid)) {
      throw new Error(`Pokemon ${pid} not found`);
    }

    this.pokemonRepository.updatePokemonById(pid);
  }

  async deletePokemon(pid: string) {
    // check if the pokemon exists
    if (!this.pokemonRepository.getPokemonById(pid)) {
      throw new Error(`Pokemon ${pid} not found`);
    }

    this.pokemonRepository.deletePokemon(pid);
  }
}
