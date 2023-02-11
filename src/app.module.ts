import { Module } from '@nestjs/common';
import { PokemonModule } from './pokemon/pokemon.module';
import { OwnerModule } from './owner/owner.module';
import { ReviewModule } from './review/review.module';
import { ReviewerModule } from './reviewer/reviewer.module';
import { CountryModule } from './country/country.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [PokemonModule, OwnerModule, ReviewModule, ReviewerModule, CountryModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
