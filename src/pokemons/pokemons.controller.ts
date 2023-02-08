import { Controller, Get } from '@nestjs/common';
import { Pokemon } from 'src/models';

@Controller('api/pokemons')
export class PokemonsController {
  @Get()
  getPokemons(): Pokemon[] {
    return [{ id: 'id', name: 'Pokemon', birthDate: new Date() }];
  }
}
