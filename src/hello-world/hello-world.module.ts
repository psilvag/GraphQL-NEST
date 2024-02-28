import { Module } from '@nestjs/common';
import { HelloWorldResolver } from './hello-world.resolver';

@Module({
  // EN graphQl los resolvers son como los controladores, escuchan al data del request o del cliente y lo transforman en instrucciones que entiende GRAPHQL
  providers: [HelloWorldResolver]
})
export class HelloWorldModule {}
