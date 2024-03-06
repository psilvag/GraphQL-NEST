import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTodoInput } from './DTO/inputs/createTodo.input';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {

constructor(
    private readonly todoService:TodoService
){}

@Query(()=>[Todo],{name:'ToDos'})//[Todo] array de "Todos" propio de GraphQL
findAll():Todo[]{
  return  this.todoService.findAll()
}

@Query(()=>Todo,{name:'ToDoID'})
findOne(@Args('id',{type:()=>Int})id:number):Todo{
   return this.todoService.findOne(id)
}

//@Mutation son querys usados para modificar la data almacenada
// Input: es lo que viene de Body
@Mutation(()=>Todo,{name:'createNewTodo'})
createTodo(@Args('createTodo') createTodoInput:CreateTodoInput){
    
  return this.todoService.createTodo(createTodoInput)

}



updateTodo(){

}
deleteTodo(){

}

}
