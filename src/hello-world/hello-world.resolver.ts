import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloWorldResolver {

   @Query(()=>String,{description:'Hola mundo es lo que retorna', name:'hello'})// le decimos a graphql que esa funcion retornara un string
   helloWorld():string{
    return 'hola universo'
   }

   @Query(()=>Float,{ name:'randomNumber'})
   getRandomNumber():number{
      return Math.random()*100
   }

   
   @Query(()=>Int,
   {
      name:'randomZero',
      description:'from zero to argument:to,default(7)'})
   //@Args('to') ese nombre 'to' dentro de args es lo que usara como referencia GraphQL
   getRandomNumberFromZeroTo(
      @Args(
         'to',
         {  type:()=>Int, 
            nullable:true
         }) 
         to:number=6):number {
      return Math.floor(Math.random()*to)
   }
   
   


}
