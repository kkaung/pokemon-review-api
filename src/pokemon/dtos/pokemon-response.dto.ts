export class PokemonResponse<T> {
  constructor(
    public message: string = '',
    public data: T,
    public success: boolean,
  ) {}
}
