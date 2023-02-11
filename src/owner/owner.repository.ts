import { Repository } from 'typeorm';
import { AppDataSource } from 'src/helpers';
import { Owner } from 'src/entities';

export class OwnerRepository {
  private readonly ownerRepository: Repository<Owner>;

  constructor() {
    this.ownerRepository = AppDataSource.getRepository(Owner);
  }

  async getOwners() {
    return this.ownerRepository.find();
  }

  async getOwnerById(id: string) {
    return this.ownerRepository.findOneBy({ id });
  }

  async saveOwner(owner: Owner) {
    return this.ownerRepository.save(owner);
  }

  async updateOwner(id: string, owner: Owner) {
    return this.ownerRepository.update(id, owner);
  }

  async deleteOwner(id: string) {
    return this.ownerRepository.delete(id);
  }
}
