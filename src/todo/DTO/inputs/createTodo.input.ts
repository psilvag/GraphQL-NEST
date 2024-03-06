import { Field, InputType } from "@nestjs/graphql";
import { IsString,IsNotEmpty, MaxLength } from "class-validator";



@InputType() // esto prara graphQL
export class CreateTodoInput{
    
    @Field(()=>String,{description:'What need to do?'})
    // son class validators de Nest
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    description:string
}