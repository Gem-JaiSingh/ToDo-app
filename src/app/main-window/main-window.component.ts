import { Component, OnInit } from '@angular/core';
import { Task } from '../Model/task';

@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css'],
})
export class MainWindowComponent implements OnInit {
  todos: Task[] = [];

  constructor() {}

  addTaskValue: string = '';

  ngOnInit(): void {}

  addTask() {
    this.todos.push({
      taskname: this.addTaskValue,
    });

    this.addTaskValue = '';
  }

  deleteTask(i: number) {
    this.todos.splice(i, 1);
  }

  editTask(i: number) {
    let title = this.todos[i].taskname;
    let result = prompt('Edit Task Title', title);
    if (result !== null && result !== '') {
      this.todos[i].taskname = result;
    }
  }
}
