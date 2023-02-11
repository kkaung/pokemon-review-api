export class PokemonResponse<T> {
  constructor(
    public readonly message: string = '',
    public readonly data: T = null,
    public readonly success: boolean = true,
  ) {}
}
