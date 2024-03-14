import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';

@Injectable()
export class AppService {
  private todos = [];

  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) { }

  // addTodo(body: any) {
  //   const todo = {
  //     id: this.todos.length + 1,
  //     value: body.value
  //   };

  //   this.todos.push(todo);
  //   return todo;
  // }

  // getTodos() {
  //   return this.todos;
  // }

  // getTodo(id: number) {
  //   const findById = this.todos.find((value) => value.id === id);
  //   return findById;
  // }

  // updateTodo(id: number, body: any) {
  //   const findById = this.getTodo(id);
  //   findById.value = body.value;
  //   return findById;
  // }

  // deleteTodo(id: number) {
  //   const findById = this.todos.findIndex((value) => value.id === id);
  //   this.todos.splice(findById, 1)
  //   return true;
  // }


  addTodo(body: any){
    const todo = new Todo();
    todo.value = body.value;

    const saveTodo = this.todoRepository.save(todo);

    return saveTodo;
  }

  getTodos(){
    const todos = this.todoRepository.find()
    return todos;
  }

  getTodo(id: number) {
    const findById = this.todoRepository.findOne({where: { id: id}, });
    return findById;
  }

  async updateTodo(id: number, body: any) {
    const findById = await this.getTodo(id);
    findById.value = body.value;
    const saveTodo = await this.todoRepository.save(findById);
    return saveTodo;
  }

  async deleteTodo(id: number) {
    const findById = await this.getTodo(id);
    await this.todoRepository.remove(findById)
    return true;
  }
}
