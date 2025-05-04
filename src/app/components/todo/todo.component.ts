import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { Component, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoFormComponent, RouterModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  title: string = 'To-Do-Service-App';
  todos: Todo[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.todos$.subscribe(data => this.todos = data);
  }

  addTodo(emittedTodo: string) {
    if (emittedTodo.trim()) {
      this.todoService.addTodo(emittedTodo.trim());
    }
  }

  doneHanlde(uid: Date) {
    this.todoService.toggleCompleted(uid);
  }

  deleteHanlde(uid: Date) {
    this.todoService.deleteTodo(uid);
  }
}
