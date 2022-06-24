import { Component, OnInit,ViewChild } from '@angular/core';
import { TaskServiceService } from '../task-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-main-window',
  templateUrl: './main-window.component.html',
  styleUrls: ['./main-window.component.css'],
})
export class MainWindowComponent implements OnInit {
  closeResult: any;
  

  constructor(
    public taskservice : TaskServiceService,
    private modalService: NgbModal
  ) {}

  

  addTaskValue: string = '';

  ngOnInit(): void {}
  @ViewChild('TaskForm') TaskForm!: NgForm;

  onSubmit() {
    this.taskservice.todos.push({
      taskname: this.TaskForm?.value.task
      
    });
    this.TaskForm.reset()


  
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
