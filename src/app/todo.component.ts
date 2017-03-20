import { Component, OnInit, Input } from '@angular/core';

import { Todos } from './todos';
import { TodoService } from './todo.service';

@Component({
  selector: 'fa-todo',
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit {
  @Input() counter: number = 0;

  todos: Todos[];
  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getTodos()
      .subscribe(
      data => {
        const myArray = [];
        for (let key in data) {
          myArray.push(data[key]);
        }
        this.todos = myArray;
      }
      );
  }

  checkbox(todo) {
    if (todo.selected) {
      this.counter++;
      //console.log("if-selected"+this.counter);
    } else {
      this.counter--;
      //console.log("else-selected"+this.counter);
    }
  }
}
