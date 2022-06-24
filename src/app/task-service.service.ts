import { Injectable } from '@angular/core';
import { Task } from './Model/task';
import { MainWindowComponent } from './main-window/main-window.component';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  todos: Task[] = [];
  // private id: number;

  constructor() { 
    // let todos = this.getTasks();
    // if (todos.length == 0) {
    //   this.id = 0;
    // } else {
    //   let ids = todos[todos.length - 1].id;
    //   this.id = ids + 1;
    // }
  }
  public getTasks(): Task[] {
    let localItem = JSON.parse(localStorage.getItem('todos')!);
    return localItem == null ? [] : localItem.tasks;
  }
  public addTask(text: string): void {
    // let task = new Task(this.id, text);
    // let tasks = this.getTasks();
    // tasks.push(task);
    // this.setLocalStorage(tasks);
    // this.id++;
  }
  // addTask() {
  //   this.todos.push({
  //     taskname: this.addTaskValue,
      
  //   });


  //   this.addTaskValue = '';
  // }

}
