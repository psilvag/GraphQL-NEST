import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTodoInput,UpdateTodoInput } from './DTO/inputs';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { StatusArgs } from './DTO/args/status.args';

@Resolver()
export class TodoResolver {

constructor(
    private readonly todoService:TodoService
){}

@Query(()=>[Todo],{name:'ToDos'})//[Todo] array de "Todos" propio de GraphQL
findAll(@Args() statusArgs:StatusArgs):Todo[]{
  return  this.todoService.findAll(statusArgs)
}

@Query(()=>Todo,{name:'ToDoID'})
findOne(@Args('id',{type:()=>Int}) id:number):Todo{
  return this.todoService.findOne(id)
}

//@Mutation son querys usados para modificar la data almacenada
// Input: es lo que viene de Body
@Mutation(()=>Todo,{name:'createNewTodo'})
createTodo(@Args('createTodo') createTodoInput:CreateTodoInput){
    
  return this.todoService.createTodo(createTodoInput)

}

@Mutation(()=>Todo,{name:'updateTodo'})
updateTodo(@Args('updateTodoInput') updateTodoInput:UpdateTodoInput){
    
  return this.todoService.updateTodo(updateTodoInput)

}
deleteTodo(){

}

}
