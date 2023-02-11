import { Repository } from 'typeorm';
import { AppDataSource } from 'src/helpers';
import { Pokemon } from 'src/entities';

export class PokemonRepository {
  private pokemonRepository: Repository<Pokemon>;
  constructor() {
    this.pokemonRepository = AppDataSource.getRepository(Pokemon);
  }

  async getPokemons() {
    return await this.pokemonRepository.find();
  }

  async getPokemonById(id: string) {
    return await this.pokemonRepository.findOneBy({ id });
  }

  async getPokemonByName(name: string) {
    return await this.pokemonRepository.findOneBy({ name });
  }

  async savePokemon(pokemon: Pokemon) {
    return await this.pokemonRepository.save(pokemon);
  }

  async deletePokemon(id: string) {
    return await this.pokemonRepository.delete(id);
  }

  async updatePokemonById(id: string, pokemon: Pokemon) {
    return await this.pokemonRepository.update(id, pokemon);
  }
}
