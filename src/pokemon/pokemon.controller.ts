import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  BadRequestException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import {
  CreatePokemonRequest,
  PokemonParams,
  PokemonResponse,
  UpdatePokemonRequest,
} from './dtos';
import { Pokemon } from 'src/entities';

@Controller('api/pokemons')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  @HttpCode(200)
  async getPokemons() {
    const result = await this.pokemonService.getPokemons();

    if (result.error) throw new BadRequestException(result.error);

    const response = new PokemonResponse<[] | Pokemon[]>('', result.data);

    return response;
  }

  @Post()
  @HttpCode(201)
  @HttpCode(400)
  async createPokemon(@Body() request: CreatePokemonRequest) {
    const result = await this.pokemonService.createPokemon(
      request.name,
      new Date(),
    );

    return result;
  }

  @Get(':pid')
  @HttpCode(200)
  @HttpCode(404)
  async getPokemon(@Param() params: PokemonParams) {
    const result = await this.pokemonService.getPokemon(params.pid);

    if (result.error) throw new NotFoundException(result.error);

    const response = new PokemonResponse<Pokemon>('', result.data);

    return response;
  }

  @Put(':pid')
  @HttpCode(200)
  @HttpCode(404)
  @HttpCode(400)
  async upatePokemon(
    @Param() params: PokemonParams,
    @Body() request: UpdatePokemonRequest,
  ) {
    const result = await this.pokemonService.updatePokemon(
      params.pid,
      request.name,
      request.birthDate,
    );

    if (result.error) throw new NotFoundException(result.error);

    const response = new PokemonResponse<Pokemon>('', result.data);

    return response;
  }

  @Delete(':pid')
  @HttpCode(200)
  @HttpCode(404)
  async deletePokemon(@Param() params: PokemonParams) {
    const result = await this.pokemonService.deletePokemon(params.pid);

    if (result.error) throw new NotFoundException(result.error);

    const response = new PokemonResponse('', null);

    return response;
  }
}
