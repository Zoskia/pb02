import { Component, OnInit } from '@angular/core';
import { PbTodoService } from '../../services/pb-todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: any[] = [];

  constructor(private todoService: PbTodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().then((resultList) => {
      this.todos = resultList;
    }).catch((error) => {
      console.error('Error fetching todos:', error);
    });
  }
}
