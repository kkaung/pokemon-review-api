import {
  Controller,
  Delete,
  Get,
  HttpCode,
  Post,
  Put,
  Body,
  NotFoundException,
  BadRequestException,
  Param,
} from '@nestjs/common';
import { Owner } from 'src/entities';
import {
  CreateOwnerRequest,
  OwnerParams,
  OwnerResponse,
  UpdateOwnerRequest,
} from './dtos';
import { OwnerService } from './owner.service';

@Controller('api/owners')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get()
  @HttpCode(200)
  async getOwners() {
    const result = await this.ownerService.getOwners();

    const response = new OwnerResponse<Owner[]>(result.data);

    return response;
  }

  @Post()
  @HttpCode(201)
  @HttpCode(400)
  async createOwner(@Body() request: CreateOwnerRequest) {
    const result = await this.ownerService.createOwner(
      request.firstName,
      request.lastName,
      request.gym,
    );

    if (result.error) throw new BadRequestException(result.error);

    const response = new OwnerResponse<Owner>(result.data);

    return response;
  }

  @Get(':oid')
  @HttpCode(200)
  @HttpCode(404)
  async getOwner(@Param() params: OwnerParams) {
    const result = await this.ownerService.getOwner(params.oid);

    if (result.error) throw new NotFoundException(result.error);

    const response = new OwnerResponse<Owner>(result.data);

    return response;
  }

  @Put(':oid')
  async updateOwner(
    @Param() params: OwnerParams,
    @Body() request: UpdateOwnerRequest,
  ) {
    const result = await this.ownerService.updateOwner(
      params.oid,
      request.firstName,
      request.lastName,
      request.gym,
    );

    if (result.error) throw new NotFoundException(result.error);

    const response = new OwnerResponse<Owner>(result.data);
    return response;
  }

  @Delete(':oid')
  @HttpCode(200)
  @HttpCode(404)
  async deleteOwner(@Param() params: OwnerParams) {
    const result = await this.ownerService.deleteOwner(params.oid);

    if (result.error) throw new NotFoundException(result.error);

    const respone = new OwnerResponse<unknown>();

    return respone;
  }

  @Get(':oid/pokemons')
  async getPokemonsByOwner() {
    return;
  }
}
