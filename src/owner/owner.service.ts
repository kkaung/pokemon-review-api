import { Injectable } from '@nestjs/common';
import { Owner } from 'src/entities';
import { OwnerResult } from './dtos';
import { OwnerRepository } from './owner.repository';

@Injectable()
export class OwnerService {
  constructor(private readonly ownerRepository: OwnerRepository) {}

  async createOwner(
    firstName: string,
    lastName: string,
    gym: string,
  ): Promise<OwnerResult<Owner>> {
    const owner = new Owner();
    owner.firstName = firstName;
    owner.lastName = lastName;
    owner.gym = gym;

    this.ownerRepository.saveOwner(owner);

    const result = new OwnerResult<Owner>();

    result.data = owner;

    return result;
  }

  async getOwners(): Promise<OwnerResult<Owner[]>> {
    const result = new OwnerResult<Owner[]>();

    result.data = await this.ownerRepository.getOwners();

    return result;
  }

  async getOwner(oid: string): Promise<OwnerResult<Owner>> {
    const owner = await this.ownerRepository.getOwnerById(oid);

    const result = new OwnerResult<Owner>();

    if (!owner) result.error = `Owner id ${oid} not found!`;

    result.data = owner;

    return result;
  }

  async updateOwner(
    oid: string,
    firstName: string,
    lastName: string,
    gym: string,
  ): Promise<OwnerResult<Owner>> {
    const owner = await this.ownerRepository.getOwnerById(oid);

    const result = new OwnerResult<Owner>();

    if (!owner) {
      result.error = `Owner id  not found!`;
      return result;
    }

    owner.firstName = firstName ?? owner.firstName;
    owner.lastName = lastName ?? owner.lastName;
    owner.gym = gym ?? owner.gym;

    this.ownerRepository.updateOwner(oid, owner);

    result.data = owner;

    return result;
  }

  async deleteOwner(oid: string): Promise<OwnerResult<boolean>> {
    const result = new OwnerResult<boolean>();

    const owner = await this.ownerRepository.getOwnerById(oid);

    if (!owner) {
      result.error = `Owner id ${oid} not found!`;
      return result;
    }

    this.ownerRepository.deleteOwner(oid);

    result.data = true;

    return result;
  }
}
