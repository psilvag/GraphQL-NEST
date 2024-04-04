import { Field, InputType, Int } from "@nestjs/graphql";
import { IsString,IsNotEmpty, MaxLength, IsBoolean, IsOptional, Min, IsInt } from "class-validator";



@InputType() // esto prara graphQL
export class UpdateTodoInput{
    

    @Field(()=>Int)
    @IsInt()
    @Min(1)
    id:number

    @Field(()=>String,{description:'What need to do?',nullable:true}) // nullable:true es de graphql
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    @IsOptional() // es de los class validator
    description?:string // del body, puede o no puede venir

    @Field(()=>Boolean,{nullable:true})
    @IsBoolean()
    @IsOptional()
    done?:boolean


}