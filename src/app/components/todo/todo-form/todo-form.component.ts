import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
  todo: string = '';

  @Output() todoEmit = new EventEmitter<string>();

  formSubmit() {
    this.todoEmit.emit(this.todo);
    this.todo = '';
  }
}
