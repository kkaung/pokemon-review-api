import { Injectable } from '@nestjs/common';
import { PokemonRepository } from './pokemon.repository';
import { Pokemon } from 'src/entities';
import { PokemonResult } from './dtos';

@Injectable()
export class PokemonService {
  constructor(private readonly pokemonRepository: PokemonRepository) {}

  async getPokemons(): Promise<PokemonResult<[] | Pokemon[]>> {
    const result = new PokemonResult<[] | Pokemon[]>();
    result.data = await this.pokemonRepository.getPokemons();
    return result;
  }

  async getPokemon(pid: string): Promise<PokemonResult<Pokemon | null>> {
    const pokemon = await this.pokemonRepository.getPokemonById(pid);

    const result = new PokemonResult<Pokemon | null>();

    if (!pokemon) {
      result.error = `Pokemon id ${pid} not found`;
      return result;
    }

    result.data = pokemon;

    return result;
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

  async updatePokemon(
    pid: string,
    name: string,
    birthDate: Date,
  ): Promise<PokemonResult<Pokemon>> {
    const pokemon = await this.pokemonRepository.getPokemonById(pid);

    const result = new PokemonResult<Pokemon>();

    if (!pokemon) {
      result.error = `Pokemon id ${pid} not found`;
      return result;
    }

    pokemon.name = name ?? pokemon.name;
    pokemon.birthDate = birthDate ?? pokemon.birthDate;

    // update the pokemon
    await this.pokemonRepository.updatePokemonById(pid, pokemon);

    result.data = pokemon;

    return result;
  }

  async deletePokemon(pid: string): Promise<PokemonResult<boolean>> {
    const result = new PokemonResult<boolean>();
    // check if the pokemon exists
    if (!(await this.pokemonRepository.getPokemonById(pid))) {
      result.error = `Pokemon id ${pid} not found`;
      return result;
    }

    await this.pokemonRepository.deletePokemon(pid);

    return result;
  }
}
