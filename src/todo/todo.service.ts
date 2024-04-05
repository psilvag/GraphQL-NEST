import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './entity/todo.entity';
import { UpdateTodoInput, CreateTodoInput } from './DTO/inputs';
import { StatusArgs } from './DTO/args/status.args';

@Injectable()
export class TodoService {

   private todos:Todo[]=[
    {id:1, description:'todo1',done:false},
    {id:2, description:'todo2',done:true},
    {id:3, description:'todo3',done:false}
   ] 

   // -------getters---------
   get totalTodos(){
    return this.todos.length
   }
   get completedTodos(){
    return this.todos.filter(todo=>todo.done===true).length
   
   }
   get pendingTodos(){
   return this.todos.filter(todo=>todo.done===false).length
    
   }

   findAll(statusArgs:StatusArgs):Todo[]{
    if(statusArgs.status!==undefined){
    return this.todos.filter(todo=>todo.done===statusArgs.status)
    }
    return this.todos
   }

   findOne(id:number):Todo{
    const todo=this.todos.find(todo=>todo.id===id)
    if(!todo) throw new NotFoundException('Todo ID not found')
    return todo
   }

   createTodo(createTodoInput:CreateTodoInput):Todo{
     const todo= new Todo()
     todo.description= createTodoInput.description
     todo.id=Math.max(...this.todos.map(todo=>todo.id),0)+1
     this.todos.push(todo)
     return todo
   }
   
   updateTodo(updateTodoInput:UpdateTodoInput){
    const {id,description,done}=updateTodoInput
    const todoToUpdate=this.findOne(id)
    if(description) todoToUpdate.description=description
    if(done!==undefined) todoToUpdate.done=done
    this.todos=this.todos.map(todo=>{
      return todo.id===id ? todoToUpdate : todo
    })

    return todoToUpdate
   }

   delete(id:number){
    const todo= this.findOne(id)
    this.todos=this.todos.filter(todo=>todo.id!==id)
    return true
   }

}
