import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  template: `
  
  <input test-data="input" [(ngModel)]="todo" (keydown.enter)="addTodo()"/>
  <button test-data="addButton" (click)="addTodo()" >Add</button>
  <ul test-data="list">
    <li test-data="listItem" *ngFor="let todo of todos">{{todo}}</li>
  </ul>
  
  `,
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todo: string = ''
  todos = []

  constructor() { }

  ngOnInit() {
  }

  addTodo() {

    if (this.todo) {
      this.todos.push(this.todo)
      this.todo = ""
    }
    return
  }
}
