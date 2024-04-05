import { Field, ObjectType, Int } from '@nestjs/graphql';


@ObjectType({description:'Todo quick agregration'})
export class AgregationsType{
   
   @Field(()=>Int)
   total:number

   @Field(()=>Int)
   completed:number

   @Field(()=>Int)
   pending:number

   // Este campo es redundante porque es lo mismo que completed, entonces lo marcamos como deprecated, le decimos a graphql que ya no se use, es DECIR OBSOLETO.
   @Field(()=>Int,{deprecationReason:'Deprecated instead'})
   totalCompleted:number


}