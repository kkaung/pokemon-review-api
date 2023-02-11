import { IsDate } from 'class-validator';

export class CreatePokemonRequest {
  name: string;

  @IsDate()
  birthDate: Date;
}
