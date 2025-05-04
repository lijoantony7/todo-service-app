import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todos: Todo[] = [];

  private todoSubject = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todoSubject.asObservable();

  constructor() {
    this.todos = this.getTodos();
    this.todoSubject.next(this.todos);
  }

  addTodo(title: string) {
    const id: number = this.todos.length > 0 ? this.todos[this.todos.length - 1].id : 1;
    const newTodo: Todo = {
      id: id,
      title,
      completed: false,
      createdOn: new Date(),
      uid: new Date(),
    }

    this.todos.push(newTodo);
    this.todoSubject.next(this.todos);
    this.saveToLocal();
  }

  toggleCompleted(uid: Date) {
    const todo = this.todos.find(x => x.uid == uid);
    if (todo) {
      todo.completed = !todo.completed;
      this.todoSubject.next(this.todos);
      this.saveToLocal();
    }
  }

  deleteTodo(uid: Date) {
    this.todos = this.todos.filter(x => x.uid != uid);
    this.todoSubject.next(this.todos);
    this.saveToLocal();
  }

  getTodo(uid: Date) {
    return this.todos.find(x => x.uid == uid);
  }

  getTodos() {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
  }

  saveToLocal() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
