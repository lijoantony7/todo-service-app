import { Routes } from "@angular/router";
import { TodoComponent } from "./components/todo-list/todo-list.component";
import { TodoDetailsComponent } from "./components/todo-details/todo-details.component";

export const routes: Routes = [
  { path: '', component: TodoComponent },
  { path: 'details/:id', component: TodoDetailsComponent },
]
