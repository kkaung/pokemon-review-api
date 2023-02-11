export class OwnerResponse<T> {
  constructor(
    public readonly data: T = null,
    public readonly message: string = '',
    public readonly success: boolean = true,
  ) {}
}
