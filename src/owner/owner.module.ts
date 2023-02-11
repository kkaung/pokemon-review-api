import { Module } from '@nestjs/common';
import { OwnerController } from './owner.controller';
import { OwnerRepository } from './owner.repository';
import { OwnerService } from './owner.service';

@Module({
  controllers: [OwnerController],
  providers: [OwnerService, OwnerRepository],
})
export class OwnerModule {}
