import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloServer } from "@apollo/server";
import { HelloWorldModule } from './hello-world/hello-world.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';




@Module({
  imports: [
    // Configuracion de GraphQL
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver:ApolloDriver,
      autoSchemaFile:join(process.cwd(), 'src/schema.gql'),//archivo que contiene la informacion del esquema de graphQl 
      playground:false, //Esto indica que se habilitara o no la pagina donde se hacen los querys, en caso de que no esta habilitado la pagina debera porcionarse por codigo la consulta.
      plugins:[
        ApolloServerPluginLandingPageLocalDefault()
      ]
    }),
    HelloWorldModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
