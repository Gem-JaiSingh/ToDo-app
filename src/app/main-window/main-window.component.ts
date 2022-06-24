import { Component, OnInit } from '@angular/core';
// import { Task } from '../Model/task';
import { TaskServiceService } from '../task-service.service';


@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css'],
})
export class MainWindowComponent implements OnInit {
  // todos: Task[] = [];
  

  constructor(
    public taskservice : TaskServiceService
  ) {}

  addTaskValue: string = '';

  ngOnInit(): void {}

  addTask() {
    this.taskservice.todos.push({
      taskname: this.addTaskValue,
      
    });
    


    this.addTaskValue = '';
  }

  deleteTask(i: number) {
    this.taskservice.todos.splice(i, 1);
  }

  editTask(i: number) {
    let title = this.taskservice.todos[i].taskname;
    let result = prompt('Edit Task Title', title);
    if (result !== null && result !== '') {
      this.taskservice.todos[i].taskname = result;
    }
  }
}
