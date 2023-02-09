import { Repository } from 'typeorm';
import { AppDataSource } from 'src/helpers';
import { Pokemon } from 'src/entities';

export class PokemonRepository {
  private pokemonRepository: Repository<Pokemon>;
  constructor() {
    this.pokemonRepository = AppDataSource.getRepository(Pokemon);
  }

  getPokemons() {
    return this.pokemonRepository.find();
  }

  getPokemonById(id: string) {
    return this.pokemonRepository.findOneBy({ id });
  }

  getPokemonByName(name: string) {
    return this.pokemonRepository.findOneBy({ name });
  }

  savePokemon(pokemon: Pokemon) {
    return this.pokemonRepository.save(pokemon);
  }

  deletePokemon(id: string) {
    return this.pokemonRepository.delete(id);
  }

  updatePokemonById(id: string) {
    return this.pokemonRepository.findOneBy({ id });
  }
}
