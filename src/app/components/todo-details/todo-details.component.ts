import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../services/todo.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.css'
})
export class TodoDetailsComponent implements OnInit {
  todo: Todo | null = null;
  todoId: any | null = null;

  constructor(private todoService: TodoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get the 'id' parameter from the route
    const idParam = this.route.snapshot.paramMap.get('id')?.toString();
    this.todoId = idParam;

    if (this.todoId) {
      // Fetch the todo item by ID
      this.todo = this.todoService.getTodo(this.todoId) ?? null;
    }
  }

  toggleCompleted(): void {
    if (this.todo) {
      this.todoService.toggleCompleted(this.todo.uid);
    }
  }

  deleteTodo(): void {
    if (this.todo) {
      this.todoService.deleteTodo(this.todo.uid);
    }
  }
}
