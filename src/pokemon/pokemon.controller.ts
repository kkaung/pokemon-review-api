import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { CreatePokemonRequest, PokemonParams } from './dtos';

@Controller('api/pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getPokemons() {
    return this.pokemonService.getPokemons();
  }

  @Post()
  async createPokemon(@Body() request: CreatePokemonRequest) {
    const result = await this.pokemonService.createPokemon(
      request.name,
      new Date(),
    );

    return result;
  }

  @Get(':pid')
  getPokemon(@Param() params: PokemonParams) {
    const result = this.pokemonService.getPokemon(params.pid);
    return result;
  }

  @Put(':pid')
  upatePokemon(@Param() params: PokemonParams) {
    const result = this.pokemonService.updatePokemon(params.pid);
    return result;
  }

  @Delete(':pid')
  async deletePokemon(@Param() params: PokemonParams) {
    await this.pokemonService.deletePokemon(params.pid);
  }
}
