import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTodoInput,UpdateTodoInput } from './DTO/inputs';
import { Todo } from './entity/todo.entity';
import { TodoService } from './todo.service';
import { StatusArgs } from './DTO/args/status.args';
import { AgregationsType } from './types/agregations.type';

@Resolver(()=>Todo) // Le decimos que este resolver trabaja con tipo de datos "Todos"
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
@Mutation(()=>Boolean,{name:"deleteTodo"})
deleteTodo(@Args('id',{type:()=>Int}) id:number){
   return this.todoService.delete(id)
}

// Agregations, para obtener la cantidad de todos
@Query(()=>Int,{name:'totalTodos'})
total():number{
 return this.todoService.totalTodos
}

@Query(()=>Int,{name:'completedTodos'})
completed():number{
 return this.todoService.completedTodos
}

@Query(()=>Int,{name:'pendingTodos'})
pending():number{
 return this.todoService.pendingTodos
}

//2da forma usando ObjectTypes, obtener la cantidad de todos
@Query(()=>AgregationsType)
agregation():AgregationsType{
   return{
    total:this.todoService.totalTodos,
    completed:this.todoService.completedTodos,
    pending:this.todoService.pendingTodos,
    totalCompleted:this.todoService.completedTodos
  
   }
}


}
