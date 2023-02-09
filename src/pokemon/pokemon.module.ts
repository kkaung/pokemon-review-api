import { Module } from '@nestjs/common';
import { PokemonController } from './pokemon.controller';
import { PokemonRepository } from './pokemon.repository';
import { PokemonService } from './pokemon.service';

@Module({
  imports: [],
  controllers: [PokemonController],
  providers: [PokemonService, PokemonRepository],
})
export class PokemonModule {}
