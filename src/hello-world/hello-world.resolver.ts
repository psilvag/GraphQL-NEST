import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

   @Query(()=>String)// le decimos a graphql que esa funcion retornara un string
   helloWorld():string{
    return 'hola universo'
   }
}
