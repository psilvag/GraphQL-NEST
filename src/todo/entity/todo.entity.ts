import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType() // le decimos a graphQL que este es mi tipo de dato, mi objeto personalizado
// Basicamente le decimos a Graphql que existe un "todo" y luce asi 
export class Todo{
   @Field(()=>Int) 
   id:number

   @Field(()=>String) 
   description:string

   @Field(()=>Boolean) 
   done: boolean=false 
}