import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  todos!: Todo[];

  inputTodo:string="";
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }
  toggleDone (id: number) {

    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }
  deleteTodo (id: number){
    this.todos = this.todos.filter((v, i) => i !==id);
  }

  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    });
    this.inputTodo = "";
  }

}
