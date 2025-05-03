import { Component } from '@angular/core';
import { TodoComponent } from "./components/todo/todo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-service-app';
}
