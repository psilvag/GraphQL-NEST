import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HelloWorldModule } from './hello-world/hello-world.module';


@Module({
  imports: [
    // Configuracion de GraphQL
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      //playground:false el playground informa a las personas lo que pueden solicitar, si queremos lo mostramos o no
      autoSchemaFile:join(process.cwd(), 'src/schema.gql'),//archivo que contiene la informacion del esquema de graphQl 
    }),
    HelloWorldModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
